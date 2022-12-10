import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const Layout = (props) => {
    return (
        <>
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout