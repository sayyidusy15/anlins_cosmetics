import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Oops! halaman yang kamu cari tidak ditemukan
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-slate-950 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
