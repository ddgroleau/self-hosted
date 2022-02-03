import Layout from '../pages/layout';
import About from '../components/about';

const Home = () => {
  return (
    <Layout pageTitle={'Home | Dan Groleau'}>
      <div className='home__container'>
        <div className="home__header">
          <div className="home__content">
            <div className='home__brand'>
              <h1>Dan Groleau</h1>
              <img className="img__scale-index" src="./assets/index.svg"></img>
            </div>
              <nav className="nav">
                <a href="#about-anchor" className="home__link btn">
                  <img src="./assets/about-me.svg" className='img__icon'></img>
                  <span>About Me</span>
                </a>
                <a href="/work" className="home__link btn">
                  <img src="./assets/code.svg" className='img__icon'></img>
                  <span>My Work</span>
                </a>
                <a href="/services" className="home__link btn">
                  <img src="./assets/info.svg" className='img__icon'></img>
                  <span>Services</span>
                </a>
                <a href="/contact" className="home__link btn">
                  <img src="./assets/contact.svg" className='img__icon'></img>
                  <span>Contact</span>
                </a>
              </nav>
          </div>
        </div>
      <About />
      </div>
    </Layout>
  )}

export default Home;
