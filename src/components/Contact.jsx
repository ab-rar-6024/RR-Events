import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";

const initialForm = { name: "", phone: "", email: "", eventType: "", date: "", guests: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = true;
  if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) errors.phone = true;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = true;
  if (!form.eventType) errors.eventType = true;
  if (!form.message.trim()) errors.message = true;
  return errors;
}

export default function Contact() {
  const [infoRef, infoVisible] = useReveal();
  const [formRef, formVisible] = useReveal();
  const [mapRef, mapVisible] = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: false }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }
    // No backend wired up — simulate a successful submission.
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div ref={infoRef} className={`contact__info reveal-up${infoVisible ? " is-visible" : ""}`}>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">Let's Start Planning Your Next Event</h2>
          <p className="section-sub">
            Share a few details and our team will get back to you within 24 hours with a tailored proposal.
          </p>

          <ul className="contact__list">
            <li>
              <MapPin size={20} />
              <div><strong>Head Office — Chennai</strong><span>No. 582, P H Road, Aminjikarai, Chennai, India</span></div>
            </li>
            <li>
              <Phone size={20} />
              <div><strong>Call Us</strong><span><a href="tel:+916383978275">+91 63839 78275</a></span></div>
            </li>
            <li>
              <Mail size={20} />
              <div><strong>Email Us</strong><span><a href="mailto:rrevent26@gmail.com">rrevent26@gmail.com</a></span></div>
            </li>
            <li>
              <Clock size={20} />
              <div><strong>Working Hours</strong><span>Mon – Sat, 10:00 AM – 7:00 PM</span></div>
            </li>
          </ul>

          <div className="contact__social">
            <a href="#" aria-label="Instagram"><InstagramIcon size={16} /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon size={16} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
          </div>
        </div>

        <form ref={formRef} className={`contact__form reveal-up${formVisible ? " is-visible" : ""}`} onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className={`form-group${errors.name ? " has-error" : ""}`}>
              <label htmlFor="name">Full Name <em>*</em></label>
              <input id="name" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
              <span className="form-error">Please enter your name</span>
            </div>
            <div className={`form-group${errors.phone ? " has-error" : ""}`}>
              <label htmlFor="phone">Phone Number <em>*</em></label>
              <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              <span className="form-error">Please enter a valid phone number</span>
            </div>
          </div>

          <div className="form-row">
            <div className={`form-group${errors.email ? " has-error" : ""}`}>
              <label htmlFor="email">Email Address <em>*</em></label>
              <input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              <span className="form-error">Please enter a valid email</span>
            </div>
            <div className={`form-group${errors.eventType ? " has-error" : ""}`}>
              <label htmlFor="eventType">Event Type <em>*</em></label>
              <select id="eventType" value={form.eventType} onChange={(e) => update("eventType", e.target.value)}>
                <option value="" disabled>Select event type</option>
                <option>Wedding / Social Event</option>
                <option>Corporate Event</option>
                <option>Concert / Live Show</option>
                <option>Brand Activation</option>
                <option>Exhibition / Expo</option>
                <option>Other</option>
              </select>
              <span className="form-error">Please select an event type</span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Estimated Guests</label>
              <input id="guests" type="number" min="1" placeholder="e.g. 250" value={form.guests} onChange={(e) => update("guests", e.target.value)} />
            </div>
          </div>

          <div className={`form-group${errors.message ? " has-error" : ""}`}>
            <label htmlFor="message">Tell Us About Your Event <em>*</em></label>
            <textarea id="message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)}></textarea>
            <span className="form-error">Please share a few details about your event</span>
          </div>

          <button type="submit" className="btn btn--accent btn--block">
            <span className="btn-label">Send Enquiry</span>
            <Send size={16} />
          </button>

          <p className={`form-success${submitted ? " is-visible" : ""}`} role="status" aria-live="polite">
            <CheckCircle2 size={18} /> Thank you! Your enquiry has been received — our team will reach out shortly.
          </p>
        </form>
      </div>

      <div ref={mapRef} className={`contact__map reveal-up${mapVisible ? " is-visible" : ""}`}>
        <iframe
          title="RR Events head office location"
          src="https://www.google.com/maps?q=582%20P%20H%20Road%2C%20Aminjikarai%2C%20Chennai&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
