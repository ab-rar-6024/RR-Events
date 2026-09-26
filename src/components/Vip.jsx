import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks";

const shots = [
  { src: "/media/portfolio/vip-1.jpg", alt: "Artists performing on a fire-lit LED stage", label: "Artist Performance" },
  { src: "/media/portfolio/vip-2.jpg", alt: "Headline performer on a grand concert stage", label: "Headline Show" },
  { src: "/media/portfolio/vip-3.jpg", alt: "Wide view of a lit concert stage with truss and beams", label: "Stage & Lighting" },
  { src: "/media/portfolio/vip-4.jpg", alt: "Festival main stage at dusk with truss and LED screens", label: "Festival Main Stage" },
  { src: "/media/portfolio/vip-5.jpg", alt: "Black and white shot of a vocalist singing on stage", label: "Live Vocalist" },
  { src: "/media/portfolio/vip-6.jpg", alt: "Hosts on stage at a New Year celebration", label: "Celebrity Hosts" },
];

export default function Vip() {
  const [headRef, headVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section className="vip">
      <div className="container">
        <div className="section-head" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>VIP</span>
          <h2 className={`section-title reveal-up${headVisible ? " is-visible" : ""}`}>
            VIP Artist &amp; Celebrity Shows
          </h2>
          <p className={`vip__lead reveal-up${headVisible ? " is-visible" : ""}`}>
            Big stages, artist hospitality and production built to headline standards.
          </p>
        </div>

        <div ref={gridRef} className={`vip__grid reveal-up${gridVisible ? " is-visible" : ""}`}>
          {shots.map((s) => (
            <figure className="vip__shot" key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="portfolio__more">
          <Link to="/contact" className="btn btn--cream">
            Book A VIP Show <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
