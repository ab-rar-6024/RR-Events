import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { useReveal } from "../hooks";
import { services } from "../data/content";
import CtaBanner from "../components/CtaBanner";

function ServiceDetailCard({ service }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`service-detail reveal-up${visible ? " is-visible" : ""}`}>
      <span className="service-detail__num">{service.num}</span>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <ul className="service-detail__highlights">
        {service.highlights.map((h) => (
          <li key={h}><Check size={16} /> {h}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  const [headRef, headVisible] = useReveal();

  return (
    <>
      <section className="page-hero">
        <img src="/media/campus-walkway.jpg" alt="Guests arriving at an RR Events production" loading="eager" />
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>What We Do</span>
          <h1 className={`page-hero__title reveal-up${headVisible ? " is-visible" : ""}`}>
            Full-Service Production, Start To Finish
          </h1>
          <p className={`page-hero__desc reveal-up${headVisible ? " is-visible" : ""}`}>
            One team, every discipline — strategy, design, fabrication and on-ground execution.
            Here's exactly what's included when you work with RR Events.
          </p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <div className="service-detail-grid">
            {services.map((s) => <ServiceDetailCard key={s.num} service={s} />)}
          </div>

          <div className="services-detail__cta">
            <p>Not sure which category fits your event?</p>
            <Link to="/contact" className="btn btn--accent">
              Talk To Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
