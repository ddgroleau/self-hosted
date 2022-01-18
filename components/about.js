const About = () => {
    return (
        <div id="about-anchor" className="about__container">
            <div className="about__skill-icons">
                    <img className="img__scale-md img-hover" href="https://dotnet.microsoft.com/en-us/" src='./assets/csharp.svg'/>
                    <img className="img__scale-md img-hover" href="https://reactjs.org/" src='./assets/reactjs.svg'/>
                    <img className="img__scale-lg img-hover" href="https://nodejs.org/en/" src='./assets/nodejs.svg'/>
                    <img className="img__scale-md img-hover" href="https://www.typescriptlang.org/" src='./assets/typescript.svg'/>
                    <img className="img__scale-md img-hover" href="https://sass-lang.com/" src='./assets/sass.svg'/>
                    <img className="img__scale-lg img-hover" href="https://www.php.net/" src='./assets/php.svg'/>
            </div>
            <div className="about__content">
                <p>
                    I am a software engineer specializing in Web Development. I enjoy working in C#, JavaScript, PHP, HTML, CSS and SQL. 
                I use NodeJs, React, NestJs, NextJs, Typescript, Blazor, ASP.NET and Sass/SCSS.
                </p>
                <p>
                    I have experience working with MongoDb, 
                SQL Server, MySQL, and PostgreSQL. I regularly use Docker, Octopus Deploy, and Azure and Team City products. I am
                an advocate for test driven development, object-oriented programming and clean code principles.
                </p>
                <a className="link return-home" href="/">Return to Home</a>
            </div>
        </div>
    )
}

export default About;