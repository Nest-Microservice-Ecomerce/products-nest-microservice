import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/env';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const logger = new Logger(bootstrap.name);

  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: envs.port,
      },
    },
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      // transformOptions: {
      //   enableImplicitConversion: true,
      // },
    }),
  );

  // await app.listen(envs.port);
  // logger.log(`Application is running on PORT: ${envs.port}`);

  await app.listen();
  logger.log(`Products microservice is running on PORT: ${envs.port}`);
}
bootstrap();
