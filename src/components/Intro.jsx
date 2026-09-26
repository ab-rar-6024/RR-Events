import { useReveal } from "../hooks";

export default function Intro() {
  const [ref, visible] = useReveal();
  return (
    <section className="intro" id="about" ref={ref}>
      <div className="container">
        <p className={`intro__text reveal-up${visible ? " is-visible" : ""}`}>
          At <span className="accent">RR Events</span>, we don't just organize events — we build
          immersive experiences that stay with people long after the lights go down. From
          electrifying concerts to grand weddings and high-profile corporate galas, every project
          gets the same obsessive attention to craft.
        </p>
        <p className={`intro__text reveal-up${visible ? " is-visible" : ""}`}>
          Our crew handles the full stack — concept, stage design, sound and lighting engineering,
          vendor management and live execution — so nothing is left to chance on the day it matters most.
        </p>

        <div className={`intro__strip reveal-up${visible ? " is-visible" : ""}`}>
          <img src="/media/campus-walkway.jpg" alt="Guests arriving at an RR Events production" loading="lazy" />
          <img src="/media/crowd-audience.jpg" alt="Full audience at an RR Events production" loading="lazy" />
          <img src="/media/panel-discussion.jpg" alt="On-stage felicitation at an RR Events production" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
