import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../App.css"
// import image1 from "../images/gallery/wedding-1.jpg"

export default function ScrollingGallery() {
  const image1 = new URL("../images/gallery/wedding-1.jpg", import.meta.url).href;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false
  }

  const galleryImages = [
    new URL("../images/gallery/wedding-1.jpg", import.meta.url).href,
    new URL("../images/gallery/wedding-2.jpg", import.meta.url).href,
    new URL("../images/gallery/naming-1.jpg", import.meta.url).href,
    new URL("../images/gallery/funeral-1.jpg", import.meta.url).href,
    new URL("../images/gallery/wedding-3.jpg", import.meta.url).href
  ]

  return (
    <div className="scrolling-gallery-wrapper">
      <div className="scrolling-gallery-overlay-text">
        <h1 className="gallery-title">Lilac Tree Celebrancy</h1>
        <div className="gallery-subtitle">MAKING YOUR DAY SPECIAL</div>
      </div>
      <Slider {...settings} className="scrolling-gallery-slider">
        {galleryImages.map((src, i) => (
          <div key={i} className="gallery-slide">
            <img src={src} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
