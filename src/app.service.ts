import { Injectable, CACHE_MANAGER } from '@nestjs/common';
import { CacheService } from './cache/cache.service';

@Injectable()
export class AppService {
  constructor(private cacheService: CacheService) {}

  /**
   * Sets the greeting in the cache
   * 
   * @param greeting the greeting for the user
   */
  public async setHello(greeting: string): Promise<void> {
    await this.cacheService.set<string>("greeting", greeting);
  }

  /**
   * Gets the greeting from the cache 
   */
  public async getHello(): Promise<string> {
    const greeting = await this.cacheService.get<string>("greeting");
    return greeting ?? 'Hello World!';
  }

  public async invalidateHello(): Promise<void> {
    await this.cacheService.invalidate("greeting");
  }
}
