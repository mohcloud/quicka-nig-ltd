"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    honeypot: "", // hidden spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error message if user starts typing again
    if (status.type === "error") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side quick check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Your message has been sent successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        type: "error",
        message: "A network error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="lg:w-1/2 bg-white p-8 md:p-10 rounded-md border border-gray-100 shadow-sm flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold text-brand-accent mb-2 text-center">
        Write Us A Message
      </h2>
      <p className="text-gray-500 text-sm text-center mb-8">
        Have questions about our logistics and shipping services? Send us a message and our team will respond promptly.
      </p>

      {/* Success Notification Banner */}
      {status.type === "success" && (
        <div className="mb-6 p-4 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm font-medium">
            {status.message}
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {status.type === "error" && (
        <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm font-medium">
            {status.message}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Anti-spam honeypot field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-brand-primary">*</span>
            </label>
            <input 
              id="contact-name"
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="e.g. John Doe" 
              className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all disabled:opacity-60"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <input 
              id="contact-phone"
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="+234 800 000 0000" 
              className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all disabled:opacity-60"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-brand-primary">*</span>
          </label>
          <input 
            id="contact-email"
            type="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="you@company.com" 
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all disabled:opacity-60"
          />
        </div>
        
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Your Message <span className="text-brand-primary">*</span>
          </label>
          <textarea 
            id="contact-message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Describe your inquiry, cargo details, or shipping requirements..." 
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none disabled:opacity-60"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-4 rounded transition-all flex items-center justify-center gap-2 text-base shadow-md disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
