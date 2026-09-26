import { useReveal } from "../hooks";
import { processSteps } from "../data/content";

function Step({ step }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`process__step reveal-up${visible ? " is-visible" : ""}`}>
      <span className="process__number">{step.number}</span>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  );
}

export default function Process() {
  const [headRef, headVisible] = useReveal();
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>How We Work</span>
          <h2 className={`section-title reveal-up${headVisible ? " is-visible" : ""}`}>
            A Clear Process From Idea To Applause
          </h2>
        </div>

        <div className="process__grid">
          {processSteps.map((step) => <Step key={step.number} step={step} />)}
        </div>
      </div>
    </section>
  );
}
