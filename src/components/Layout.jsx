import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import MyNavbar from "./MyNavbar"

const Layout = (props) => {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout