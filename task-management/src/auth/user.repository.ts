import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';



// Authorization Logic will appear here

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(credentialDto : AuthCredentialsDto): Promise<void> {
        const {username, password} = credentialDto;

        const user = new User();
        user.username = username;
        user.password = password;

        await user.save();
    }

}