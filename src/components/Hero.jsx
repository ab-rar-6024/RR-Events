import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowUpRight, ChevronDown, Play } from "lucide-react";
import { useMagnetic } from "../hooks";
import VideoLightbox from "./VideoLightbox";

export default function Hero() {
  const rootRef = useRef(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const magneticRef = useMagnetic(0.25);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      root.querySelectorAll(".reveal-line span, .hero-anim").forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".reveal-line span", {
        yPercent: 110, duration: 1, ease: "power4.out", stagger: 0.12, delay: 0.4,
      });
      // fromTo (not .from): resting CSS state for .hero-anim is already opacity:1,
      // so a plain .from would compute its "to" state as 0 and never reveal anything.
      gsap.fromTo(
        ".hero-anim",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 1.0 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={rootRef}>
      <div className="hero__bg">
        <video
          poster="/media/hero-poster.jpg"
          autoPlay muted loop playsInline preload="auto"
          aria-label="Aerial footage from a live RR Events production"
        >
          <source src="/media/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__content">
        <h1 className="hero__title">
          <span className="reveal-line"><span>We bring your</span></span>
          <span className="reveal-line"><span><em>vision</em> to life.</span></span>
        </h1>
        <div className="hero__actions hero-anim">
          <Link ref={magneticRef} to="/contact" className="btn btn--accent">Start Planning <ArrowUpRight size={16} /></Link>
          <button type="button" className="btn btn--text" onClick={() => setShowreelOpen(true)}>
            <span className="play-dot"><Play size={14} /></span> Watch Showreel
          </button>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span>Scroll</span>
        <ChevronDown size={16} />
      </a>

      {showreelOpen && <VideoLightbox onClose={() => setShowreelOpen(false)} />}
    </section>
  );
}
