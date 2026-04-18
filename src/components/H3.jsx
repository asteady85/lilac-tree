import React from "react"
import "./H3.css"

export default function H3({ children }) {
  return (
    <div className="text-center">
      <h2 className="pwe-heading">{children}</h2>
      <hr className="line line-hr-center" />
    </div>
  )
}
