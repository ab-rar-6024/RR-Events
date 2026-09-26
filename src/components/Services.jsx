import { useReveal } from "../hooks";
import { services } from "../data/content";

function ServiceRow({ service }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`service-row reveal-up${visible ? " is-visible" : ""}`}>
      <span className="service-row__num">{service.num}</span>
      <div className="service-row__body">
        <h3 className="service-row__title">{service.title}</h3>
        <p className="service-row__desc">{service.desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const [headRef, headVisible] = useReveal();
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>What We Do</span>
          <h2 className={`section-title reveal-up${headVisible ? " is-visible" : ""}`}>
            Services Built For Every Kind Of Occasion
          </h2>
        </div>

        <div className="services__list">
          {services.map((service) => (
            <ServiceRow key={service.num} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
