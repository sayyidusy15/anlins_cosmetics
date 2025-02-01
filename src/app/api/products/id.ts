// import { NextResponse } from "next/server";
// import { getProductById } from "@/lib/db"; // Mengambil fungsi dari db untuk mendapatkan data produk berdasarkan ID

// // Fungsi handler untuk API endpoint
// export async function GET(request: Request, { params }: { params: { id: string } }) {
//   const productId = parseInt(params.id, 10); // Mendapatkan ID produk dari URL
//   const product = await getProductById(productId); // Ambil data produk dari database berdasarkan ID
  
//   if (!product) {
//     return NextResponse.json({ error: "Product not found" }, { status: 404 });
//   }

//   return NextResponse.json(product); // Mengembalikan data produk sebagai JSON
// }
