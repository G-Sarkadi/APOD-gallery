import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import MyNavbar from "./MyNavbar"
import { Suspense } from "react"
import Spinner from "./Spinner"

const Layout = ({ props }) => {
    return (
        <>
            <MyNavbar />
            <Suspense fallback={<h3 style={{ marginTop: "7vh", marginLeft: "45vw" }}><Spinner/></h3>}>
                <Outlet props={props} />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout