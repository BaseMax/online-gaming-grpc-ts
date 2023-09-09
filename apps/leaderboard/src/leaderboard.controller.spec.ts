import { Test, TestingModule } from '@nestjs/testing';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';

describe('LeaderboardController', () => {
  let leaderboardController: LeaderboardController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LeaderboardController],
      providers: [LeaderboardService],
    }).compile();

    leaderboardController = app.get<LeaderboardController>(LeaderboardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(leaderboardController.getHello()).toBe('Hello World!');
    });
  });
});
