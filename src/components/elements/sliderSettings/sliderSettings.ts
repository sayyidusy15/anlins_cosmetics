// sliderSettings.ts
export const globalSliderSettings = {
    nextArrow: '<a href="#" class="slick-next"><i class="far fa-chevron-right"></i></a>',
    prevArrow: '<a href="#" class="slick-prev"><i class="far fa-chevron-left"></i></a>',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customPaging: function (_: unknown, _i: number) {
      return '<div class="slider-dot"></div>';
    },
  };
  