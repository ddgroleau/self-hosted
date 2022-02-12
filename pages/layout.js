import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Layout = ({ children, pageTitle } ) => {

    return (
        <>
        <Navbar pageTitle={pageTitle}/>
            <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;