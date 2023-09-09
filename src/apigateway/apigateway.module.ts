import { Module } from '@nestjs/common';
import { ApigatewayService } from './apigateway.service';
import { ApigatewayController } from './apigateway.controller';

@Module({
  providers: [ApigatewayService],
  controllers: [ApigatewayController]
})
export class ApigatewayModule {}
