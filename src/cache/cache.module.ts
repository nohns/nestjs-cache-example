import { CacheModule as NestCacheModule, Global } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheConfigurationService } from './cache-configuration.service';

@Global()
@Module({
    imports: [
        NestCacheModule.registerAsync({
            useClass: CacheConfigurationService,
            inject: [CacheConfigurationService]
        }),
    ],
    providers: [
        CacheService,
        CacheConfigurationService,
    ],
    exports: [
        CacheService,
    ],
})
export class CacheModule { }
