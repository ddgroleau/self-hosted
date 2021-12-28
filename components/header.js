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
    <head>
        <title>{pageTitle}</title>
        <script src="https://kit.fontawesome.com/34584ec87f.js" crossorigin="anonymous"></script>
    </head>
    <header>
        <div id="navbar" className="navbar">
            <div className="social">
                <i href="https://github.com/ddgroleau" className="fab fa-github fa-2x"></i>
                <i href="https://www.linkedin.com/in/dangroleau/" className="fab fa-linkedin fa-2x"></i>
                <i href="https://twitter.com/_FullStackDan" className="fab fa-twitter fa-2x"></i>
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
