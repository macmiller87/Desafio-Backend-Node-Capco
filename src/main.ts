import "dotenv/config";
import { AppError } from "@utils/errors/appError";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from "express";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  await app.listen(Number(process.env.PORT));
  console.log(`Server is running at ${await app.getUrl()} 🚀`);

  app.use((erro: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {

    if(erro instanceof AppError) {
        return response.status(erro.statusCode).json({ message: erro.message });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal Server Error ${erro.message}`
    });

  });

}

bootstrap();
