import Footer from "../components/footer";
import Header from "../components/header";

const Tutorials = () => {

    return (
        <div className="container">
            <Header pageTitle={'Tutorials | Dan Groleau'}/>
                <div className="content-box">
                    <h3>Tutorials</h3>
                    <a className="link return-home" href="/">Return to Home</a>
                </div>
            <Footer />
        </div>
    )
}

export default Tutorials;