import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToHash from "../components/ui/ScrollToHash";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main id="main-section" className="pt-30" role="main">
        <ScrollToHash />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
