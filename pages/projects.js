import Footer from "../components/footer";
import Header from "../components/header";

const Projects = () => {

    return (
        <div className="container">
            <Header pageTitle={'Projects | Dan Groleau'}/>
                <div className="content-box">
                    <h3>Projects</h3>
                    <a className="link return-home" href="/">Return to Home</a>
                </div>
            <Footer />
        </div>
    )
}

export default Projects;