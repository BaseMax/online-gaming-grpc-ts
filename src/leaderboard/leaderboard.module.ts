import { Module } from '@nestjs/common';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [LeaderboardController],
  providers: [LeaderboardService],
  imports: [
    ClientsModule.register([
      {
        name: 'LEADERBOARD_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'leaderboard',
          protoPath: '../proto/leaderboard.proto',
        },
      },
    ]),
  ],
})
export class LeaderboardModule {}
