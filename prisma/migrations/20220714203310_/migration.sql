/*
  Warnings:

  - A unique constraint covering the columns `[userId,network]` on the table `Wifi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Wifi_userId_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Wifi_userId_network_key" ON "Wifi"("userId", "network");
