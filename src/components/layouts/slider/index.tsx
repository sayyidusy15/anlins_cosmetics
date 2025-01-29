// File: components/layouts/slider/index.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import untuk efek fade

import { Pagination, EffectFade, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="slider -style-2 slider-arrow-middle">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]} // Menambahkan module Autoplay
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        loop
        effect="fade"
        autoplay={{
          delay: 5000, // Auto slide setiap 5 detik
          disableOnInteraction: false, // Menjaga autoplay meskipun ada interaksi
        }}
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        className="slider__carousel"
      >
        {/* === SLIDER === */}
        {/* Card 1 */}
        <SwiperSlide>
          <div className="slider__carousel__item slider-1">
            <div className="container">
              <div className="slider-background">
                <img
                  className="slider-background"
                  src="/images/slider/SliderTwo/1.png"
                  alt="Slider background"
                />
              </div>
              <div className="slider-content">
                <h1 className="slider-content__title">
                  <span>Better</span>
                  <br /> than before
                </h1>
                <p className="slider-content__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a className="btn -white" href="#">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide>
          <div className="slider__carousel__item slider-2">
            <div className="container">
              <div className="slider-background">
                <img
                  className="slider-background"
                  src="/images/slider/SliderTwo/2.png"
                  alt="Slider background"
                />
              </div>
              <div className="slider-content">
                <h5 className="slider-content__subtitle">Outstanding Beauty</h5>
                <h1 className="slider-content__title">For your nail</h1>
                <p className="slider-content__description">
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <a className="btn -dark" href="#">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide>
          <div className="slider__carousel__item slider-3">
            <div className="container">
              <div className="slider-background">
                <img
                  className="slider-background"
                  src="/images/slider/SliderTwo/3.png"
                  alt="Slider background"
                />
              </div>
              <div className="slider-content">
                <h5 className="slider-content__subtitle">Outstanding Beauty</h5>
                <h1 className="slider-content__title">For your nail</h1>
                <p className="slider-content__description">
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <a className="btn -dark" href="#">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom pagination styling */}
      <div className="swiper-pagination "></div>
    </div>
  );
}
