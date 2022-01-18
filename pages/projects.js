import Layout from '../pages/layout';

const Projects = () => {

    return (
        <div className="container">
            <Layout pageTitle={'Projects | Dan Groleau'}>
                <div className="content__container">
                    <h3>Projects</h3>
                    <a className="link return-home" href="/">Return to Home</a>
                </div>
            </Layout>
        </div>
    )
}

export default Projects;