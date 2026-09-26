import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useMagnetic } from "../hooks";

/** Splits a line into words so GSAP can slide each one in from the side. */
function SplitLine({ text, accent = false }) {
  return (
    <span className={`hero__line${accent ? " hero__line--accent" : ""}`} aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span key={w}>
          <span className="hero__word"><span className="hero__word-inner">{word}</span></span>{" "}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const rootRef = useRef(null);
  const videoRef = useRef(null);

  // Pause the background video once the hero is off-screen so it doesn't
  // keep decoding while the user scrolls the rest of the page.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.05 });
    io.observe(video);
    return () => io.disconnect();
  }, []);
  const magneticRef = useMagnetic(0.25);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      root.querySelectorAll(".hero__word-inner, .hero__rule, .hero-anim").forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero__rule", { scaleX: 0, transformOrigin: "left center", duration: 0.8, ease: "power3.out" })
        .from(".hero__word-inner", {
          x: -60, opacity: 0, skewX: -14, filter: "blur(10px)",
          duration: 1.1, ease: "expo.out", stagger: 0.14,
        }, "-=0.4");
      gsap.fromTo(
        ".hero-anim",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out", stagger: 0.14, delay: 1.2 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={rootRef}>
      <div className="hero__bg">
        <video
          ref={videoRef}
          poster="/media/hero-poster.jpg"
          autoPlay muted loop playsInline preload="auto"
          aria-label="Aerial footage from a live RR Events production"
        >
          <source src="/media/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__content">
        <span className="hero__rule" aria-hidden="true"></span>
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
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span>Scroll</span>
        <ChevronDown size={16} />
      </a>

    </section>
  );
}
