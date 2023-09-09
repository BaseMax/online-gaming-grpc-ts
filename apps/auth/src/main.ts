import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.GRPC, // Replace with your chosen transporter
      options: {
        protoPath: '../auth.proto',
        package: 'AUTH',
      },
    },
  );
  await app.listen();
}
bootstrap();
