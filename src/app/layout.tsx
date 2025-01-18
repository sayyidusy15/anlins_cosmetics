// CSS FAMILY
import "@/styles/style.css";
import "@/styles/bootstrap-drawer.min.css";
import "@/styles/bootstrap.css";
import "@/styles/drawer.min.css";
// import "@/styles/fontawesome.css"
import "@/styles/jquery.modal.min.css";
import "@/styles/slick.min.css";
// import "@/styles/star-rating.min.css"

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icon
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       
        <Navbar />
        <main>{children}</main> {/* Konten halaman akan dirender di sini */}
        <Footer />
      </body>
    </html>
  );
}
