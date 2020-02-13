import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheService } from './cache/cache.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('set')
  public async setCache(@Query('value') greeting: string): Promise<string> {
    await this.appService.setHello(greeting);
    return `Greeting has been set to "${greeting}"`;
  }

  @Get('reset')
  public async resetCache(): Promise<string> {
    await this.appService.invalidateHello();
    return "Greeting has been reset back to the default...";
  }
}
