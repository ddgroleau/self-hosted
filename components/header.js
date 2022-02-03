import { useState } from 'react';

const Header = ({pageTitle}) => {
    const [isToggled, setIsToggled] = useState(true);
    const [navbarDropdownClass, setNavbarDropDownClass] = useState('hidden');
    let navDesktop = 'navbar__desktop';
    let btnClass = 'link btn';
    let navbarDropdown = 'navbar__dropdown';

    if (pageTitle.includes('Home')) {
        navDesktop="hidden";
        btnClass="hidden";
        navbarDropdown = 'navbar__dropdown-home';
        }


    const toggleNav = () => {
        isToggled ? setNavbarDropDownClass(navbarDropdown) : setNavbarDropDownClass('hidden');
        setIsToggled(!isToggled);
    };
    
  return (
      <>
        <head>
            <title>{pageTitle}</title>
        </head>
        <header>
            <div id="navbar" className="navbar">
                <div className="navbar__social-icons">
                    <a href="https://github.com/ddgroleau" ><img
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/github?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" src='./assets/github.svg'></img></a>
                    <a href="https://www.linkedin.com/in/dangroleau/" ><img className="img-brand" src='./assets/linkedin.svg'
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/linkedin?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" src='./assets/linkedin.svg'></img></a>
                    <a href="https://twitter.com/_FullStackDan" ><img className="img-brand" src='./assets/twitter.svg'
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/twitter?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" src='./assets/twitter.svg'></img></a>
                </div>
                <nav id="navbar__desktop" className={navDesktop}>
                    <a className="link navbar__link" href="/">Home</a>
                    <a className="link navbar__link" href="/work">Work</a>
                    <a className="link navbar__link" href="/services">Services</a>
                    <a className="link navbar__link" href="/contact">Contact</a>
                </nav>
                <img id="navbar__toggle-btn" className="navbar__toggle-btn" src="./assets/navbar-toggler.svg" onClick={toggleNav} />
            </div>
            <div id="navbar__dropdown" className={navbarDropdownClass}>
                    <a id="home" className={btnClass} href="/">Home</a>
                    <a id="work" className="link btn" href="/work">Work</a>
                    <a id="services" className="link btn " href="/services">Services</a>
                    <a id="about" className={btnClass} href="/#about-anchor">About</a>
                    <a id="contact" className="link btn" href="/contact">Contact</a>
            </div>
        </header>
      </>
  )}

export default Header;
