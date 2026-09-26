import { useReveal } from "../hooks";
import { clients } from "../data/content";

export default function Clients() {
  const [headRef, headVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section className="clients">
      <div className="container">
        <div className="section-head" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>Our Clients</span>
          <h2 className={`section-title reveal-up${headVisible ? " is-visible" : ""}`}>
            Trusted By Leading Institutions
          </h2>
        </div>

        <div ref={gridRef} className={`clients__grid reveal-up${gridVisible ? " is-visible" : ""}`}>
          {clients.map((c) => (
            <div className={`client${c.dark ? " client--dark" : ""}`} key={c.name} title={c.name}>
              {c.logo
                ? <img src={c.logo} alt={c.name} loading="lazy" />
                : <span className="client__name">{c.short}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
