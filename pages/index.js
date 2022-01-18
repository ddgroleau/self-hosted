import Layout from '../pages/layout';
import About from '../components/about';

const Home = () => {
  return (
    <Layout pageTitle={'Home | Dan Groleau'}>
      <div className='home__container'>
        <div className="home__header">
          <div className="home__content">
              <h1>Dan Groleau</h1>
              <h3>Software Engineer</h3>
              <nav className="nav">
                <a className="home__link btn" href="#about-anchor">About</a>
                <a className="home__link btn" href="/projects">Projects</a>
                <a className="home__link btn" href="/tutorials">Tutorials</a>
                <a className="home__link btn" href="/contact">Contact</a>
              </nav>
          </div>
        </div>
      <About />
      </div>
    </Layout>
  )}

export default Home;
