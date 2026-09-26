import { ArrowUp, MessageCircle } from "lucide-react";
import { useMagnetic } from "../hooks";

export default function FloatingButtons({ showBackToTop }) {
  const topRef = useMagnetic(0.3);
  const waRef = useMagnetic(0.3);

  return (
    <>
      <a ref={topRef} href="#home" className={`back-to-top${showBackToTop ? " is-visible" : ""}`} aria-label="Back to top">
        <ArrowUp size={19} />
      </a>
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
