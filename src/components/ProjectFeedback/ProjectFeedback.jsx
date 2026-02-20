import React, { useRef } from "react";
import { MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ProjectFeedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_06yoz66",
        "template_vff1hkp",
        form.current,
        "RXx7EmBE354v_A4j-",
      )
      .then(
        () => {
          alert("Feedback sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send feedback.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#4B151A] to-[#5A1E23] py-28 px-6 overflow-hidden"
    >
      {/* Soft Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,139,44,0.15),transparent_70%)]"></div>

      <div className="relative max-w-[850px] mx-auto text-center text-white">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#C08B2C] text-[#5A1E23] p-4 rounded-full shadow-xl">
            <MessageCircle size={28} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 tracking-wide">
          I’m Always Evolving
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-[1px] bg-[#C08B2C]"></div>
          <div className="mx-3 w-2 h-2 bg-[#C08B2C] rotate-45"></div>
          <div className="w-16 h-[1px] bg-[#C08B2C]"></div>
        </div>

        <p className="text-white/80 text-base md:text-lg mb-12 leading-relaxed max-w-[600px] mx-auto">
          Your insights help refine the experience. If you have thoughts on
          design, usability, or performance, I’d deeply value your honest
          feedback.
        </p>

        {/* Temple-Arch Style Card */}
        <div
          className="relative bg-white/10 backdrop-blur-md border border-[#C08B2C]/30
                        rounded-t-[60px] rounded-b-3xl p-8 md:p-10 shadow-2xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name (optional)"
              className="w-full px-6 py-3 rounded-xl bg-white text-black
                         focus:outline-none focus:ring-2 focus:ring-[#C08B2C]"
            />

            <textarea
              name="message"
              placeholder="Share your thoughts..."
              rows="4"
              required
              className="w-full px-6 py-3 rounded-xl bg-white text-black
                         focus:outline-none focus:ring-2 focus:ring-[#C08B2C] resize-none"
            />

            <button
              type="submit"
              className="px-12 py-3 bg-[#C08B2C] text-[#5A1E23] font-semibold
                         rounded-full shadow-lg hover:scale-105
                         hover:shadow-[0_0_20px_rgba(192,139,44,0.5)]
                         transition duration-300"
            >
              Offer Feedback
            </button>
          </form>
        </div>

        {/* Signature */}
        <div className="mt-16 text-sm text-white/60 tracking-wide text-center relative">
          <div className="inline-block group cursor-default">
            <p>
              Designed with devotion by{" "}
              <span className="relative text-[#C08B2C] font-medium transition duration-300 group-hover:text-[#E6B85C]">
                Aarushi Singh
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C08B2C] transition-all duration-500 group-hover:w-full"></span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeedback;
