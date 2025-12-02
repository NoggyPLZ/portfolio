import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToHash from "../components/ui/ScrollToHash";
import { useEffect } from "react";

export default function AppLayout() {
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

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
