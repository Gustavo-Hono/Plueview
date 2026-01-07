import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit
{
  constructor() {
    super({
      adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL!,
      }),
    });
  }

  async onModuleInit() {
    try {
      await this.$connect(); // ✅ NÃO use $queryRaw
      Logger.log('Conectado ao database');
    } catch (error) {
      Logger.error('Não conectado ao database', error);
      throw error;
    }
  }
}
