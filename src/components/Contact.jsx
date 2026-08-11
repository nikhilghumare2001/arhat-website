import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSuccess(
          "Thank you! Your inquiry has been sent successfully."
        );

        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        setError(
          "Something went wrong. Please try again."
        );
      });
  };

  return (
    <section id="getintouch" className="py-24 bg-gradient-to-b from-white via-slate-50 to-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>

          <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 text-lg">
            We'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div>

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <iframe
                title="Arhat Location"
                src="https://www.google.com/maps?q=2418+East+Street,+Camp,+Pune,+Maharashtra+411001&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div className="bg-white rounded-2xl shadow-md p-6">

                <FaPhoneAlt className="text-blue-600 text-3xl mb-4" />

                <h3 className="font-bold mb-2">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +91 99600 29911
                </p>

                <p className="text-gray-600">
                  +91 20 26348603
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">

                <FaEnvelope className="text-blue-600 text-3xl mb-4" />

                <h3 className="font-bold mb-2">
                  Email
                </h3>

                <p className="text-gray-600 break-all">
                  sales@arhat.in
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">

                <FaMapMarkerAlt className="text-blue-600 text-3xl mb-4" />

                <h3 className="font-bold mb-2">
                  Address
                </h3>

                <p className="text-gray-600 text-sm">
                  2418 East Street,
                  <br />
                  Camp,
                  <br />
                  Pune - 411001
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Inquiry
            </h3>

            <form ref={form} onSubmit={sendEmail}>

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>

              {success && (
                <div className="mb-4 p-4 rounded-xl bg-green-100 text-green-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="mb-4 p-4 rounded-xl bg-red-100 text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}