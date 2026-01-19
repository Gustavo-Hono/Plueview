import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // 🔴 ESSENCIAL para ESP32 / SIM7600 / JSON via HTTP
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,            // converte string → number
      whitelist: true,            // remove campos extras
      forbidNonWhitelisted: false // não derruba request por campo extra
    }),
  );

  await app.listen(process.env.PORT || 3000);
}

bootstrap();