"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h4>Message Sent!</h4>
        <p className="text-muted">
          Thank you for reaching out. Our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Smith"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="john@company.com"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="company">
          Company Name
        </label>
        <input
          className="form-input"
          type="text"
          id="company"
          name="company"
          placeholder="Your Company Ltd"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="enquiry">
          Enquiry Type
        </label>
        <select className="form-select" id="enquiry" name="enquiry" defaultValue="">
          <option value="">Select a division</option>
          <option value="technology">Clarusto Technology — IT Solutions</option>
          <option value="logistics">Clarusto Logistics — Freight &amp; Cargo</option>
          <option value="partnership">Business Partnership</option>
          <option value="general">General Group Enquiry</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-textarea"
          id="message"
          name="message"
          placeholder="Tell us about your requirements..."
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="form-submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message →"}
      </button>
      <p className="form-note">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}
