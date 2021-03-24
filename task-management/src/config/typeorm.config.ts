import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Database Configuration
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database : 'taskmanagement',
    autoLoadEntities: true,
    synchronize : true
};