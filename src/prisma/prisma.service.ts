import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super(); // O Prisma lerá a DATABASE_URL automaticamente do ambiente
  }

  async onModuleInit() {
    try {
      await this.$connect();
      Logger.log('✅ Conectado ao banco de dados com sucesso!');
    } catch (error) {
      Logger.error('❌ Erro ao conectar ao banco de dados', error);
      process.exit(1);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}