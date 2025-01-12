// File: components/layouts/slider/index.tsx

'use client';
import { useEffect, useRef } from 'react';
import jQuery from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

//slidersettings
import { globalSliderSettings } from '@/components/elements/sliderSettings/sliderSettings';

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ = jQuery;

    const animationHandle = (currentSlide: JQuery<HTMLElement>) => {
      const animationItems = currentSlide.find("[data-animation-in]");

      animationItems.each(function () {
        const $item = $(this);
        const animationName = $item.data("animation-in") as string;
        const animationDelay = $item.data("animation-delay") as number;
        const addedAnimationName = `animate__${animationName}`;

        $item
          .addClass(`animate__animated ${addedAnimationName}`)
          .css({
            animationDelay: `${animationDelay}s`,
          });

        $item.one(
          "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
          function () {
            $(this).removeClass(`animate__animated ${addedAnimationName}`);
          }
        );
      });
    };

    if (sliderRef.current) {
      const $slider = $(".slider__carousel");

      $slider.on("init", function (_event, slick) {
        const $currentSlide = $(slick.$slider).find(
          ".slider__carousel__item.slick-active"
        );
        animationHandle($currentSlide);
      });

      $slider.on(
        "beforeChange",
        function (_event, _slick, _currentSlide, nextSlide) {
          const $nextSlide = $(`.slider__carousel__item[data-slick-index="${nextSlide}"]`);
          animationHandle($nextSlide);
        }
      );

      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: "slider-dots container",
        fade: true,
        infinite: true,
        ...globalSliderSettings, // Menggunakan global settings
      });
    }

    return () => {
      if (sliderRef.current) {
        const $slider = $(".slider__carousel");
        if ($slider.hasClass("slick-initialized")) {
          $slider.slick("unslick");
        }
      }
    };
  }, []);

  return (
    <div className="slider -style-2 slider-arrow-middle">
      <div ref={sliderRef} className="slider__carousel">

        <div className="slider__carousel__item slider-1">
          <div className="container">
            <div className="slider-background">
              <img className="slider-background" src="/images/slider/SliderTwo/1.png" alt="Slider background"/>
            </div>
            <div className="slider-content">
              <h1 className="slider-content__title" data-animation-in="fadeInUp" data-animation-delay="0.2">
                <span>Better</span><br/>than before
              </h1>
              <p className="slider-content__description" data-animation-in="fadeInUp" data-animation-delay="0.3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div data-animation-in="fadeInUp" data-animation-out="fadeInDown" data-animation-delay="0.4">
                <a className="btn -white" href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="slider__carousel__item slider-2">
                <div className="container">
                  <div className="slider-background">
                    {/* <img className="slider-background" src="/images/slider/SliderTwo/2.png" alt="Slider background"/> */}
                  </div>
                  <div className="slider-content">
                    <h5 className="slider-content__subtitle" data-animation-in="fadeInUp" data-animation-delay="0.1">Outstanding Beauty</h5>
                    <h1 className="slider-content__title" data-animation-in="fadeInUp" data-animation-delay="0.2">For your nail
                    </h1>
                    <p className="slider-content__description" data-animation-in="fadeInUp" data-animation-delay="0.3">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <div data-animation-in="fadeInUp" data-animation-out="fadeInDown" data-animation-delay="0.4"><a className="btn -dark" href="#">Shop now</a>
                    </div>
                  </div>
                </div>
        </div>

        <div className="slider__carousel__item slider-3">
          <div className="container">
            <div className="slider-background">
              <img className="slider-background" src="/images/slider/SliderTwo/2.png" alt="Slider background"/>
            </div>
            <div className="slider-content">
              <h5 className="slider-content__subtitle" data-animation-in="fadeInUp" data-animation-delay="0.1">
                Outstanding Beauty
              </h5>
              <h1 className="slider-content__title" data-animation-in="fadeInUp" data-animation-delay="0.2">
                For your nail
              </h1>
              <p className="slider-content__description" data-animation-in="fadeInUp" data-animation-delay="0.3">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
              <div data-animation-in="fadeInUp" data-animation-out="fadeInDown" data-animation-delay="0.4">
                <a className="btn -dark" href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div> 
        
      </div>
    </div>
  );
}

