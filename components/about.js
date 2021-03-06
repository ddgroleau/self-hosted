import ReturnHomeLink from "./return-home-link";
import AboutCard from "./about-card";

const About = () => {
    let frontendSkills = ["JavaScript","React","Blazor (.NET)","NextJS","Sass/SCSS","HTML5","CSS3", "WordPress"];
    let backendSkills = ["C# (.NET)","TypeScript","PHP","NestJS","SQL/T-SQL", "Bash/Shell","Relational Databases","Non-Relational/NoSQL Databases","In-Memory Storage"];
    let devopsSkills = ["Docker","Octopus Deploy", "Azure App Service","Team City","Heroku", "GitLab", "GitHub Actions"];
    return (
        <div id="about-anchor" className="about__container">
            <div className="about__skill-icons">
                    <img alt="CSharp Logo" className="img__scale-md img__hover" href="https://dotnet.microsoft.com/en-us/" src='./assets/csharp.svg'/>
                    <img alt="React Logo" className="img__scale-md img__hover" href="https://reactjs.org/" src='./assets/reactjs.svg'/>
                    <img alt="NodeJs Logo" className="img__scale-lg img__hover" href="https://nodejs.org/en/" src='./assets/nodejs.svg'/>
                    <img alt="Typescript Logo" className="img__scale-md img__hover" href="https://www.typescriptlang.org/" src='./assets/typescript.svg'/>
                    <img alt="Sass Logo" className="img__scale-md img__hover" href="https://sass-lang.com/" src='./assets/sass.svg'/>
                    <img alt="PHP Logo" className="img__scale-lg img__hover" href="https://www.php.net/" src='./assets/php.svg'/>
            </div>
            <p className="about__description">
                Full-Stack Software Engineer specializing in Web Development.
            </p>
            <div className="about__cards">
                <AboutCard header="Front End" subheader="Languages, Libraries & Frameworks" items={frontendSkills}/>
                <AboutCard header="Back End" subheader="Languages and Technologies" items={backendSkills}/>
                <AboutCard header="DevOps" subheader="CI/CD Toolsets" items={devopsSkills}/>
            </div>
            <ReturnHomeLink />
        </div>
    )
}

export default About;