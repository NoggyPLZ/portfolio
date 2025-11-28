import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <div id="main-section" className="pt-30">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
