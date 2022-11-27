import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Docs for this API runnig on: http://localhost:3333/api';
  }
}
