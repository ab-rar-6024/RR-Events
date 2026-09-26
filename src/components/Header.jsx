import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { navLinks, instagramUrl, youtubeUrl } from "../data/content";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";
import NavLink from "./NavLink";

export default function Header({ scrolled, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }
  function toggleMenu() {
    setMenuOpen((open) => {
      document.body.style.overflow = !open ? "hidden" : "";
      return !open;
    });
  }

  function isActive(link) {
    if (link.route) return pathname === link.href;
    return pathname === "/" && activeSection === link.href.slice(1);
  }

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container header__inner">
          <NavLink to="#home" className="logo">
            <img src="/logo-white.png" alt="RR Events — Events & Entertainment" />
          </NavLink>

          <nav className="nav">
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink to={link.href} className={`nav__link${isActive(link) ? " active" : ""}`}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <NavLink to="/contact" className="btn btn--accent btn--sm">Contact <ArrowUpRight size={16} /></NavLink>
            <button
              className={`hamburger${menuOpen ? " is-active" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <ul className="mobile-menu__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} onClick={closeMenu}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/contact" className="btn btn--accent btn--block" onClick={closeMenu}>Contact Us</NavLink>
        <div className="mobile-menu__social">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon size={18} /></a>
        </div>
      </div>
    </>
  );
}
