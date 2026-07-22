/*
  Warnings:

  - You are about to drop the `mensajes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mensajes";

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
