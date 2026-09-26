import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Vip from "../components/Vip";
import CtaBanner from "../components/CtaBanner";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Vip />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
