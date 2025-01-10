export default function Slider(){
    return (
        <div className="slider -style-2 slider-arrow-middle">
            <div className="slider__carousel">

              <div className="slider__carousel__item slider-1">
                <div className="container">
                  <div className="slider-background">
                    <img className="slider-background" src="/images/slider/SliderTwo/1.png" alt="Slider background"/></div>
                  <div className="slider-content">
                    <h1 className="slider-content__title" data-animation-in="fadeInUp" data-animation-delay="0.2"><span>Better</span><br/>than before
                    </h1>
                    <p className="slider-content__description" data-animation-in="fadeInUp" data-animation-delay="0.3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div data-animation-in="fadeInUp" data-animation-out="fadeInDown" data-animation-delay="0.4"><a className="btn -white" href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="slider__carousel__item slider-2">
                <div className="container">
                  <div className="slider-background"><img className="slider-background" src="/images/slider/SliderTwo/2.png" alt="Slider background"/></div>
                  <div className="slider-content">
                    <h5 className="slider-content__subtitle" data-animation-in="fadeInUp" data-animation-delay="0.1">Outstanding Beauty</h5>
                    <h1 className="slider-content__title" data-animation-in="fadeInUp" data-animation-delay="0.2">For your nail
                    </h1>
                    <p className="slider-content__description" data-animation-in="fadeInUp" data-animation-delay="0.3">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <div data-animation-in="fadeInUp" data-animation-out="fadeInDown" data-animation-delay="0.4"><a className="btn -dark" href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="slider__carousel__item slider-3">
                <div className="container">
                  <div className="slider-background"><img className="slider-background" src="/images/slider/SliderTwo/3.png" alt="Slider background"/></div>
                  <div className="slider-content">
                    <h5 className="slider-content__subtitle" data-animation-in="fadeInUp" data-animation-delay="0.1">Fragrances that make moments</h5>
                    <h1 className="slider-content__title" data-animation-in="fadeInUp" data-animation-delay="0.2">Unforgettable
                    </h1>
                    <div data-animation-in="fadeInUp" data-animation-out="fadeInDown" data-animation-delay="0.4"><a className="btn -white" href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
    )
}