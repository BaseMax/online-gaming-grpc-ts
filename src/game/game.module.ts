import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [GameService],
  controllers: [GameController],
  imports: [
    ClientsModule.register([
      {
        name: 'GAME_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'game',
          protoPath: '../proto/game.proto',
        },
      },
    ]),
  ],
})
export class GameModule {}
