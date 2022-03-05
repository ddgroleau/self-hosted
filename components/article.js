import Link from "next/link";

const Article = ({isThumb}) => {
  return (
      <article className='article__container'>
      <img className="img__article-thumb" src="/assets/coder.jpg" alt="Image of a person programming"></img>
      <section className='article__text'>
        <section className='article__header'>
          <span className="article__title">Title</span>
          <span className="article__date">{new Date().toLocaleDateString()}</span>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            {isThumb ? <span>.. <Link href="">Keep Reading</Link></span>: undefined}
          </p>
        </section>
      </section>
      </article>
  )
}

export default Article;