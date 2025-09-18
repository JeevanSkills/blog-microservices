import { Controller, Get } from '@nestjs/common';
import { InteractionsService } from './interactions.service';

@Controller()
export class InteractionsController {
  constructor(private readonly interactionsService: InteractionsService) {}

  @Get()
  getHello(): string {
    return this.interactionsService.getHello();
  }
}
