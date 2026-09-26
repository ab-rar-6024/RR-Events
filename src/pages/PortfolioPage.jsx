import { useState } from "react";
import { useReveal, useCounter } from "../hooks";
import { portfolioItems } from "../data/content";
import Lightbox from "../components/Lightbox";
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

const groupOrder = [
  { key: "wedding", label: "Weddings" },
  { key: "corporate", label: "Corporate Events" },
  { key: "concert", label: "Concerts & Live Shows" },
  { key: "brand", label: "Brand Activations" },
];

function CaseStudyRow({ item, index, onOpen }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`portfolio-case${index % 2 === 1 ? " portfolio-case--reverse" : ""} reveal-up${visible ? " is-visible" : ""}`}
      onClick={onOpen}
    >
      <div className="portfolio-case__img">
        <img src={item.img} alt={item.title} loading="lazy" />
      </div>
      <div className="portfolio-case__body">
        <span className="eyebrow">{item.label}</span>
        <h3>{item.title}</h3>
        <p>{item.brief}</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [headRef, headVisible] = useReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <section className="page-hero">
        <img src="/media/stage-ceremony.jpg" alt="Inaugural ceremony stage produced by RR Events" loading="eager" />
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>Our Work</span>
          <h1 className={`page-hero__title reveal-up${headVisible ? " is-visible" : ""}`}>
            A Deeper Look Into What We've Produced
          </h1>
          <p className={`page-hero__desc reveal-up${headVisible ? " is-visible" : ""}`}>
            Every project here got the same walk-through, the same run sheet, the same crew that
            shows up two hours before anyone else. A few of the stories behind the photos.
          </p>
        </div>
      </section>

      <section className="portfolio-stats">
        <div className="container portfolio-stats__grid">
          <Stat value={850} label="Events Produced" />
          <Stat value={12} label="Years Running" />
          <Stat value={4} label="Categories Covered" />
          <Stat value={98} suffix="%" label="Client Retention" />
        </div>
      </section>

      {groupOrder.map((group) => {
        const items = portfolioItems.filter((i) => i.cat === group.key);
        if (!items.length) return null;
        return (
          <section className="portfolio-group" key={group.key}>
            <div className="container">
              <h2 className="portfolio-group__title">{group.label}</h2>
              <div className="portfolio-group__list">
                {items.map((item) => (
                  <CaseStudyRow
                    key={item.title}
                    item={item}
                    index={portfolioItems.indexOf(item)}
                    onOpen={() => setLightboxIndex(portfolioItems.indexOf(item))}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {lightboxIndex !== null && (
        <Lightbox
          items={portfolioItems}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <CtaBanner />
    </>
  );
}
