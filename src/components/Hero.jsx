import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowUpRight, ChevronDown, Play } from "lucide-react";
import { useMagnetic } from "../hooks";
import VideoLightbox from "./VideoLightbox";

/** Splits a line into words > characters so GSAP can reveal it letter by letter. */
function SplitLine({ text, accent = false }) {
  return (
    <span className={`hero__line${accent ? " hero__line--accent" : ""}`} aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span className="hero__word" key={w}>
          {[...word].map((ch, c) => <span className="hero__char" key={c}>{ch}</span>)}
          {" "}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const rootRef = useRef(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const magneticRef = useMagnetic(0.25);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      root.querySelectorAll(".hero__char, .hero-anim").forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".hero__char", {
        yPercent: 115, rotate: 8, opacity: 0, duration: 0.9,
        ease: "power4.out", stagger: 0.028, delay: 0.35,
      });
      gsap.fromTo(
        ".hero-anim",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out", stagger: 0.14, delay: 1.3 }
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
        <h1 className="hero__title" aria-label="Designing moments, powering memories.">
          <SplitLine text="Designing Moments," />
          <SplitLine text="Powering Memories." accent />
        </h1>
        <p className="hero__desc hero-anim">
          Concerts, weddings and corporate shows — RR Events brings the stage, sound and crew
          that turn your vision into a night people remember.
        </p>
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
