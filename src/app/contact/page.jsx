"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual Google Form URL and field entry IDs
      // You'll need to inspect the Google Form to get the entry IDs
      const googleFormUrl = "https://forms.gle/Ed9Uniri2D7cDjmE6";

      const formEntryIDs = {
        name: "entry.1664869934", // Replace with actual entry ID
        email: "entry.1700356717", // Replace with actual entry ID
        subject: "entry.235121228", // Replace with actual entry ID
        message: "entry.1421278832", // Replace with actual entry ID
      };

      // Create form data for submission
      const googleFormData = new FormData();
      googleFormData.append(formEntryIDs.name, formData.name);
      googleFormData.append(formEntryIDs.email, formData.email);
      googleFormData.append(formEntryIDs.subject, formData.subject);
      googleFormData.append(formEntryIDs.message, formData.message);

      // Note: Due to CORS restrictions, we use a no-cors request
      // This means we won't get a response to confirm success/failure
      // But the form will still be submitted in most cases
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData,
      });

      // Since we can't get actual confirmation due to CORS, we assume success
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitStatus({
        success: true,
        message: "Your message has been sent. I will get back to you soon!",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 bg-linen min-h-screen">
      {/* Contact Header */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-lg">
            I'm always interested in connecting with fellow technology
            enthusiasts, potential clients, or anyone looking to advance their
            career in tech.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Let's Connect</h3>
                  <p className="text-gray-700 mb-4">
                    Reach out to me directly through email or connect with me on
                    social media platforms.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-caput-mortuum text-white rounded-full flex items-center justify-center mr-4">
                        <FaEnvelope />
                      </div>
                      <a
                        href="mailto:ekenechris77@gmail.com"
                        className="text-caput-mortuum hover:underline"
                      >
                        ekenechris77@gmail.com
                      </a>
                    </li>

                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-caput-mortuum text-white rounded-full flex items-center justify-center mr-4">
                        <FaLinkedin />
                      </div>
                      <a
                        href="https://www.linkedin.com/in/ekene-chris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-caput-mortuum hover:underline"
                      >
                        linkedin.com/in/ekene-chris
                      </a>
                    </li>

                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-caput-mortuum text-white rounded-full flex items-center justify-center mr-4">
                        <FaTwitter />
                      </div>
                      <a
                        href="https://x.com/iamekenechris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-caput-mortuum hover:underline"
                      >
                        x.com/iamekenechris
                      </a>
                    </li>

                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-caput-mortuum text-white rounded-full flex items-center justify-center mr-4">
                        <FaGithub />
                      </div>
                      <a
                        href="https://github.com/Ekene-Chris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-caput-mortuum hover:underline"
                      >
                        github.com/Ekene-Chris
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-black text-white rounded-lg font-medium ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-opacity-90"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  What services do you offer?
                </h3>
                <p className="text-gray-700">
                  I provide technical consulting, architectural guidance for
                  DevOps and cloud infrastructure, career mentorship for
                  engineers, and technical leadership training. Each service is
                  tailored to the specific needs of individuals or
                  organizations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  How does your mentorship program work?
                </h3>
                <p className="text-gray-700">
                  My mentorship program is typically a 3-6 month engagement with
                  regular 1:1 sessions, personalized learning paths, and
                  practical projects aligned with your career goals. I work with
                  each mentee to identify skill gaps and create targeted
                  development plans.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Do you offer speaking engagements or workshops?
                </h3>
                <p className="text-gray-700">
                  Yes, I regularly speak at conferences and conduct workshops on
                  DevOps practices, cloud architecture, and engineering career
                  development. Please contact me with details about your event,
                  and we can discuss availability and topics.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  How quickly can I expect a response?
                </h3>
                <p className="text-gray-700">
                  I typically respond to all inquiries within 1-2 business days.
                  For urgent matters, please mention that in your subject line,
                  and I'll do my best to prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
