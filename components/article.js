import Link from "next/link";

const Article = ({isThumb, article}) => {
  return (
      <article className={`article__container ${isThumb ? "article__container-thumb" : undefined}`}>
        <img className="img__article" src={`/assets/${article.image}`} alt={article.imageAlt}></img>
        <section className='article__text'>
          <section className='article__header'>
            <span className={`article__title ${!isThumb ? "article__title-full":undefined}`}>{article.title}</span>
            <section className="article__meta">
              {article.isSeries ? <span className="article__series">PART {article.series.seriesPart} OF SERIES: <br/><em>{article.series.seriesTitle}</em></span> : undefined }
              <span className="article__date">{new Date().toLocaleDateString()}</span>
            </section>
          </section>
          <section id="intro" className="article__section">
            <p>
              {article.tagline}
              {isThumb ? 
              <span className="article__link"> <Link href={`/articles/${encodeURIComponent(article.articleId)}`}>...Keep Reading</Link></span>
              : undefined}
            </p>
            {!isThumb ? 
            <>
            <p>{article.intro}</p>
            <p className="article__section-important"><strong>TL;DR - </strong>{article.tldr}</p> 
            </>
            : undefined}
          </section>
          {!isThumb ? 
          article.sections.map(section => {
            return (
            <section key={section.sectionTitle} className="article__section">
              <strong className="article__section-title">{section.sectionTitle}</strong>
              {section.items.map(item => {

                let regularText = item.text.replace(item.important, "~~~").split("~~~");
                console.log(regularText);
                if(item.element === "p") {
                  return <p key={section.items.indexOf(item)}>{regularText[0]}<span className="article__section-important">{item.important}</span>{regularText[1]}</p>
                }
              })}
            </section>
            )
          })
            : undefined}
        </section>
      </article>
  )
}

export default Article;