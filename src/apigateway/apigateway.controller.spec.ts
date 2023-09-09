import { Test, TestingModule } from '@nestjs/testing';
import { ApigatewayController } from './apigateway.controller';

describe('ApigatewayController', () => {
  let controller: ApigatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApigatewayController],
    }).compile();

    controller = module.get<ApigatewayController>(ApigatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
