import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    // Como você usa a porta 5432, criamos um pool para gerenciar a conexão direta
    const pool = new Pool({ 
      connectionString: process.env.DATABASE_URL,
      max: 10 // Limite de conexões simultâneas para não estourar o Supabase Free
    });
    
    const adapter = new PrismaPg(pool);

    // OBRIGATÓRIO na v7 quando o schema.prisma não tem a propriedade 'url'
    super({ adapter });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Conexão direta estabelecida na porta 5432!');
    } catch (error) {
      this.logger.error('❌ Erro ao conectar ao Supabase:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}