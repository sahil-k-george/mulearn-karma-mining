import { useState } from "react";

/* Logo image with automatic fallback to the SVG placeholder
   if the real file hasn't been added yet. */
export default function LogoImg({ src, fallbackSrc, alt, className = "logo-img" }) {
  const [failed, setFailed] = useState(false);
  if (failed && fallbackSrc) {
    return <img src={fallbackSrc} alt={alt} className={className} />;
  }
  if (failed) return null;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
