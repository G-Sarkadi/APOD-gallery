import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import MyNavbar from "./MyNavbar"
import { Suspense } from "react"

const Layout = ({ props }) => {
    return (
        <>
            <MyNavbar />
            <Suspense fallback={<div className="contentContainer"></div>}>
                <Outlet props={props} />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout