import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getHello(): Promise<string> {
    const value: number = await this.cacheManager.get('key');
    if (!value) {
      await this.cacheManager.set('key', 1);
    } else {
      await this.cacheManager.set('key', value + 1);
    }
    const result = `Current Visits: ${await this.cacheManager.get('key')}`;
    return result;
  }
}
