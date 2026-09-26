import { Link } from "react-router-dom";
import { ArrowUpRight, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="container notfound__inner">
        <span className="notfound__code" aria-hidden="true">404</span>
        <span className="eyebrow">Page Not Found</span>
        <h1 className="page-hero__title">This Stage Is Empty</h1>
        <p className="notfound__text">
          The page you're looking for has moved or doesn't exist. Head back home or tell us about your event.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn--accent"><Home size={16} /> Back To Home</Link>
          <Link to="/contact" className="btn btn--outline">Contact Us <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
