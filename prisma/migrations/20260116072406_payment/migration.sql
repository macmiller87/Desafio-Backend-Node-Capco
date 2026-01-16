-- CreateEnum
CREATE TYPE "paymentMethod" AS ENUM ('PIX', 'CREDIT_CARD');

-- CreateEnum
CREATE TYPE "statusMethod" AS ENUM ('PENDING', 'PAID', 'FAIL');

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" "paymentMethod" NOT NULL DEFAULT 'PIX',
    "status" "statusMethod" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
