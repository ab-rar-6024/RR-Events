import { useReveal } from "../hooks";
import { legalUpdated } from "../data/legal";

export default function LegalPage({ doc }) {
  const [headRef, headVisible] = useReveal();

  return (
    <>
      <section className="legal-hero">
        <div className="container" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>Legal</span>
          <h1 className={`page-hero__title reveal-up${headVisible ? " is-visible" : ""}`}>{doc.title}</h1>
          <p className={`legal-hero__updated reveal-up${headVisible ? " is-visible" : ""}`}>Last updated: {legalUpdated}</p>
        </div>
      </section>

      <section className="legal">
        <div className="container legal__body">
          <p className="legal__intro">{doc.intro}</p>
          {doc.sections.map((s, i) => (
            <article key={s.heading}>
              <h2><span>{String(i + 1).padStart(2, "0")}</span>{s.heading}</h2>
              {s.body.map((p) => <p key={p}>{p}</p>)}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
