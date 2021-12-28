import { useEffect, useState } from 'react';

const Header = ({pageTitle}) => {
    let toggleNav = () =>{};
    
    useEffect(() => {
      if (typeof window !== "undefined") {
        let isToggled = false;
        let navToggler = document.getElementById("navbar-dropdown");
        
        toggleNav = () => {
                isToggled = !isToggled;
                if (isToggled) {
                    navToggler.style = "display:flex;";
                } else {
                    navToggler.style = "display:none;";
                }
        }
        if (pageTitle.includes('Home')) {
            document.getElementById("nav-header").style ="display:none";
            document.getElementById("home").style="display:none";
             document.getElementById("about").style="display:none";
      
            let navbarDropdown = document.getElementById("navbar-dropdown")
            navbarDropdown.className ="navbar-dropdown-home";

            window.onscroll = () => { 
            "use strict";
                if (document.body.scrollTop >= 600 ) {
                    document.getElementById("navbar-dropdown").className ="navbar-dropdown";
                } 
                else {
                    document.getElementById("navbar-dropdown").className ="navbar-dropdown-home";
                }
            }
        }
      }
    });
  return (
    <>
    <head>
        <title>{pageTitle}</title>
        <script src="https://kit.fontawesome.com/34584ec87f.js" crossorigin="anonymous"></script>
    </head>
    <header>
        <div id="navbar" classNameName="navbar">
            <div className="social">
                <i href="https://github.com/ddgroleau" className="fab fa-github fa-2x"></i>
                <i href="https://www.linkedin.com/in/dangroleau/" className="fab fa-linkedin fa-2x"></i>
                <i href="https://twitter.com/_FullStackDan" className="fab fa-twitter fa-2x"></i>
            </div>
            <nav id="nav-header" className="nav-header">
                <a className="link nav-link" href="/">Home</a>
                <a className="link nav-link" href="/projects">Projects</a>
                <a className="link nav-link" href="/tutorials">Tutorials</a>
                <a className="link nav-link" href="/contact">Contact</a>
            </nav>
            <img id="navbar-toggler" className="navbar-toggler" src="./assets/navbar-toggler.svg" onClick={toggleNav} />
        </div>
        <div id="navbar-dropdown" className="navbar-dropdown">
                <a id="home" className="link btn" href="/">Home</a>
                <a id="projects" className="link btn" href="/projects">Projects</a>
                <a id="tutorials" className="link btn " href="/tutorials">Tutorials</a>
                <a id="about" className="link btn" href="/#about-anchor">About</a>
                <a id="contact" className="link btn" href="/contact">Contact</a>
        </div>
    </header>
    </>
  )}

export default Header;
