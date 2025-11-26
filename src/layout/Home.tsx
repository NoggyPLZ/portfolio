import Brands from "../components/Brands/Brands";
import HeroSection from "../components/HeroSection/HeroSection";
import WorkSection from "../components/Works/WorkSection";
import FooterLine from "./FooterLine";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <WorkSection />
      <FooterLine />
    </>
  );
}
