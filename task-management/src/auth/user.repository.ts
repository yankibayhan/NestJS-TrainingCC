import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'; // Added Password Crypt Lib




// Authorization Logic will appear here

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(credentialDto : AuthCredentialsDto): Promise<void> {
        const {username, password} = credentialDto;

        
        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt() // Generated Salt for Password Hash
        user.password = await this.hashPassword(password, user.salt);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        try {
                await user.save();
        } catch (error) {
            if (error.code === '23505') { //Username duplicate error
                throw new ConflictException('Username already exists');
            }
            else {
                throw new InternalServerErrorException();
            }
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);

    }

}