import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToHash from "../components/ui/ScrollToHash";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <div id="main-section" className="pt-30">
        <ScrollToHash />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
