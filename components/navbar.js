import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = ({pageTitle=""}) => {
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
                    <Link href="https://github.com/ddgroleau" >
                        <img
                        alt="Github logo"
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/github?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" 
                        src='/assets/github.svg'>
                        </img>
                    </Link>
                    <Link href="https://www.linkedin.com/in/dangroleau/">
                        <img 
                        alt="LinkedIn logo"
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/linkedin?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" 
                        src='/assets/linkedin.svg'>
                        </img>
                    </Link>
                    <Link href="https://twitter.com/_FullStackDan">
                        <img 
                        alt="Twitter logo"
                        data-attribution="Credit: https://fontawesome.com/v5.15/icons/twitter?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                        className="img__brand" 
                        src='/assets/twitter.svg'>
                        </img>
                    </Link>
                </div>
                <nav id="navbar__desktop" className={navDesktop}>
                    <Link className={`link navbar__link ${pageTitle.includes('Home') ? 'navbar__link-active':''}`}   href="/">Home</Link>
                    <details>

                    <summary className={`navbar__summary ${pageTitle.includes('Home') ? '':'navbar__link-active'}`}>About Me</summary>
                        <div className="navbar__details-desktop">
                            <Link className={`link navbar__link ${pageTitle.includes('About') ? 'navbar__link-active':''}`} href="/about-me">About Me</Link>
                            <Link className={`link navbar__link ${pageTitle.includes('Work') ? 'navbar__link-active':''}`} href="/about-me/work">My Work</Link>
                            <Link className={`link navbar__link ${pageTitle.includes('Services') ? 'navbar__link-active':''}`} href="/about-me/services">Services</Link>
                            <Link className={`link navbar__link ${pageTitle.includes('Contact') ? 'navbar__link-active':''}`} href="/about-me/contact">Contact</Link>
                        </div>
                    </details>
                </nav>
                <img id="navbar__toggle-btn" className="navbar__toggle-btn" src="/assets/navbar-toggler.svg" onClick={toggleNav} alt="Mobile toggle icon" />
            </div>
            <div id="navbar__dropdown" className={navbarDropdownClass}>
                    <Link id="home" className={`link btn ${pageTitle.includes('Home') ? 'btn-active':''}`} href="/">Home</Link>
                    <details>
                     <summary className={`link btn ${pageTitle.includes('Home') ? '':'btn-active'}`}>About Me</summary>
                         <div className="navbar__details">
                            <Link id="about-me" className={`link-sm btn-sm ${pageTitle.includes('About') ? 'btn-active':''}`} href="/about-me">About Me</Link>
                            <Link id="work"     className={`link-sm btn-sm ${pageTitle.includes('Work') ? 'btn-active':''}`} href="/about-me/work">My Work</Link>
                            <Link id="services" className={`link-sm btn-sm ${pageTitle.includes('Services') ? 'btn-active':''}`} href="/about-me/services">Services</Link>
                            <Link id="contact"  className={`link-sm btn-sm ${pageTitle.includes('Contact') ? 'btn-active':''}`} href="/about-me/contact">Contact</Link>
                        </div>
                    </details>
            </div>
        </header>
      </>
  )}

export default Navbar;
