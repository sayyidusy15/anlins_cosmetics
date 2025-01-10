// import Navbar from "../navbar";
import Script from "next/script";
import NavbarTwo from "../navbarTwo";
import Slider from "../slider";
import ProductTab from "../productTab";

export default function AppShell({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <main>
            <div>
                {children}
                {/* <Navbar/> */}
                <NavbarTwo/>
                <div id="content">
                  <Slider/>
                  <ProductTab/>
                </div>
            </div>
        </main>
        {/* script js */}
        <Script type="module" src="/js/jquery-3.5.1.min.js"/>
        <Script type="module" src="/js/jquery.countdown.min.js"/>
        <Script type="module" src="/js/jquery.modal.min.js"/>
        <Script type="module" src="/js/jquery.validate.min.js"/>
        <Script type="module" src="/js/bootstrap-drawer.min.js"/>
        <Script type="module" src="/js/drawer.min.js"/>
        {/* <Script type="module" src="/js/parallax.js"/>
        <Script type="module" src="/js/parallax.min.js"/> */}
        <Script type="module" src="/js/slick.min.js"/>
        <Script type="module" src="/js/main.min.js"/>
        <Script type="module" src="/js/main.js"/>

      </div>
    );
  }
