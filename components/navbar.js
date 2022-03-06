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
            <div id="navbar" className="navbar" style={pageTitle.includes('About Me') ? {background: "none"} : undefined}>
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
                    <div className={`link navbar__link ${pageTitle.includes('Home') ? 'navbar__link-active':''}`} >
                        <Link href="/">Home</Link>
                    </div>
                    <details>

                    <summary className={`navbar__summary ${pageTitle.includes('Home') ? '':'navbar__link-active'}`}>About Me</summary>
                        <div className="navbar__details-desktop">
                            <div className={`link navbar__link ${pageTitle.includes('About') ? 'navbar__link-active':''}`}>
                                <Link  href="/about-me">About Me</Link>
                            </div>
                            <div className={`link navbar__link ${pageTitle.includes('Work') ? 'navbar__link-active':''}`} >
                                <Link href="/about-me/work">My Work</Link>
                            </div>
                            <div className={`link navbar__link ${pageTitle.includes('Services') ? 'navbar__link-active':''}`} >
                                <Link href="/about-me/services">Services</Link>
                            </div>
                            <div className={`link navbar__link ${pageTitle.includes('Contact') ? 'navbar__link-active':''}`}>
                                <Link href="/about-me/contact">Contact</Link>
                            </div>
                        </div>
                    </details>
                </nav>
                <img id="navbar__toggle-btn" className="navbar__toggle-btn" src="/assets/navbar-toggler.svg" onClick={toggleNav} alt="Mobile toggle icon" />
            </div>
            <div id="navbar__dropdown" className={navbarDropdownClass}>
                    <div className={`link-sm btn ${pageTitle.includes('Home') ? 'btn-active':''}`}>
                        <Link id="home" href="/">Home</Link>
                    </div>
                    <details>
                     <summary className={`link btn ${pageTitle.includes('Home') ? '':'btn-active'}`}>About Me</summary>
                         <div className="navbar__details">
                            <div className={`link-sm btn-sm ${pageTitle.includes('About') ? 'btn-active':''}`} >
                                <Link id="about-me" href="/about-me">About Me</Link>
                            </div>
                            <div  className={`link-sm btn-sm ${pageTitle.includes('Work') ? 'btn-active':''}`}>
                                <Link id="work" href="/about-me/work">My Work</Link>
                            </div>
                            <div className={`link-sm btn-sm ${pageTitle.includes('Services') ? 'btn-active':''}`}> 
                                <Link id="services" href="/about-me/services">Services</Link>
                            </div>
                            <div className={`link-sm btn-sm ${pageTitle.includes('Contact') ? 'btn-active':''}`}> 
                                <Link id="contact" href="/about-me/contact">Contact</Link>
                            </div>
                        </div>
                    </details>
            </div>
        </header>
      </>
  )}

export default Navbar;
