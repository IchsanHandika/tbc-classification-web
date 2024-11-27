import webLogo from '../assets/img/logo-web.png'

function NavbarClassification() {

    return (
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="/" className="logo d-flex align-items-center me-auto">
            <img src= {webLogo} alt=""/>
            <h1 className="sitename">Group-3</h1>
        </a>

        <nav id="navmenu" className="navmenu">
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="/">Home</a>

        </div>
      </header>
    )
  }
  
  export default NavbarClassification