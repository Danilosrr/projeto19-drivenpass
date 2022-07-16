/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Document_userId_number_key";

-- CreateIndex
CREATE UNIQUE INDEX "Document_userId_title_key" ON "Document"("userId", "title");
