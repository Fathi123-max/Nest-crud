import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello man!';
  }

  test(): string {
    return 'test';
  }

  postTest(name: string): string {
    return `welcome ${name}`;
  }
}
