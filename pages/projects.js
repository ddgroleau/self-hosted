import Layout from '../pages/layout';
import ReturnHomeLink from '../components/return-home-link';

const Projects = () => {

    return (
        <div className="container">
            <Layout pageTitle={'Projects | Dan Groleau'}>
                <div className="content__container">
                    <h3>Projects</h3>
                    <ReturnHomeLink/>
                </div>
            </Layout>
        </div>
    )
}

export default Projects;