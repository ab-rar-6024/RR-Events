import { useState } from "react";
import { Phone, Mail, MessageCircle, ChevronDown, ClipboardList, PenTool, PartyPopper } from "lucide-react";
import { useReveal } from "../hooks";
import Contact from "../components/Contact";

const quick = [
  { icon: Phone, label: "Call Us", value: "+91 63839 78275", href: "tel:+916383978275" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/916383978275" },
  { icon: Mail, label: "Email Us", value: "rrevent26@gmail.com", href: "mailto:rrevent26@gmail.com" },
];

const next = [
  { icon: ClipboardList, title: "You share the brief", desc: "Tell us the date, guest count and the feel you're after." },
  { icon: PenTool, title: "We send a proposal", desc: "A tailored concept and quote within 24 hours." },
  { icon: PartyPopper, title: "We produce the show", desc: "Crew, sound, lights and stage — handled end to end." },
];

const faqs = [
  { q: "How early should we book?", a: "For weddings and concerts we recommend 4–6 weeks; smaller corporate and campus events can often be confirmed sooner." },
  { q: "Do you work outside Chennai?", a: "Yes. We travel across Tamil Nadu and India with our own crew and equipment." },
  { q: "Can we customise a package?", a: "Every event is built around your brief — pick only the stage, sound, lighting or DJ you need, or the full production." },
  { q: "Do you provide DJs and live artists?", a: "Yes — DJ sets, dance and live performance acts can be added to any event." },
];

function Faq({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq${open ? " is-open" : ""}`}>
      <button type="button" className="faq__q" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {item.q} <ChevronDown size={18} />
      </button>
      <div className="faq__a"><p>{item.a}</p></div>
    </div>
  );
}

function QuickCard({ q }) {
  const [ref, visible] = useReveal();
  const Icon = q.icon;
  return (
    <a ref={ref} href={q.href} target={q.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
       className={`quick-card reveal-up${visible ? " is-visible" : ""}`}>
      <span className="quick-card__icon"><Icon size={22} /></span>
      <small>{q.label}</small>
      <strong>{q.value}</strong>
    </a>
  );
}

function NextStep({ step, i }) {
  const [ref, visible] = useReveal();
  const Icon = step.icon;
  return (
    <div ref={ref} className={`next-step reveal-up${visible ? " is-visible" : ""}`}>
      <span className="next-step__num">0{i + 1}</span>
      <Icon size={24} />
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  );
}

export default function ContactPage() {
  const [headRef, headVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();

  return (
    <>
      <section className="page-hero">
        <img src="/media/live-performance.jpg" alt="Live performance produced by RR Events" loading="eager" />
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>Contact</span>
          <h1 className={`page-hero__title reveal-up${headVisible ? " is-visible" : ""}`}>
            Have An Event In Mind? Let's Talk.
          </h1>
          <p className={`page-hero__desc reveal-up${headVisible ? " is-visible" : ""}`}>
            Call, message or send an enquiry — we reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="quick">
        <div className="container quick__grid">
          {quick.map((q) => <QuickCard key={q.label} q={q} />)}
        </div>
      </section>

      <Contact />

      <section className="next">
        <div className="container">
          <div className="next__grid">
            {next.map((s, i) => <NextStep key={s.title} step={s} i={i} />)}
          </div>
        </div>
      </section>

      <section className="faqs">
        <div className="container faqs__inner" ref={faqRef}>
          <div>
            <span className={`eyebrow reveal-up${faqVisible ? " is-visible" : ""}`}>FAQ</span>
            <h2 className={`section-title reveal-up${faqVisible ? " is-visible" : ""}`}>Quick Answers</h2>
          </div>
          <div className={`faqs__list reveal-up${faqVisible ? " is-visible" : ""}`}>
            {faqs.map((f) => <Faq key={f.q} item={f} />)}
          </div>
        </div>
      </section>
    </>
  );
}
