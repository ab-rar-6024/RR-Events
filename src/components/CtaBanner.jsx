import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal, useMagnetic } from "../hooks";

export default function CtaBanner() {
  const [ref, visible] = useReveal();
  const imgRef = useRef(null);
  const magneticRef = useMagnetic(0.25);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const img = imgRef.current;
    if (!img || reducedMotion || window.matchMedia("(max-width: 768px)").matches) return; // no scroll parallax on phones

    let raf = null;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = img.parentElement.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        img.style.transform = `translateY(${progress * 50}px) scale(1.15)`;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="cta-banner">
      <img
        ref={imgRef}
        src="/media/aerial-event-setup.jpg"
        alt="Aerial view of an outdoor event setup shot by RR Events"
        loading="lazy"
      />
      <div className="cta-banner__overlay"></div>
      <div ref={ref} className={`container cta-banner__content reveal-up${visible ? " is-visible" : ""}`}>
        <h2>Ready to create something extraordinary?</h2>
        <p>Tell us your date, your vision and your guest list — we'll handle everything else.</p>
        <Link ref={magneticRef} to="/contact" className="btn btn--accent btn--lg">Book A Free Consultation <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
