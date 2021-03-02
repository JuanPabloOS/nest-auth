import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Amiwos x2!';
  }
  getAuth(id: string, token: string): any {
    return {
      payload: 'Succesfully attempt',
      userID: id,
      token: token,
    };
  }
}
