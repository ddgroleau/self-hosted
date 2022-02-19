import Article from '../components/article';
import Layout from './layout';

const Home = () => {
  return (
    <Layout pageTitle={'Home | Self-Hosted'}>
      <div className="home__container">
        <div className="home__brand">
          <div className='home__brand-logo'>
            <img className="img__scale-index" src="/assets/logo.svg" alt="Self-Hosted Logo"></img>
          </div>
          <div className='home__title'>
            <h1>Self-Hosted</h1>
            <em>Tutorials and guides for the self-taught programmer.</em>
          </div>
        </div>
        <div className='home__content'>
          <div className='home__content-title'>
            <h4>Featured Content</h4>
          </div>
          <div className='home__article-container'>
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </Layout>
  )}

export default Home;
