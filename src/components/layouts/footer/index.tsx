import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  // faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="footer-one__header">
          <div className="footer-one__header__logo">
            <a href="/homepages/homepage1">
              <Image
                src="/images/logo-text-anlins.png"
                alt="Logo"
                width={200}
                height={200}
              />
            </a>
          </div>
          {/* <div className="footer-one__header__newsletter"><span>Contact by Email:</span>
              <div className="footer-one-newsletter">
                <div className="subscribe-form">
                  <div className="mc-form">
                    <input type="text" placeholder="Enter your email"/>
                          <button className="btn ">
                            <FontAwesomeIcon icon={faPaperPlane} />
                          </button>
                  </div>
                </div>
              </div>
            </div> */}

          {/* Social Media */}
          <div className="footer-one__header__social">
            <div className="social-icons -border">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-one__body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer__section -info">
                <h5 className="footer-title">Kontak Info</h5>
                <p>
                  Address:<span>Kota Sukabumi</span>
                </p>
                <p>
                  Phone:<span>+62 000-0000-000</span>
                </p>
                <p>
                  Email:<span>Anlins@example.com</span>
                </p>
                <p>
                  Opentime:<span>8.00am - 11.00.pm</span>
                </p>
              </div>
            </div>
            {/* footer kolom ke-2 */}
            {/* <div className="col-12 col-md-6 col-lg-4">
                <div className="footer__section -links">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <h5 className="footer-title">Account</h5>
                      <ul>
                        <li><a href="#">My account</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="cart">Cart</a></li>
                        <li><a href="fullwidth-4col">Shop</a></li>
                        <li><a href="checkout">Checkout</a></li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-6">
                      <h5 className="footer-title">Infomation</h5>
                      <ul>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="contact.html">Careers</a></li>
                        <li><a href="contact.html">Delivery Information</a></li>
                        <li><a href="contact.html">Privacy Policy</a></li>
                        <li><a href="contact.html">Terms &amp; Condition</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="col-12 col-lg-4">
              <div className="footer__section -payment">
                <h5 className="footer-title">Metode Pembayaran</h5>
                <p>
                  Metode pembayaran bisa melalui transfer bank atau pembayaran
                  langsung di toko kami.
                </p>
                <div className="payment-methods">
                  <Image 
                  src="/images/footer/payment-2.png" 
                  alt="Payment methods"
                  width={800}
                  height={800} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-one__footer">
        <div className="container">
          <div className="footer-one__footer__wrapper">
            <p>© Copyright 2025 Anlins Beauty</p>
            <ul>
              {/* <li><a href="contact.html">Privacy Policy</a></li>
                <li><a href="contact.html">Terms &amp; Condition</a></li> */}
              <li>
                <a href="contact.html">Alamat Google Maps</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
