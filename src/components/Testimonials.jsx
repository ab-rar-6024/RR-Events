import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "../hooks";
import { testimonials } from "../data/content";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const [headRef, headVisible] = useReveal();
  const [sliderRef, sliderVisible] = useReveal();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head" ref={headRef}>
          <span className={`eyebrow reveal-up${headVisible ? " is-visible" : ""}`}>Client Love</span>
          <h2 className={`section-title reveal-up${headVisible ? " is-visible" : ""}`}>
            Words From The People We've Celebrated With
          </h2>
        </div>

        <div ref={sliderRef} className={`reveal-up${sliderVisible ? " is-visible" : ""}`}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonial-slider"
            loop
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChangeTransitionStart={(swiper) => {
              // Re-trigger the .testimonial-card CSS entrance animation on every
              // slide change (Swiper reuses DOM nodes, so it only plays once by default).
              const activeCard = swiper.slides[swiper.activeIndex]?.querySelector(".testimonial-card");
              if (!activeCard) return;
              activeCard.style.animation = "none";
              void activeCard.offsetWidth;
              activeCard.style.animation = "";
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="testimonial-card">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-card__author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-nav">
            <button ref={prevRef} className="testimonial-prev" aria-label="Previous"><ArrowLeft size={17} /></button>
            <button ref={nextRef} className="testimonial-next" aria-label="Next"><ArrowRight size={17} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
