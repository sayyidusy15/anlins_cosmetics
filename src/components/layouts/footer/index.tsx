import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className="footer-one">
        <div className="container">
          <div className="footer-one__header">
            <div className="footer-one__header__logo">
                <a href="/homepages/homepage1"><img src="/images/logo.png" alt="Logo"/></a>
            </div>
            <div className="footer-one__header__newsletter"><span>Subscribe Newletter:</span>
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
            </div>
            <div className="footer-one__header__social">
                    <div className="social-icons -border">
                      <ul>
                        <li>
                            <a href="https://www.facebook.com/" >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/" >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" >
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
                  <h5 className="footer-title">Contact info</h5>
                  <p>Address:<span>2168 S Archer Ave, Chicago, IL 60616, US</span></p>
                  <p>Phone:<span>+1 312-808-1999</span></p>
                  <p>Email:<span>Beatycosmetics@gmail.com</span></p>
                  <p>Opentime:<span>8.00am - 11.00.pm</span></p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
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
              </div>
              <div className="col-12 col-lg-4">
                <div className="footer__section -payment">
                  <h5 className="footer-title">Payment methods</h5>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit gravida facilisis.</p>
                  <div className="payment-methods"><img src="/images/footer/payment.png" alt="Payment methods"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-one__footer">
          <div className="container">
            <div className="footer-one__footer__wrapper">
              <p>© Copyright 2020 Beauty</p>
              <ul>
                <li><a href="contact.html">Privacy Policy</a></li>
                <li><a href="contact.html">Terms &amp; Condition</a></li>
                <li><a href="contact.html">Site map</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )

}