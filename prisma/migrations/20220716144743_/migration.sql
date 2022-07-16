-- CreateEnum
CREATE TYPE "docType" AS ENUM ('CNH', 'RG');

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "docType" NOT NULL,
    "title" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "issuingBody" TEXT NOT NULL,
    "completeName" TEXT NOT NULL,
    "emissionDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Document_userId_number_key" ON "Document"("userId", "number");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
