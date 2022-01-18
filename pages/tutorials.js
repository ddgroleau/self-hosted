import Layout from '../pages/layout';

const Tutorials = () => {

    return (
        <div className="container">
            <Layout pageTitle={'Tutorials | Dan Groleau'}>
                <div className="content__container">
                    <h3>Tutorials</h3>
                    <a className="link return-home" href="/">Return to Home</a>
                </div>
            </Layout>
        </div>
    )
}

export default Tutorials;