import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "ef155bc3-7360-48f8-8084-d5b50f303b25",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        })
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message: " + (result.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p className="contact-tagline">
            I am always open to discussing new opportunities, workflow automation projects, or full-stack web applications.
          </p>

          <div className="contact-method">
            <div className="contact-method-icon">
              <Mail size={20} />
            </div>
            <div className="contact-method-details">
              <h4>Email</h4>
              <a href="mailto:abdultajmohiddin30503@gmail.com" className="contact-email-link">
                abdultajmohiddin30503@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-socials">
            <h4 className="social-title">Connect with me on social platforms:</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/abdultajmohiddin/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Taj30Mohiddin03Abdul" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Your message goes here..."
                required
              ></textarea>
            </div>

            {submitted && (
              <div className="form-success-msg">
                <CheckCircle size={20} /> Message sent successfully! I will get back to you soon.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '8px' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
