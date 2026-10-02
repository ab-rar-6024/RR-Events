import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { instagramUrl, youtubeUrl } from "../data/content";
import NavLink from "./NavLink";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => { setSubscribed(false); setEmail(""); }, 2500);
  }

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <NavLink to="#home" className="logo">
            <img src="/logo-white.png" alt="RR Events — Events & Entertainment" />
          </NavLink>
          <p>Events &amp; entertainment production studio crafting bold, unforgettable experiences across India.</p>
          <div className="contact__social">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={16} /></a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon size={16} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="#services">What We Do</NavLink></li>
            <li><NavLink to="#portfolio">Portfolio</NavLink></li>
            <li><NavLink to="#testimonials">Testimonials</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><NavLink to="#services">Weddings &amp; Social Events</NavLink></li>
            <li><NavLink to="#services">Corporate Events</NavLink></li>
            <li><NavLink to="#services">Concerts &amp; Live Shows</NavLink></li>
            <li><NavLink to="#services">Brand Activations</NavLink></li>
            <li><NavLink to="#services">Exhibitions &amp; Expos</NavLink></li>
          </ul>
        </div>

        <div className="footer__col footer__newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe for event trends, behind-the-scenes stories and studio news.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder={subscribed ? "Thanks for subscribing!" : "Your email address"}
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe"><ArrowRight size={16} /></button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} RR Events. All rights reserved.</p>
        <div className="footer__legal">
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms of Service</NavLink>
        </div>
      </div>

      <div className="container footer__credit">
        <p>
          Website by{" "}
          <a href="https://mohamed-abrar-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            AIKONIK
          </a>
          {" "}&middot; <a href="tel:+919042272801">+91 90422 72801</a>
        </p>
      </div>
    </footer>
  );
}
