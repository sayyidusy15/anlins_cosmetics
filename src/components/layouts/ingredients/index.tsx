export default function Ingredients(){
    return(
        <div className="introduction-six">
        <div className="container">
                <div className="section-title -center mb-[1.875em]">
                  <h2>What Ingredients?</h2>
                  {/* <img src="/images/introduction/IntroductionOne/content-deco.png" alt="Decoration"/> */}
                </div>
          <div className="introduction-six__wrapper">
            <div className="row">

              <div className="col-12 col-md-6 col-lg-4">
                <div className="introduction-six__wrapper__item">
                  <div className="introduction-six__wrapper__item__image"><img src="/images/introduction/Introduction Six/1.png" alt="Rosehip Seed Oil"/></div>
                  <div className="introduction-six__wrapper__item__content"><a href="#">Rosehip Seed Oil</a>
                    <p>Gentle, quick-absorbing moisture packed with vitamins.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="introduction-six__wrapper__item">
                  <div className="introduction-six__wrapper__item__image"><img src="/images/introduction/Introduction Six/2.png" alt="Sweet Almond Seed Oil"/></div>
                  <div className="introduction-six__wrapper__item__content"><a href="#">Sweet Almond Seed Oil</a>
                    <p>A natural emollient used to moisturize and promote skin elasticit.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-lg-4">
                <div className="introduction-six__wrapper__item">
                  <div className="introduction-six__wrapper__item__image"><img src="/images/introduction/Introduction Six/3.png" alt="Gardenia Florida Extract"/></div>
                  <div className="introduction-six__wrapper__item__content"><a href="#">Gardenia Florida Extract</a>
                    <p>Its inherent astringency tones and balances skin while infusing.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
}