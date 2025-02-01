// pages/api/productTab/[slug].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query; // Ambil slug dari query params
  if (slug) {
    try {
      const product = await prisma.productTab.findUnique({
        where: { slug: String(slug) }, // Gunakan slug untuk query
      });

      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(400).json({ error: 'Slug is missing' });
  }
}
