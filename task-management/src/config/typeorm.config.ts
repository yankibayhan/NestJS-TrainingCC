import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config'

const dbConfig = config.get('db');

// Database Configuration
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database : dbConfig.database,
    autoLoadEntities: true,
    synchronize : true
};