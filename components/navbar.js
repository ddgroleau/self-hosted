import { useState } from 'react';

const Navbar = ({pageTitle}) => {
    const [isToggled, setIsToggled] = useState(true);
    const [navbarDropdownClass, setNavbarDropDownClass] = useState('hidden');
    let navDesktop = 'navbar__desktop';
    let btnClass = 'link btn';
    let navbarDropdown = 'navbar__dropdown';

    if (pageTitle.includes('About Me')) {
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
        <title>{pageTitle}</title>
        <header>
            <div id="navbar" className="navbar">
                <div className="navbar__social-icons">
                    <a href="https://github.com/ddgroleau" ><img
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/github?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" src='/assets/github.svg'></img></a>
                    <a href="https://www.linkedin.com/in/dangroleau/" ><img className="img-brand" src='./assets/linkedin.svg'
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/linkedin?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" src='/assets/linkedin.svg'></img></a>
                    <a href="https://twitter.com/_FullStackDan" ><img className="img-brand" src='./assets/twitter.svg'
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/twitter?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" src='/assets/twitter.svg'></img></a>
                </div>
                <nav id="navbar__desktop" className={navDesktop}>
                    <a className={`link navbar__link ${pageTitle.includes('Home') ? 'navbar__link-active':''}`}   href="/">Home</a>
                    <details>

                    <summary className={`navbar__summary ${pageTitle.includes('Home') ? '':'navbar__link-active'}`}>About Me</summary>
                        <div className="navbar__details-desktop">
                            <a className={`link navbar__link ${pageTitle.includes('About') ? 'navbar__link-active':''}`} href="/about-me">About Me</a>
                            <a className={`link navbar__link ${pageTitle.includes('Work') ? 'navbar__link-active':''}`} href="/about-me/work">My Work</a>
                            <a className={`link navbar__link ${pageTitle.includes('Services') ? 'navbar__link-active':''}`} href="/about-me/services">Services</a>
                            <a className={`link navbar__link ${pageTitle.includes('Contact') ? 'navbar__link-active':''}`} href="/about-me/contact">Contact</a>
                        </div>
                    </details>
                </nav>
                <img id="navbar__toggle-btn" className="navbar__toggle-btn" src="/assets/navbar-toggler.svg" onClick={toggleNav} />
            </div>
            <div id="navbar__dropdown" className={navbarDropdownClass}>
                    <a id="home" className={`link btn ${pageTitle.includes('Home') ? 'btn-active':''}`} href="/">Home</a>
                    <details>
                     <summary className={`link btn ${pageTitle.includes('Home') ? '':'btn-active'}`}>About Me</summary>
                         <div className="navbar__details">
                            <a id="about-me" className={`link-sm btn-sm ${pageTitle.includes('About') ? 'btn-active':''}`} href="/about-me">About Me</a>
                            <a id="work"     className={`link-sm btn-sm ${pageTitle.includes('Work') ? 'btn-active':''}`}href="/about-me/work">My Work</a>
                            <a id="services" className={`link-sm btn-sm ${pageTitle.includes('Services') ? 'btn-active':''}`}href="/about-me/services">Services</a>
                            <a id="contact"  className={`link-sm btn-sm ${pageTitle.includes('Contact') ? 'btn-active':''}`}href="/about-me/contact">Contact</a>
                        </div>
                    </details>
            </div>
        </header>
      </>
  )}

export default Navbar;
