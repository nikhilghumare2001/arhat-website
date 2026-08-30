// Import React hooks
// useRef is used to access the form
// useState is used to manage loading, success and error messages
import { useRef, useState } from "react";

// EmailJS is used to send the inquiry form by email
import emailjs from "@emailjs/browser";

// Import icons for contact information
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


// ========================================
// CONTACT COMPONENT
// This section allows visitors to:
// 1. Find the Arhat office
// 2. View contact information
// 3. Send an inquiry by email
// ========================================

export default function Contact() {

  // Reference to the inquiry form
  const form = useRef();


  // ========================================
  // FORM STATUS
  // ========================================

  // Shows "Sending..." while the email is being sent
  const [loading, setLoading] = useState(false);

  // Shows successful submission message
  const [success, setSuccess] = useState("");

  // Shows error message if email sending fails
  const [error, setError] = useState("");


  // ========================================
  // SEND EMAIL FUNCTION
  // Sends the form information through EmailJS
  // ========================================

  const sendEmail = (e) => {

    // Stop the browser from refreshing the page
    e.preventDefault();


    // Start loading state
    setLoading(true);

    // Clear previous messages
    setSuccess("");
    setError("");


    // Send form information using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // ========================================
      // EMAIL SENT SUCCESSFULLY
      // ========================================

      .then(() => {

        // Stop loading
        setLoading(false);

        // Show success message
        setSuccess(
          "Thank you! Your inquiry has been sent successfully."
        );

        // Clear the form after successful submission
        form.current.reset();
      })


      // ========================================
      // EMAIL SENDING FAILED
      // ========================================

      .catch(() => {

        // Stop loading
        setLoading(false);

        // Show error message
        setError(
          "Something went wrong. Please try again."
        );
      });
  };


  // ========================================
  // CONTACT SECTION UI
  // ========================================

  return (

   <section
  id="getintouch"
  className="py-24 bg-gradient-to-b from-blue-50 via-slate-50 to-white"
>

  <div className="max-w-7xl mx-auto px-6">

    {/* ========================================
        SECTION HEADING
        Main heading and introduction
    ======================================== */}

    <div className="text-center mb-16">

      {/* Section Title */}
      <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
        Get In Touch
      </h2>

      {/* Blue line below heading */}
      <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>

      {/* Section Description */}
      <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-8">
        Have a project in mind? Our team is ready to help you design
        and implement the right automation solution for your home,
        business, or commercial space.
      </p>

    </div>


        {/* ========================================
            MAIN CONTACT AREA
            Left  = Map and contact information
            Right = Inquiry form
        ======================================== */}

        <div className="grid lg:grid-cols-2 gap-10">


          {/* ========================================
              LEFT SIDE
              Office location and contact details
          ======================================== */}

          <div>


            {/* ========================================
                GOOGLE MAP
                Shows Arhat office location
            ======================================== */}

            <div className="overflow-hidden rounded-3xl shadow-xl">
<iframe
  title="Arhat Location"
  src="https://www.google.com/maps?q=2418+East+Street,+Camp,+Pune,+Maharashtra+411001&output=embed"
  width="100%"
  height="500"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

            </div>


            {/* ========================================
                CONTACT INFORMATION CARDS
            ======================================== */}

            <div className="grid md:grid-cols-3 gap-6 mt-8">


              {/* ========================================
                  PHONE
              ======================================== */}

              <div className="bg-white rounded-2xl shadow-md p-6">

                {/* Phone icon */}
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


              {/* ========================================
                  EMAIL
              ======================================== */}

              <div className="bg-white rounded-2xl shadow-md p-6">

                {/* Email icon */}
                <FaEnvelope className="text-blue-600 text-3xl mb-4" />

                <h3 className="font-bold mb-2">
                  Email
                </h3>

                <p className="text-gray-600 break-all">
                  sales@arhat.in
                </p>

              </div>


              {/* ========================================
                  OFFICE ADDRESS
              ======================================== */}

              <div className="bg-white rounded-2xl shadow-md p-6">

                {/* Location icon */}
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


          {/* ========================================
              RIGHT SIDE
              INQUIRY FORM
          ======================================== */}

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Send Us a Message
            </h3>


            {/* Inquiry Form */}

            <form
              ref={form}
              onSubmit={sendEmail}
            >


              {/* ========================================
                  NAME FIELD
              ======================================== */}

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              />


              {/* ========================================
                  EMAIL FIELD
              ======================================== */}

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              />


              {/* ========================================
                  PHONE FIELD
              ======================================== */}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              />


              {/* ========================================
                  MESSAGE FIELD
              ======================================== */}

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full mb-5 p-4 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>


              {/* ========================================
                  SUCCESS MESSAGE
              ======================================== */}

              {success && (

                <div className="mb-4 p-4 rounded-xl bg-green-100 text-green-700">

                  {success}

                </div>

              )}


              {/* ========================================
                  ERROR MESSAGE
              ======================================== */}

              {error && (

                <div className="mb-4 p-4 rounded-xl bg-red-100 text-red-700">

                  {error}

                </div>

              )}


              {/* ========================================
                  SUBMIT BUTTON
              ======================================== */}

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition"
              >

                {loading ? "Sending..." : "Send Message"}

              </button>


            </form>

          </div>

        </div>

      </div>

    </section>
  );
}