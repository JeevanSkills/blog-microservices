import { Injectable } from '@nestjs/common';

@Injectable()
export class InteractionsService {
  getHello(): string {
    return 'Hello World!';
  }
}
