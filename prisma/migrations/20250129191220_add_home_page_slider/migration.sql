/*
  Warnings:

  - You are about to drop the `HeroSliders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HeroSliders";

-- CreateTable
CREATE TABLE "HomePageSlider" (
    "id" SERIAL NOT NULL,
    "subtitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "direction" TEXT NOT NULL,

    CONSTRAINT "HomePageSlider_pkey" PRIMARY KEY ("id")
);
