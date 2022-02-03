import Layout from './layout';
import ReturnHomeLink from '../components/return-home-link';

const Services = () => {

    return (
        <div className="container">
            <Layout pageTitle={'Services | Dan Groleau'}>
                <div className="content__container">
                    <h3>Services</h3>
                    <h4><em>...Coming Soon</em></h4>
                    <ReturnHomeLink/>
                </div>
            </Layout>
        </div>
    )
}

export default Services;