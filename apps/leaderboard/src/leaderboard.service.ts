import { Injectable } from '@nestjs/common';

@Injectable()
export class LeaderboardService {
  getHello(): string {
    return 'Hello World!';
  }
}
