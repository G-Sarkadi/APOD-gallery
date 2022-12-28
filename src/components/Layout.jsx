import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import CustomNavbar from "./CustomNavbar"
import { Suspense } from "react"

const Layout = ({ props }) => {
    return (
        <>
            <CustomNavbar />
            <Suspense fallback={<div className="contentContainer"></div>}>
                <Outlet props={props} />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout