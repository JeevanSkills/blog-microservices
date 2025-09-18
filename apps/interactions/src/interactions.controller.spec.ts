import { Test, TestingModule } from '@nestjs/testing';
import { InteractionsController } from './interactions.controller';
import { InteractionsService } from './interactions.service';

describe('InteractionsController', () => {
  let interactionsController: InteractionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InteractionsController],
      providers: [InteractionsService],
    }).compile();

    interactionsController = app.get<InteractionsController>(InteractionsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(interactionsController.getHello()).toBe('Hello World!');
    });
  });
});
