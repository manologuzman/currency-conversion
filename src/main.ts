import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar carpeta de archivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // Servir la documentación generada por Compodoc
  app.useStaticAssets(join(__dirname, '..', 'documentation'), {
    prefix: '/documentation',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API de Conversión de Monedas BBVA')
    .setDescription('API para convertir monedas utilizando códigos ISO 4217')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
  console.log(
    `La aplicación Conversión de Monedas BBVA está ejecutándose en: ${await app.getUrl()}`,
  );
  console.log(
    `Documentación disponible en: ${await app.getUrl()}/documentation/`,
  );
}
bootstrap();
