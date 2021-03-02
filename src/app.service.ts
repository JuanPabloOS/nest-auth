import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Amiwos x2!';
  }
  getAuth(): any {
    return {
      payload: 'Succesfully attempt',
    };
  }
}
