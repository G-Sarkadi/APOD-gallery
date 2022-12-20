import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import MyNavbar from "./MyNavbar"

const Layout = ({ props }) => {
    return (
        <>
            <MyNavbar />
            <Outlet props={props} />
            <Footer />
        </>
    )
}

export default Layout