/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `Credential` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Credential` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Credential_userId_url_key";

-- AlterTable
ALTER TABLE "Credential" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Credential_userId_name_key" ON "Credential"("userId", "name");
