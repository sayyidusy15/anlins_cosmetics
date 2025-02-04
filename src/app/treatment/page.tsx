"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function TreatmentPage() {
  return (
    <div id="content">
      <div className="breadcrumb">
        <div className="container">
          <h2>Services</h2>
          <ul>
            <li>Home</li>
            <li className="active">Services</li>
          </ul>
        </div>
      </div>

      <div className="shop">
        <div className="container">
          <div className="services__item">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="services__item__image">
                  <div className="services__item__image__background">
                    <Image
                      src="/images/introduction/IntroductionThree/bg.png"
                      alt="background"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="services__item__image__detail">
                    <div className="image__item">
                      <div className="wrapper">
                        <Image
                          data-depth="0.3"
                          src="/images/contact/1_1.png"
                          alt="image"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="image__item">
                      <div className="wrapper">
                        {/* Gambar kecil di depan */}
                        {/* <Image
                          data-depth="0.2"
                          data-invert-x="true"
                          data-invert-y="true"
                          src="/images/contact/1.png"
                          alt="image"
                          width={500}
                          height={500}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="services__item__content">
                  <div className="services__item__order">
                    <h3>01.</h3>
                  </div>
                  <h2 className="services__item__title">Body treatment</h2>
                  <p className="services__item__description">
                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis
                    pendisse ultrices gravida. Risus commodo viverra lacus vel
                    facilisis.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>Lorem ipsum dolor sit
                      amet, consectetur.
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Adipiscing elit, sed do
                      eiusmod tempor.
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Incididunt ut labore et
                      dolore magna aliqua.
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Quis ipsum suspendisse
                      ultrices gravida.
                    </li>
                  </ul>
                  <a className="btn -white" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="services__item -reverse">
            <div className="row">
              <div className="col-12 col-md-6 order-md-2">
                <div className="services__item__image">
                  <div className="services__item__image__background">
                    <Image
                      src="/images/introduction/IntroductionThree/bg.png"
                      alt="background"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="services__item__image__detail">
                    <div className="image__item">
                      <div className="wrapper">
                        <Image
                          data-depth="0.3"
                          src="/images/contact/2_1.png"
                          alt="image"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="image__item">
                      <div className="wrapper">
                        {/* Gambar kecil di depan */}
                        {/* <Image
                          data-depth="0.2"
                          data-invert-x="true"
                          data-invert-y="true"
                          src="/images/contact/2.png"
                          alt="image"
                          width={500}
                          height={500}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 order-md-1">
                <div className="services__item__content">
                  <div className="services__item__order">
                    <h3>02.</h3>
                  </div>
                  <h2 className="services__item__title">Professinal makeup</h2>
                  <p className="services__item__description">
                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis
                    pendisse ultrices gravida. Risus commodo viverra lacus vel
                    facilisis.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>Lorem ipsum dolor sit
                      amet, consectetur.
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Adipiscing elit, sed do
                      eiusmod tempor.
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Incididunt ut labore et
                      dolore magna aliqua.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="text-red-500"/>
                      Quis ipsum suspendisse
                      ultrices gravida.
                    </li>
                  </ul>
                  <a className="btn -white" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
