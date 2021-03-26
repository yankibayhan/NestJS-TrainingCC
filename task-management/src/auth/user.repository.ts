import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { ConflictException } from '@nestjs/common';



// Authorization Logic will appear here

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(credentialDto : AuthCredentialsDto): Promise<void> {
        const {username, password} = credentialDto;

        const user = new User();
        user.username = username;
        user.password = password;

        try {
            await user.save();
        } catch (error) {
            if (error.code === 23505) { //Username duplicate error
                throw new ConflictException('Username already exists');
            }
        }
    }

}