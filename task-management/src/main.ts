import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config'; // Imported Configuration Package

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap'); // Added Logger

  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || serverConfig.port; // Defined port num
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
  
}
bootstrap();
