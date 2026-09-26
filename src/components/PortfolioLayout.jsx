import { Play } from "lucide-react";
import AutoVideo from "./AutoVideo";

/** Horizontal strip of tall, autoplaying video reels. */
export function Reels({ entries, onOpen }) {
  if (!entries.length) return null;
  return (
    <div className="reels" key={entries.map((e) => e.index).join("-")}>
      {entries.map(({ item, index }) => (
        <figure className="reel" key={item.title} onClick={() => onOpen(index)}>
          <AutoVideo src={item.video} poster={item.img} />
          <span className="reel__play" aria-hidden="true"><Play size={14} /></span>
          <figcaption>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Tight, uniform 16:9 photo grid. */
export function PhotoGrid({ entries, onOpen }) {
  if (!entries.length) return null;
  return (
    <div className="photo-grid" key={entries.map((e) => e.index).join("-")}>
      {entries.map(({ item, index }) => (
        <figure className="photo-tile" key={item.title} onClick={() => onOpen(index)}>
          <img src={item.img} alt={item.title} loading="lazy" />
          <figcaption>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
