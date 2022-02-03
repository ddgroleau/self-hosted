import Layout from './layout';
import ReturnHomeLink from '../components/return-home-link';

const Work = () => {

    return (
        <div className="container">
            <Layout pageTitle={'Work | Dan Groleau'}>
                <div className="content__container">
                    <h3>My Work</h3>
                    <h4><em>...Coming Soon</em></h4>
                    <ReturnHomeLink/>
                </div>
            </Layout>
        </div>
    )
}

export default Work;