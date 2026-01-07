import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    // Não passamos nada no super(). 
    // O Prisma 7 procurará automaticamente por process.env.DATABASE_URL
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Conectado ao banco de dados com sucesso!');
    } catch (error) {
      this.logger.error('❌ Erro ao conectar ao banco de dados. Verifique a DATABASE_URL.');
      // No Render, é melhor deixar o erro subir para ele saber que o deploy falhou
      throw error; 
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}