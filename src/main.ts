import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from './logging/logger'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: Logger(),
  })

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000)
}
bootstrap()