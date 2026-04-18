import React from "react"
import "./H2.css"

export default function H2({ meta = "Portfolio", margin = false, children }) {
  return (
    <div className={`h2 text-center${margin ? " margin" : ""}`}>
      <span className="heading-meta">{meta}</span>
      <h2 className="pwe-heading">{children}</h2>
      <hr className="line line-hr-center" />
    </div>
  )
}
