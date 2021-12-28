import { useState } from 'react';

const Header = ({pageTitle}) => {
    const [isToggled, setIsToggled] = useState(true);
    const [navbarDropdownClass, setNavbarDropDownClass] = useState('hidden');
    let navHeader = 'nav-header';
    let btnClass = 'link btn';
    let navbarDropdown = 'navbar-dropdown';

    if (pageTitle.includes('Home')) {
        navHeader ="hidden";
        btnClass="hidden";
        navbarDropdown = 'navbar-dropdown-home';
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
            <div className="social">
                <img href="https://github.com/ddgroleau" 
                    data-attribution="Credit: https://fontawesome.com/v5.15/icons/github?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                    className="img-brand" src='./assets/github.svg'/>
                <img href="https://www.linkedin.com/in/dangroleau/" className="img-brand" src='./assets/linkedin.svg'
                    data-attribution="Credit: https://fontawesome.com/v5.15/icons/linkedin?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                    className="img-brand" src='./assets/linkedin.svg'/>
                <img href="https://twitter.com/_FullStackDan" className="img-brand" src='./assets/twitter.svg'
                    data-attribution="Credit: https://fontawesome.com/v5.15/icons/twitter?style=brands, License: https://fontawesome.com/license, SVG Fill changed to #ffff." 
                    className="img-brand" src='./assets/twitter.svg'/>
            </div>
            <nav id="nav-header" className={navHeader}>
                <a className="link nav-link" href="/">Home</a>
                <a className="link nav-link" href="/projects">Projects</a>
                <a className="link nav-link" href="/tutorials">Tutorials</a>
                <a className="link nav-link" href="/contact">Contact</a>
            </nav>
            <img id="navbar-toggler" className="navbar-toggler" src="./assets/navbar-toggler.svg" onClick={toggleNav} />
        </div>
        <div id="navbar-dropdown" className={navbarDropdownClass}>
                <a id="home" className={btnClass} href="/">Home</a>
                <a id="projects" className="link btn" href="/projects">Projects</a>
                <a id="tutorials" className="link btn " href="/tutorials">Tutorials</a>
                <a id="about" className={btnClass} href="/#about-anchor">About</a>
                <a id="contact" className="link btn" href="/contact">Contact</a>
        </div>
    </header>
    </>
  )}

export default Header;
