import { NestFactory } from '@nestjs/core';
import { LeaderboardModule } from './leaderboard.module';

async function bootstrap() {
  const app = await NestFactory.create(LeaderboardModule);
  await app.listen(3000);
}
bootstrap();
