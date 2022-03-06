import Article from '../components/article';
import Image from 'next/image';
import Layout from './layout';
import articleStore from '../articleStore';
import { useState } from 'react';

const Home = () => {
  const [articles, setArticles] = useState(articleStore);

  const getArticles = () => {
    return articles.map(article => <Article key={article.articleId} isThumb article={article} />)
  }
  return (
    <Layout pageTitle={'Home | Self-Hosted'}>
      <div className="home__container">
        <div className="home__brand">
          <div className='home__brand-logo'>
            <Image className="img__scale-index" src="/assets/logo.svg" height="200" width="200" alt="Self-Hosted Logo"></Image>
          </div>
          <div className='home__title'>
            <h1>Self-Hosted</h1>
            <em>Tutorials and guides for the self-taught programmer.</em>
          </div>
        </div>
        <div className='home__content'>
          <div className='home__content-title'>
            <h4>Top Articles and Content</h4>
          </div>
          <div className='home__article-container'>
              {getArticles()}
          </div>
        </div>
      </div>
    </Layout>
  )}

export default Home;
