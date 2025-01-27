/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `ProductTab` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ProductTab" ADD COLUMN     "slug" TEXT;

-- DropTable
DROP TABLE "Product";

-- CreateIndex
CREATE UNIQUE INDEX "ProductTab_slug_key" ON "ProductTab"("slug");
