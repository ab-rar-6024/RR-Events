import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const item = items[index];

  return (
    <div className="lightbox is-open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="lightbox__close" aria-label="Close" onClick={onClose}><X size={20} /></button>
      <button className="lightbox__prev" aria-label="Previous" onClick={prev}><ChevronLeft size={20} /></button>
      <button className="lightbox__next" aria-label="Next" onClick={next}><ChevronRight size={20} /></button>
      <figure>
        <img src={item.img} alt={item.title} />
        <figcaption>{item.title}</figcaption>
      </figure>
    </div>
  );
}
