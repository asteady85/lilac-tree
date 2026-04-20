import React from "react";
// import ContactForm from "./ContactForm";
import "./ContactSection.css";

const loisImg = new URL("../images/lois.png", import.meta.url).href;

export default function ContactSection() {
  return (
    <div className="contact-section">
      <div>
        <div className="contact-details">
          <p>I specialise in creating and delivering bespoke ceremonies for weddings, vow renewals, naming days, funerals, and all those important milestones that deserve to be marked with love and care. Every ceremony I craft is unique, written to reflect your personality, values, and story, so that the occasion truly feels like yours.</p>
          <p>Whether you're just beginning to explore ideas or already have a clear vision of what you'd like, I'm here to listen and guide you through the process. We'll work together to shape a ceremony that captures the essence of the moment and leaves lasting memories for you and your loved ones.</p>
          <p>I'd love to hear more about you, your story, and your plans for your special day. Feel free to get in touch using the details below - I'm always happy to chat, answer questions, and help bring your ideas to life.</p>
          <p><b>Email:</b> <a href="mailto:lois@lilactreeceremonies.co.uk">lois@lilactreeceremonies.co.uk</a></p>
          <p><b>Phone:</b> <a href="tel:07545661028">07545661028</a></p>
        </div>
        { /* <ContactForm /> */ }
      </div>
      <div className="contact-image">
        <img src={loisImg} alt="Lois - Lilac Tree Celebrancy" />
      </div>
    </div>
  );
}

