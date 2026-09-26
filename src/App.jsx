import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";
import { privacyPolicy, termsOfService } from "./data/legal";
import { useScrollState, useActiveSection } from "./hooks";

const SECTION_IDS = ["home"];

function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch devices already scroll natively at full frame rate; driving them through
    // Lenis + a permanent GSAP ticker only adds work per frame, so skip it there.
    if (window.matchMedia("(pointer: coarse)").matches) {
      function onTouchAnchor(e) {
        const link = e.target.closest('a[href^="#"]');
        const id = link && link.getAttribute("href");
        const target = id && id.length > 1 && document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
      document.addEventListener("click", onTouchAnchor);
      return () => document.removeEventListener("click", onTouchAnchor);
    }
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 1 });
    window.__lenis = lenis; // shared handle so route-change hash scrolling can reuse it
    function raf(time) { lenis.raf(time * 1000); }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Smooth-scroll same-page anchor links through Lenis so the whole
    // app (nav, buttons, footer links) inherits the same feel. Cross-page
    // links (e.g. "/#services" from the About page) are plain routed
    // navigations and are handled separately after the route mounts.
    function onClick(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.3 });
    }
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
}

/** Scrolls to top on every route change, except when the new URL carries a
 * hash — then it waits a tick for the page to render and scrolls to that
 * section instead (covers nav links like "/#services" from other pages). */
function useScrollRestoration() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const timer = setTimeout(() => {
        const target = document.getElementById(id);
        if (!target) return;
        if (window.__lenis) window.__lenis.scrollTo(target, { offset: -80, duration: 1.3 });
        else target.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function App() {
  useLenis();
  useScrollRestoration();
  const { scrolled, showBackToTop, progressRef } = useScrollState();
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <Preloader />
      <div className="scroll-progress" ref={progressRef}></div>

      <Header scrolled={scrolled} activeSection={activeSection} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/privacy" element={<LegalPage doc={privacyPolicy} />} />
          <Route path="/terms" element={<LegalPage doc={termsOfService} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingButtons showBackToTop={showBackToTop} />
    </>
  );
}
