import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks";
import { portfolioItems, filters } from "../data/content";
import Lightbox from "./Lightbox";
import { Reels, PhotoGrid } from "./PortfolioLayout";

export default function Portfolio() {
  const [headRef, headVisible] = useReveal();
  const [filtersRef, filtersVisible] = useReveal();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Reels always show every video; "All Work" photos are trimmed to the featured set
  // (the full library lives on /portfolio).
  const { reels, photos } = useMemo(() => {
    const entries = portfolioItems.map((item, index) => ({ item, index }));
    const inCat = ({ item }) => activeFilter === "all" || item.cat === activeFilter;
    return {
      reels: entries.filter((e) => e.item.video && inCat(e)),
      photos: entries.filter((e) => !e.item.video && (activeFilter === "all" ? e.item.featured : inCat(e))),
    };
  }, [activeFilter]);

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
      </div>

      <Reels entries={reels} onOpen={setLightboxIndex} />

      <div className="container">
        <PhotoGrid entries={photos} onOpen={setLightboxIndex} />

        <div className="portfolio__more">
          <Link to="/portfolio" className="btn btn--outline">
            View Full Portfolio <ArrowUpRight size={16} />
          </Link>
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
