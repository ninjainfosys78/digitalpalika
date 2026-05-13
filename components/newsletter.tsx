"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to connect. Please check your internet.");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay ahead of the curve.</h2>
          <p className="newsletter-subtitle">
            Insights on infrastructure, technology, and sustainability delivered to your inbox.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="newsletter-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === "loading" || status === "success"}
              className="newsletter-input"
              required
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="newsletter-button"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          
          {message && (
            <p className={`newsletter-message ${status}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
