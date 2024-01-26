import { Injectable } from '@nestjs/common';

@Injectable()
export class PreferencesService {
  getHello(): string {
    console.log('hello!');

    return 'Hello World!';
  }
}
