import React, { useState } from "react";
import bgContact from "../../core/Images/bg-contact.mp4";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center text-white">
    
      {/* Video background */}
      <video
        src={bgContact}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-2xl p-8">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400 text-center">
          Contact Me
        </h2>

        {submitted ? (
          <div className="text-center text-lg bg-indigo-700/50 p-6 rounded-lg">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg bg-black/40 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg bg-black/40 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="px-4 py-3 rounded-lg bg-black/40 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-lg shadow-indigo-700/40 transition text-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
