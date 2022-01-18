import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children, pageTitle } ) => {

    return (
        <>
        <Header pageTitle={pageTitle}/>
            <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;