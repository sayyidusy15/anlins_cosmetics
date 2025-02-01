-- CreateTable
CREATE TABLE "HeroSLider" (
    "id" SERIAL NOT NULL,
    "subtitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "direction" TEXT NOT NULL,

    CONSTRAINT "HeroSLider_pkey" PRIMARY KEY ("id")
);
