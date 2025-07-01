import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"


export default function AppLayout(){
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}