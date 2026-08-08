export default function NavbarMobile() {
  return (
    <div className="drawer drawer-right slide" id="mobile-menu-drawer" role="dialog" aria-labelledby="drawer-demo-title" aria-hidden="true">
      <div className="drawer-content drawer-content-scrollable" role="document">
        <div className="drawer-body">
          <div className="cart-sidebar">
            <div className="cart-items__wrapper">
              <div className="navigation-sidebar">
                <div className="search-box">
                  <form>
                    <input type="text" placeholder="What are you looking for?"/>
                    <button><img src="/images/header/search-icon.png" alt="Search icon"/></button>
                  </form>
                </div>
                <div className="navigator-mobile">
                  <ul>
                    <li className="relative"><a className="dropdown-menu-controller" href="#">Home<span className="dropable-icon"><i className="fas fa-angle-down"></i></span></a>
                    </li>
                    <li><a href="#treatment">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Shop</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
