import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import articleStore from '../../articleStore'
import Article from '../../components/article'
import Layout from '../layout'

const Articles = () => {
  const router = useRouter()
  const { articleId } = router.query;
  const [article, setArticle] = useState({})
  
  useEffect(()=> {
    setArticle(articleStore.filter(article => article.articleId === articleId)[0])
  },[]);
  
  return (
    <Layout pageTitle={`${article.pageTitle} | Self-Hosted`}>
      <div className='article-page__container'>
        <div className='article-page__content'>
          <Article article={article}/>
        </div>
      </div>
    </Layout>
  )
}

export default Articles;
