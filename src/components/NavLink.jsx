import { Link, useLocation } from "react-router-dom";

/** Hash links (e.g. "#services") only work as plain in-page anchors while
 * already on "/". From any other route they become a routed link
 * ("/#services") so the browser doesn't full-reload — App's scroll
 * restoration effect finishes the job once Home has mounted. Route paths
 * (starting with "/", e.g. "/about") are always routed links. */
export default function NavLink({ to, className, onClick, children }) {
  const { pathname } = useLocation();
  const isRoute = to.startsWith("/");

  if (isRoute) {
    return <Link to={to} className={className} onClick={onClick}>{children}</Link>;
  }
  if (pathname === "/") {
    return <a href={to} className={className} onClick={onClick}>{children}</a>;
  }
  return <Link to={`/${to}`} className={className} onClick={onClick}>{children}</Link>;
}
