import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader${hidden ? " is-hidden" : ""}`} aria-hidden={hidden}>
      <div className="preloader__mark"><img src="/logo-white.png" alt="" /></div>
      <div className="preloader__bar"><span></span></div>
    </div>
  );
}
