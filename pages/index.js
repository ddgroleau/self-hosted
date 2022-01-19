import Layout from '../pages/layout';
import About from '../components/about';

const Home = () => {
  return (
    <Layout pageTitle={'Home | Dan Groleau'}>
      <div className='home__container'>
        <div className="home__header">
          <div className="home__content">
            <div>
              <h1>Dan Groleau</h1>
              <img className="img__scale-index" src="./assets/index.svg"></img>
            </div>
              <nav className="nav">
                <a href="#about-anchor" className="home__link btn">
                  <i class="fas fa-user-circle"></i>
                  <span>About Me</span>
                </a>
                <a href="/projects" className="home__link btn">
                  <i class="fas fa-laptop-code"></i>
                  <span>Projects</span>
                </a>
                <a href="/tutorials" className="home__link btn">
                  <i class="fas fa-info-circle"></i>
                  <span>Tutorials</span>
                </a>
                <a href="/contact" className="home__link btn">
                  <i class="fas fa-envelope-open-text"></i>
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
