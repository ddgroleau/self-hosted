import Layout from '../layout';
import About from '../../components/about';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <Layout pageTitle={'About Me | Dan Groleau'}>
      <div className='about-me__container'>
        <div className="about-me__header">
          <div className="about-me__content">
            <div className='about-me__brand'>
              <h1>Dan Groleau</h1>
              <img alt="Vector illustration of man sitting on desk with computer." className="img__scale-index" src="/assets/index.svg"></img>
            </div>
              <nav className="nav">
                <a href="/about-me/work" className="about-me__link btn">
                  <img src="./assets/code.svg" className='img__icon' alt="folder icon"></img>
                  <span>My Work</span>
                </a>
                <a href="/about-me/services" className="about-me__link btn">
                  <img src="./assets/info.svg" className='img__icon' alt="information icon"></img>
                  <span>Services</span>
                </a>
                <a href="/about-me/contact" className="about-me__link btn">
                  <img src="./assets/contact.svg" className='img__icon' alt="mail icon"></img>
                  <span>Contact</span>
                </a>
              </nav>
          </div>
        </div>
      <About />
      </div>
    </Layout>
  )}

export default AboutMe;
