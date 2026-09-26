import { useReveal, useCounter } from "../hooks";
import { testimonials } from "../data/content";
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

function TestimonialGridCard({ t }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`testimonial-grid-card reveal-up${visible ? " is-visible" : ""}`}>
      <p>&ldquo;{t.quote}&rdquo;</p>
      <div className="testimonial-grid-card__author">
        <strong>{t.name}</strong>
        <span>{t.role}</span>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [headRef, headVisible] = useReveal();

  return (
    <>
      <section className="page-hero">
        <img src="/media/crowd-audience.jpg" alt="Full audience at an RR Events production" loading="eager" />
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>Client Love</span>
          <h1 className={`page-hero__title reveal-up${headVisible ? " is-visible" : ""}`}>
            Words From The People We've Celebrated With
          </h1>
          <p className={`page-hero__desc reveal-up${headVisible ? " is-visible" : ""}`}>
            Every quote here is from a client we've worked with directly — brides and grooms,
            marketing heads, festival producers and campus coordinators alike.
          </p>
        </div>
      </section>

      <section className="testimonial-stats">
        <div className="container testimonial-stats__grid">
          <Stat value={850} label="Events Produced" />
          <Stat value={98} suffix="%" label="Client Retention" />
          <Stat value={40} suffix="+" label="Crew Members" />
          <Stat value={2} label="Years Experience" />
        </div>
      </section>

      <section className="testimonials-grid-section">
        <div className="container">
          <div className="testimonial-grid">
            {testimonials.map((t) => <TestimonialGridCard key={t.name} t={t} />)}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
