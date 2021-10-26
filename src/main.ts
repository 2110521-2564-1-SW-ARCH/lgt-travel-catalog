import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://gqldglik:XY93b97Po2ojTHxaHHbSQfkX_I1MZJPN@elk.rmq2.cloudamqp.com/gqldglik'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen()
}
bootstrap();
