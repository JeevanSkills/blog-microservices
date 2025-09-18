import { NestFactory } from '@nestjs/core';
import { InteractionsModule } from './interactions.module';

async function bootstrap() {
  const app = await NestFactory.create(InteractionsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
