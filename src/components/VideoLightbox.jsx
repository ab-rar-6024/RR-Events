import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function VideoLightbox({ onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    videoRef.current?.play().catch(() => {});
    function onKey(e){ if(e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="video-lightbox is-open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="lightbox__close" aria-label="Close" onClick={onClose}><X size={20} /></button>
      <div className="video-lightbox__frame">
        <video ref={videoRef} controls playsInline poster="/media/hero-poster.jpg">
          <source src="/media/showreel.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
