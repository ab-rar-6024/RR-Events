import { Heart, Briefcase, Music, Sparkles, LayoutGrid, Palette } from "lucide-react";
import { useReveal } from "../hooks";
import { services } from "../data/content";

const visuals = {
  "01": { icon: Heart, img: "/media/portfolio/stage-floral-ceremony.jpg" },
  "02": { icon: Briefcase, img: "/media/panel-discussion.jpg" },
  "03": { icon: Music, img: "/media/live-performance.jpg" },
  "04": { icon: Sparkles, img: "/media/crowd-audience.jpg" },
  "05": { icon: LayoutGrid, img: "/media/aerial-event-setup.jpg" },
  "06": { icon: Palette, img: "/media/behind-the-scenes.jpg" },
};

function ServiceCard({ service }) {
  const [ref, visible] = useReveal();
  const { icon: Icon, img } = visuals[service.num];
  return (
    <article ref={ref} className={`service-card reveal-up${visible ? " is-visible" : ""}`}>
      <img className="service-card__bg" src={img} alt="" loading="lazy" />
      <div className="service-card__shade"></div>
      <span className="service-card__num">{service.num}</span>
      <div className="service-card__content">
        <span className="service-card__icon"><Icon size={24} /></span>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    </article>
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

        <div className="services__cards">
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
