import { useEffect, useMemo, useState } from "react";
import { useReveal } from "../hooks";
import { portfolioItems, filters } from "../data/content";
import Lightbox from "./Lightbox";

/** Mirrors the static site's filter transition: fade+scale out before
 * unmounting from layout (via is-hidden), fade+scale in on rejoin. */
function useMatchTransition(match) {
  const [display, setDisplay] = useState(match);
  const [leaving, setLeaving] = useState(!match);

  useEffect(() => {
    if (match) {
      setDisplay(true);
      const raf = requestAnimationFrame(() => setLeaving(false));
      return () => cancelAnimationFrame(raf);
    }
    setLeaving(true);
    const t = setTimeout(() => setDisplay(false), 350);
    return () => clearTimeout(t);
  }, [match]);

  return { display, leaving };
}

function PortfolioCard({ item, match, onOpen }) {
  const [ref, visible] = useReveal();
  const { display, leaving } = useMatchTransition(match);

  const classes = [
    "portfolio-item",
    item.tall && "portfolio-item--tall",
    "reveal-up",
    visible && "is-visible",
    !display && "is-hidden",
    leaving && "is-leaving",
  ].filter(Boolean).join(" ");

  return (
    <figure ref={ref} className={classes} onClick={onOpen}>
      <img src={item.img} alt={item.title} loading="lazy" />
      <figcaption>
        <span>{item.label}</span>
        <h3>{item.title}</h3>
      </figcaption>
    </figure>
  );
}

export default function Portfolio() {
  const [headRef, headVisible] = useReveal();
  const [filtersRef, filtersVisible] = useReveal();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const matches = useMemo(
    () => portfolioItems.map((item) => activeFilter === "all" || item.cat === activeFilter),
    [activeFilter]
  );

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>Our Work</span>
          <h2 className={`section-title reveal-up${headVisible ? " is-visible" : ""}`}>
            A Glimpse Into Experiences We've Produced
          </h2>
        </div>

        <div ref={filtersRef} className={`portfolio__filters reveal-up${filtersVisible ? " is-visible" : ""}`}>
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? " active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              item={item}
              match={matches[index]}
              onOpen={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={portfolioItems}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
