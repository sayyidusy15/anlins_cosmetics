import Ingredients from "@/components/layouts/ingredients";
import NavbarMobile from "@/components/layouts/navbarMobile";
import ProductTab from "@/components/layouts/productTab";
import Treatment from "@/components/layouts/treatment";
// import Slider from "@/components/layouts/slider";
// import Script from "next/script";

export default function Home() {
  return (
    <>
      <div>
        <main>
            <div>
                {/* <NavbarTwo/> */}
                <div id="content">
                  {/* <Slider/> */}
                  <ProductTab/>
                  <Treatment/>
                  <Ingredients/>
                  <NavbarMobile />
                </div>
            </div>
        </main>
        {/* script js */}
        {/* <Script type="module" src="/js/jquery-3.5.1.min.js"/>
        <Script type="module" src="/js/jquery.countdown.min.js"/>
        <Script type="module" src="/js/jquery.modal.min.js"/>
        <Script type="module" src="/js/jquery.validate.min.js"/>
        <Script type="module" src="/js/bootstrap-drawer.min.js"/>
        <Script type="module" src="/js/drawer.min.js"/> */}
        {/* <Script type="module" src="/js/parallax.js"/>
        <Script type="module" src="/js/parallax.min.js"/> */}
        {/* <Script type="module" src="/js/slick.min.js"/>
        <Script type="module" src="/js/main.min.js"/> */}

      </div>
    </>
  )
}