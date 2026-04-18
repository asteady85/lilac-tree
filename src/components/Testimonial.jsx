import React from "react";
import "./Testimonial.css";

export default function Testimonial({ children, author }) {
  const quoteImg = new URL("../images/quot.png", import.meta.url).href
  return (
    <section className="testimonial">
      <div className="testimonial-box">
        <span className="quote"><img src={quoteImg} alt="" /></span>
        <h3 className="text-center pwe-heading">What people say</h3>
        <hr className="line line-hr-center" />
        <p>" {children} "</p>
        <div className="info">
            <h6>— {author}</h6>
        </div>
      </div>
    </section>
  );
}
