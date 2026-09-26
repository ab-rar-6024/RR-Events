import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal, useCounter } from "../hooks";

function AboutStat({ value, suffix = "", label }) {
  const [ref, display] = useCounter(value, { suffix });
  return (
    <div>
      <span className="count" ref={ref}>{display}</span>
      <small>{label}</small>
    </div>
  );
}

const highlights = [
  "Wedding & Social Events",
  "Corporate Events & Conferences",
  "Concerts & Live Shows",
  "Brand Activations & Exhibitions",
];

export default function About() {
  const [mediaRef, mediaVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section className="about">
      <div className="container about__grid">
        <div ref={mediaRef} className={`about__media reveal-up${mediaVisible ? " is-visible" : ""}`}>
          <img
            src="/media/behind-the-scenes.jpg"
            alt="RR Events crew filming on-site at a live production"
            loading="lazy"
          />
        </div>

        <div ref={contentRef} className="about__content">
          <span className={`eyebrow reveal-up${contentVisible ? " is-visible" : ""}`}>Who We Are</span>
          <h2 className={`section-title reveal-up${contentVisible ? " is-visible" : ""}`}>
            Big Dreams. Flawless Execution. Unforgettable Moments.
          </h2>
          <p className={`reveal-up${contentVisible ? " is-visible" : ""}`}>
            We're a small, obsessive team of producers, designers and technicians who treat every
            brief like it's our own event. No templated packages — every show is built from scratch
            around the people it's for.
          </p>

          <ul className={`about__list reveal-up${contentVisible ? " is-visible" : ""}`}>
            {highlights.map((item) => (
              <li key={item}>{item} <ArrowUpRight size={18} /></li>
            ))}
          </ul>

          <div className={`about__stats reveal-up${contentVisible ? " is-visible" : ""}`}>
            <AboutStat value={850} label="Events Produced" />
            <AboutStat value={12} label="Years Running" />
            <AboutStat value={98} suffix="%" label="Client Retention" />
          </div>

          <div className={`about__actions reveal-up${contentVisible ? " is-visible" : ""}`}>
            <Link to="/contact" className="btn btn--cream">
              Explore Our Services <ArrowUpRight size={16} />
            </Link>
            <Link to="/about" className="btn btn--text">
              Read Our Full Story <span className="btn__line"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
