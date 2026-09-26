import { useState } from "react";
import { useReveal, useCounter } from "../hooks";
import { portfolioItems } from "../data/content";
import Lightbox from "../components/Lightbox";
import CtaBanner from "../components/CtaBanner";
import Vip from "../components/Vip";
import { Reels, PhotoGrid } from "../components/PortfolioLayout";

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
  { key: "dj", label: "DJ & Sound" },
  { key: "dance", label: "Dance & Culture" },
  { key: "brand", label: "Brand Activations" },
];

export default function PortfolioPage() {
  const [headRef, headVisible] = useReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const entries = portfolioItems.map((item, index) => ({ item, index }));

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
            shows up two hours before anyone else.
          </p>
        </div>
      </section>

      <section className="portfolio-stats">
        <div className="container portfolio-stats__grid">
          <Stat value={850} label="Events Produced" />
          <Stat value={2} label="Years Experience" />
          <Stat value={6} label="Categories Covered" />
          <Stat value={98} suffix="%" label="Client Retention" />
        </div>
      </section>

      {groupOrder.map((group) => {
        const inGroup = entries.filter((e) => e.item.cat === group.key);
        if (!inGroup.length) return null;
        return (
          <section className="portfolio-group" key={group.key}>
            <div className="container">
              <h2 className="portfolio-group__title">{group.label}</h2>
            </div>
            <Reels entries={inGroup.filter((e) => e.item.video)} onOpen={setLightboxIndex} />
            <div className="container">
              <PhotoGrid entries={inGroup.filter((e) => !e.item.video)} onOpen={setLightboxIndex} />
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

      <Vip />

      <CtaBanner />
    </>
  );
}
