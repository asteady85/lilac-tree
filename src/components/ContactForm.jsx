import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    honey1: '',
    honey2: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Honeypot validation
    if (form.honey1 || form.honey2) {
      return;
    }
    // Here you would handle sending the form (e.g. API call)
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      {/* Honeypot fields */}
      <input type="text" name="honey1" value={form.honey1} onChange={handleChange} className="honeypot" tabIndex="-1" autoComplete="off" />
      <input type="text" name="honey2" value={form.honey2} onChange={handleChange} className="honeypot" tabIndex="-1" autoComplete="off" />
      <button type="submit" className="send-btn">Send</button>
      {submitted && <p className="success-msg">Thank you for your message!</p>}
    </form>
  );
};

export default ContactForm;

