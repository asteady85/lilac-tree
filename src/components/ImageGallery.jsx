import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    width: 320,
    height: 212,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in Barcelona"
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    width: 320,
    height: 212,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in Switzerland"
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    width: 320,
    height: 500,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in France"
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    width: 600,
    height: 500,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in Italy"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    width: 320,
    height: 212,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in Greece"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    width: 1000,
    height: 212,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in Greece"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    width: 320,
    height: 212,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in Greece"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    width: 320,
    height: 212,
    fullWidth: 3840,
    fullHeight: 2560,
    caption: "Wedding in Greece"
  }
];

const slides = IMAGES.map(({ src, fullWidth, fullHeight }) => ({
  src,
  width: fullWidth,
  height: fullHeight
}));

export default function ImageGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div style={{ padding: "2rem 0" }}>
      <Gallery
        images={IMAGES}
        enableImageSelection={false}
        rowHeight={220}
        margin={8}
        onClick={(index) => setLightboxIndex(index)}
      />
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </div>
  );
}
