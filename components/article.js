import Link from "next/link";

const Article = ({isThumb, article}) => {
  return (
      <article className={`article__container ${isThumb ? "article__container-thumb" : undefined}`}>
        <img className="img__article" src={`/assets/${article.image}`} alt={article.imageAlt}></img>
        <section className='article__text'>
          <section className='article__header'>
            <span className={`article__title ${isThumb ? "article__title-full":undefined}`}>{article.title}</span>
            <section className="article__meta">
              {article.isSeries ? <span className="article__series">PART {article.series.seriesPart} OF SERIES: <br/><em>{article.series.seriesTitle}</em></span> : undefined }
              <span className="article__date">{new Date().toLocaleDateString()}</span>
            </section>
          </section>
          <section id="intro">
            <p>
              {article.tagline}
              {isThumb ? <span className="article__link"> <Link href={`/articles/${encodeURIComponent(article.articleId)}`}>...Keep Reading</Link></span>: undefined}
            </p>
          </section>
        </section>
      </article>
  )
}

export default Article;