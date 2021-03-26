import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository // Injected User Repository
        ){}                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    async signup(credentialDto : AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(credentialDto);
    }
    
    async signin(credentialDto : AuthCredentialsDto): Promise<void> {
        const username = await this.userRepository.validateUserPassword(credentialDto)
        
        if (!username) {
            throw new UnauthorizedException('Invalid Credentials')
        }
    }
}   
