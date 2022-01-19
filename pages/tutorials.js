import Layout from '../pages/layout';
import ReturnHomeLink from '../components/return-home-link';

const Tutorials = () => {

    return (
        <div className="container">
            <Layout pageTitle={'Tutorials | Dan Groleau'}>
                <div className="content__container">
                    <h3>Tutorials</h3>
                    <ReturnHomeLink/>
                </div>
            </Layout>
        </div>
    )
}

export default Tutorials;