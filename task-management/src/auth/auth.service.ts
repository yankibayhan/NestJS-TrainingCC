import { JwtPayload } from './jwt-payload-interface';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository, // Injected User Repository
        private jwtService : JwtService, // Injected JWT Service
        ){}                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    async signup(credentialDto : AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(credentialDto);
    }
    
    async signin(credentialDto : AuthCredentialsDto): Promise<{accessToken: string}> {
        const username = await this.userRepository.validateUserPassword(credentialDto)
        
        if (!username) {
            throw new UnauthorizedException('Invalid Credentials')
        }

        const payload: JwtPayload = { username };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }
}   
