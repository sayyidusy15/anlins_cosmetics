-- CreateTable
CREATE TABLE "Treatment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "menu" JSONB NOT NULL,
    "benefit" JSONB NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "btn" TEXT NOT NULL,

    CONSTRAINT "Treatment_pkey" PRIMARY KEY ("id")
);
