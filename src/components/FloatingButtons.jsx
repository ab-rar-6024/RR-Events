import { ArrowUp, MessageCircle } from "lucide-react";
import { useMagnetic } from "../hooks";

// Works on every page (there is no #home anchor outside the landing page).
function scrollToTop() {
  if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function FloatingButtons({ showBackToTop }) {
  const topRef = useMagnetic(0.3);
  const waRef = useMagnetic(0.3);

  return (
    <>
      <button
        ref={topRef}
        type="button"
        onClick={scrollToTop}
        className={`back-to-top${showBackToTop ? " is-visible" : ""}`}
        aria-label="Back to top"
      >
        <ArrowUp size={19} />
      </button>
      <a
        ref={waRef}
        href="https://wa.me/916383978275"
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}
