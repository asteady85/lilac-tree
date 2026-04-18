import React from "react";
import "./ServicesGrid.css";
import { FaHeart, FaBaby, FaFeather } from "react-icons/fa";
import H2 from "./H2";

export default function ServicesGrid() {
  return (
    <section id="my-services" className="section section-alt">
      <div className="services-grid-bg">
        <H2 meta="MY SERVICES" margin={true}>What I can offer</H2>
        <div className="services-grid">
          <div className="service-item">
            <div className="icon-circle weddings">
              <FaHeart size={32} />
            </div>
            <h3>Weddings</h3>
            <p>Your love story deserves a ceremony that feels true to you – heartfelt, creative, and unforgettable.</p>
          </div>
          <div className="service-item">
            <div className="icon-circle namings">
              <FaBaby size={32} />
            </div>
            <h3>Naming Ceremonies</h3>
            <p>A joyful way to welcome a child, celebrate family, and share love with your community.</p>
          </div>
          <div className="service-item">
            <div className="icon-circle funerals">
              <FaFeather size={32} />
            </div>
            <h3>Funerals</h3>
            <p>A gentle, respectful space to honour a life with dignity, love, and memory.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

