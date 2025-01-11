import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const products = await prisma.productTab.findMany();
  res.status(200).json(products);
}
