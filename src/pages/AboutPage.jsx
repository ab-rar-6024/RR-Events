import { Link } from "react-router-dom";
import { Sparkles, Target, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";
import { useReveal, useCounter } from "../hooks";
import CtaBanner from "../components/CtaBanner";

function Stat({ value, suffix = "", label }) {
  const [ref, display] = useCounter(value, { suffix });
  return (
    <div>
      <span className="count" ref={ref}>{display}</span>
      <small>{label}</small>
    </div>
  );
}

const values = [
  { icon: Sparkles, title: "Creativity", desc: "Every brief gets a concept built from scratch, never a recycled template." },
  { icon: Target, title: "Precision", desc: "Run sheets, cue lists and backups for the backups — nothing is left to chance." },
  { icon: ShieldCheck, title: "Trust", desc: "Transparent budgets and honest timelines, from the first call to the last cue." },
  { icon: Heart, title: "Passion", desc: "We treat every event like it's our own — because for us, it is." },
];

function ValueCard({ value }) {
  const [ref, visible] = useReveal();
  const Icon = value.icon;
  return (
    <div ref={ref} className={`value-card reveal-up${visible ? " is-visible" : ""}`}>
      <div className="value-card__icon"><Icon size={22} /></div>
      <h3>{value.title}</h3>
      <p>{value.desc}</p>
    </div>
  );
}

export default function AboutPage() {
  const [headRef, headVisible] = useReveal();
  const [storyMediaRef, storyMediaVisible] = useReveal();
  const [storyContentRef, storyContentVisible] = useReveal();
  const [leaderMediaRef, leaderMediaVisible] = useReveal();
  const [leaderContentRef, leaderContentVisible] = useReveal();
  const [valuesHeadRef, valuesHeadVisible] = useReveal();
  const [pmMediaRef, pmMediaVisible] = useReveal();
  const [pmContentRef, pmContentVisible] = useReveal();

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <img src="/media/crowd-audience.jpg" alt="Full audience at an RR Events production" loading="eager" />
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>About RR Events</span>
          <h1 className={`page-hero__title reveal-up${headVisible ? " is-visible" : ""}`}>
            The Story, The Founder<br />And The Standard We Hold
          </h1>
          <p className={`page-hero__desc reveal-up${headVisible ? " is-visible" : ""}`}>
            A Chennai-rooted events and entertainment production house, built by people who'd
            rather lose sleep over a lighting cue than let a client down.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership">
        <div className="container leadership__grid">
          <div ref={leaderMediaRef} className={`leadership__media reveal-up${leaderMediaVisible ? " is-visible" : ""}`}>
            <img src="/media/ceo-siva.jpg" alt="Siva, Founder, CEO and DJ of RR Events" loading="lazy" />
          </div>
          <div ref={leaderContentRef} className="leadership__content">
            <span className={`eyebrow reveal-up${leaderContentVisible ? " is-visible" : ""}`}>Leadership</span>
            <h2 className={`section-title reveal-up${leaderContentVisible ? " is-visible" : ""}`}>
              Meet The Founder
            </h2>
            <p className={`leadership__quote reveal-up${leaderContentVisible ? " is-visible" : ""}`}>
              "An event doesn't get a second take. My job is to make sure it never needs one."
            </p>
            <p className={`reveal-up${leaderContentVisible ? " is-visible" : ""}`}>
              Siva founded RR Events on a simple rule: show up earlier than anyone expects, and
              leave later than anyone asks. A working DJ as well as a producer, Siva runs sound
              checks in person, walks every venue before a single chair is placed, and treats each
              production like the very first show — as if everything is riding on it.
            </p>
            <div className={`leadership__name reveal-up${leaderContentVisible ? " is-visible" : ""}`}>
              <strong>Siva</strong>
              <span>Founder, CEO &amp; DJ, RR Events</span>
            </div>
            <Link to="/contact" className={`btn btn--cream reveal-up${leaderContentVisible ? " is-visible" : ""}`}>
              Get In Touch <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAM MANAGER */}
      <section className="leadership leadership--alt">
        <div className="container leadership__grid">
          <div ref={pmMediaRef} className={`leadership__media reveal-up${pmMediaVisible ? " is-visible" : ""}`}>
            <img src="/media/program-manager.jpg" alt="Program Manager at RR Events" loading="lazy" />
          </div>
          <div ref={pmContentRef} className="leadership__content">
            <span className={`eyebrow reveal-up${pmContentVisible ? " is-visible" : ""}`}>Our Team</span>
            <h2 className={`section-title reveal-up${pmContentVisible ? " is-visible" : ""}`}>
              Program Manager
            </h2>
            <p className={`reveal-up${pmContentVisible ? " is-visible" : ""}`}>
              The person who keeps every production on schedule — coordinating crew, vendors,
              artists and run sheets so each event moves from plan to stage without a hitch.
            </p>
            <div className={`leadership__name reveal-up${pmContentVisible ? " is-visible" : ""}`}>
              <strong>Program Manager</strong>
              <span>RR Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about">
        <div className="container about__grid">
          <div ref={storyMediaRef} className={`about__media reveal-up${storyMediaVisible ? " is-visible" : ""}`}>
            <img
              src="/media/behind-the-scenes.jpg"
              alt="RR Events crew filming on-site at a live production"
              loading="lazy"
            />
          </div>

          <div ref={storyContentRef} className="about__content">
            <span className={`eyebrow reveal-up${storyContentVisible ? " is-visible" : ""}`}>Our Story</span>
            <h2 className={`section-title reveal-up${storyContentVisible ? " is-visible" : ""}`}>
              Started On The Ground, Not In A Boardroom
            </h2>
            <p className={`reveal-up${storyContentVisible ? " is-visible" : ""}`}>
              RR Events began the way most honest production houses do — on-site, with borrowed
              gear and a stubborn refusal to let a show go wrong. What started as a small crew
              running college festivals and local celebrations in Chennai has grown into a
              full-service events and entertainment studio, without losing the hands-on habit
              that built it.
            </p>
            <p className={`reveal-up${storyContentVisible ? " is-visible" : ""}`}>
              Today we run weddings, corporate summits, concerts and brand activations across
              India — but every project still gets the same walk-through, the same obsessive
              attention to the details nobody else notices until they go wrong.
            </p>

            <div className={`about__stats reveal-up${storyContentVisible ? " is-visible" : ""}`}>
              <Stat value={850} label="Events Produced" />
              <Stat value={2} label="Years Experience" />
              <Stat value={40} suffix="+" label="Crew Members" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="container">
          <div className="section-head" ref={valuesHeadRef}>
            <span className={`eyebrow center reveal-up${valuesHeadVisible ? " is-visible" : ""}`}>What We Stand For</span>
            <h2 className={`section-title center reveal-up${valuesHeadVisible ? " is-visible" : ""}`}>
              The Values Behind Every Production
            </h2>
          </div>

          <div className="values__grid">
            {values.map((v) => <ValueCard key={v.title} value={v} />)}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
