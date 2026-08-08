import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-one bg-white text-slate-800 border-t border-slate-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Header (Logo & Social Icons) */}
        <div className="footer-one__header flex flex-wrap items-center justify-between border-b border-slate-200 pb-8 mb-8">
          <div className="footer-one__header__logo">
            <a href="/">
              <img
                src="/images/logo-text-anlins.png"
                alt="Anlins Beauty Logo"
                className="h-14 object-contain"
              />
            </a>
          </div>

          <div className="footer-one__header__social mt-4 md:mt-0">
            <div className="social-icons -border flex space-x-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-sm" />
              </a>
              <a
                href="https://www.instagram.com/anlinsbeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Body (Info & Payment) */}
        <div className="footer-one__body mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="footer__section -info">
              <h5 className="footer-title text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                Kontak Info
              </h5>
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                Kami buka setiap hari pada pukul 09:00 pagi dan tutup pukul 19:00 sore.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <strong className="font-semibold text-slate-900">Alamat:</strong>{" "}
                  <span>JL Bhineka Karya Asri Village Blok V3 No.1 Sukabumi</span>
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Telepon:</strong>{" "}
                  <a href="tel:+6285793869960" className="hover:text-rose-600">(+62) 857-9386-9960</a>
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Email:</strong>{" "}
                  <a href="mailto:Anlins@example.com" className="hover:text-rose-600">Anlins@example.com</a>
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Jam Operasional:</strong>{" "}
                  <span>09.00 AM - 19.00 PM</span>
                </p>
              </div>
            </div>

            <div className="footer__section -payment">
              <h5 className="footer-title text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                Metode Pembayaran
              </h5>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Metode pembayaran bisa melalui transfer bank atau pembayaran langsung di toko kami.
              </p>
              <div className="payment-methods">
                <img
                  src="/images/footer/payment-2.png"
                  alt="Payment methods"
                  className="max-h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-one__footer border-t border-slate-200 pt-6 mt-6">
          <div className="flex flex-wrap items-center justify-between text-sm text-slate-600">
            <p className="font-medium">© Copyright 2025 Anlins Beauty. All Rights Reserved.</p>
            <ul className="flex space-x-4 mt-2 sm:mt-0">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-rose-600 transition-colors font-medium"
                >
                  Alamat Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
