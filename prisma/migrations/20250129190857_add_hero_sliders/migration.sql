/*
  Warnings:

  - You are about to drop the `HeroSlider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HeroSlider";

-- CreateTable
CREATE TABLE "HeroSliders" (
    "id" SERIAL NOT NULL,
    "subtitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "direction" TEXT NOT NULL,

    CONSTRAINT "HeroSliders_pkey" PRIMARY KEY ("id")
);
