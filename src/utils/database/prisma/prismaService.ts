import { PrismaClient } from '../../../../prisma/generated/client';
import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {

  constructor() {
    const connectionString = `${process.env.DATABASE_URL}`;

    super({
      log: ["query"],
      adapter: new PrismaPg({ connectionString })
    });
  }

}

