import { Controller, Get } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { ExtendedMessage, RMQMessage, RMQRoute} from 'nestjs-rmq';

@Controller()
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @RMQRoute('users.create')
  getHello(@RMQMessage msg: ExtendedMessage): string {
    console.log('we trying to read it', msg);
    return this.preferencesService.getHello();

  }
}
