import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CateringForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          event_date: formData.eventDate,
          guest_count: formData.guestCount,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError("Failed to send your inquiry. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section id="catering-form" className="py-20 bg-secondary">
        <div className="container max-w-2xl text-center">
          <div className="bg-card rounded-lg border p-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Thank You!</h3>
            <p className="text-muted-foreground">
              Your catering inquiry has been sent successfully. We'll get back to you within 24 hours!
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", eventDate: "", guestCount: "", message: "" }); }}
              className="mt-6 text-sm text-primary font-semibold hover:underline"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="catering-form" className="py-20 bg-secondary">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="font-heading text-4xl font-bold text-foreground">Request Catering</h2>
          <p className="text-muted-foreground mt-3">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-8 space-y-6">
          {error && (
            <div className="bg-destructive/10 text-destructive rounded-md p-4 text-sm font-body">
              {error}
            </div>
          )}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 font-body">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 font-body">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2 font-body">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={20}
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="eventDate" className="block text-sm font-semibold text-foreground mb-2 font-body">
                Event Date
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
              />
            </div>
          </div>
          <div>
            <label htmlFor="guestCount" className="block text-sm font-semibold text-foreground mb-2 font-body">
              Estimated Guest Count
            </label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
            >
              <option value="">Select range</option>
              <option value="20-50">20 - 50 guests</option>
              <option value="50-100">50 - 100 guests</option>
              <option value="100-200">100 - 200 guests</option>
              <option value="200-500">200 - 500 guests</option>
              <option value="500+">500+ guests</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2 font-body">
              Tell us about your event *
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body resize-none"
              placeholder="Event type, menu preferences, special requests..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {sending ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CateringForm;
