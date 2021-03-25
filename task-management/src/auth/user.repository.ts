import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';



// Authorization Logic will appear here

@EntityRepository(User)
export class UserRepository extends Repository<User> {


}