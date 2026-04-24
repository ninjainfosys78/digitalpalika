"use client";

import React, { useState } from "react";
import pb from "@/lib/pocketbase";

const SERVICE_TYPES = ["Infrastructure", "Technology", "Sustainability"];
const BUDGET_RANGES = [
  "Below Rs. 5,000",
  "Rs. 5,000 – Rs. 10,000",
  "Rs. 10,000 – Rs. 25,000",
  "Rs. 25,000 – Rs. 50,000",
  "Rs. 50,000 – Rs. 1,00,000",
  "Rs. 1,00,000 – Rs. 2,50,000",
  "Rs. 2,50,000 – Rs. 5,00,000",
  "Rs. 5,00,000+"
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service_type: SERVICE_TYPES[0],
    budget_range: BUDGET_RANGES[0],
    project_details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! We'll review your project and get back to you shortly.");
        setFormData({ 
          name: "", 
          email: "", 
          company: "", 
          service_type: SERVICE_TYPES[0], 
          budget_range: BUDGET_RANGES[0], 
          project_details: "" 
        });
      } else {
        const errorData = await response.json();
        console.log("Full Error Data:", errorData);
        setStatus("error");
        
        if (errorData.details && typeof errorData.details === 'object') {
          // Flatten the error data to find the first message
          const fieldEntries = Object.entries(errorData.details);
          if (fieldEntries.length > 0) {
            const [field, errorObj]: [string, any] = fieldEntries[0];
            const msg = errorObj?.message || JSON.stringify(errorObj);
            setMessage(`Validation Error (${field}): ${msg}`);
          } else {
            setMessage(errorData.error || "Failed to submit request.");
          }
        } else {
          setMessage(errorData.error || "Failed to submit request.");
        }
      }
    } catch (err: any) {
      setStatus("error");
      setMessage("Failed to connect to server.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Quote Requested!</h3>
        <p className="text-white/60 mb-8">{message}</p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-8 py-3 bg-[#c0152a] text-white font-bold rounded hover:bg-[#a01222] transition-colors"
        >
          Request Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c0152a] transition-colors"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Work Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c0152a] transition-colors"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c0152a] transition-colors"
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Service Type</label>
          <select
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c0152a] transition-colors appearance-none"
          >
            {SERVICE_TYPES.map(type => (
              <option key={type} value={type} className="bg-[#0d0d0d]">{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Budget Range</label>
        <select
          name="budget_range"
          value={formData.budget_range}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c0152a] transition-colors appearance-none"
        >
          {BUDGET_RANGES.map(range => (
            <option key={range} value={range} className="bg-[#0d0d0d]">{range}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Project Details</label>
        <textarea
          name="project_details"
          required
          rows={4}
          value={formData.project_details}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c0152a] transition-colors resize-none"
          placeholder="Describe your requirements and timelines..."
        />
      </div>

      {status === "error" && <p className="text-red-500 text-sm font-semibold p-3 bg-red-500/10 border border-red-500/20 rounded">{message}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-[#c0152a] text-white font-bold rounded hover:bg-[#a01222] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Thinking..." : "Submit Quote Request"}
      </button>
    </form>
  );
}
