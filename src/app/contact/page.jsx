"use client";

import { useState, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaArrowRight, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

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
      const formId = "1FAIpQLSemPxrlB9PvisiofQFbboDvUN7l6_pb8qeWY4ZLNk7sPyMg4A";

      const entryIds = {
        name: "entry.1664869934",
        email: "entry.1700356717",
        subject: "entry.235121228",
        message: "entry.1421278832",
      };

      const form = document.createElement("form");
      form.action = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
      form.method = "POST";
      form.target = "_blank";
      form.style.display = "none";

      Object.entries(entryIds).forEach(([key, entryId]) => {
        const input = document.createElement("input");
        input.type = "text";
        input.name = entryId;
        input.value = formData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitStatus({
        success: true,
        message:
          "Your message has been submitted successfully! Thank you for reaching out.",
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
    <div className="pt-20 bg-linen min-h-screen">
      {/* Contact Header - Redesigned */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-caput-mortuum/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-kombu-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-gold">
              Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
            I'm always interested in connecting with fellow technology
            enthusiasts, potential clients, or anyone looking to advance their
            career in tech.
          </p>
        </div>
      </section>

      {/* Contact Content - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-linen to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-caput-mortuum/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4">Let's Connect</h3>
                    <p className="text-gray-700 mb-6">
                      Reach out to me directly through email or connect with me on
                      social media platforms.
                    </p>

                    <ul className="space-y-4">
                      <li className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/80 text-white rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <FaEnvelope size={18} />
                        </div>
                        <a
                          href="mailto:ekenechris77@gmail.com"
                          className="text-caput-mortuum hover:underline font-medium"
                        >
                          ekenechris77@gmail.com
                        </a>
                      </li>

                      <li className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/80 text-white rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <FaLinkedin size={18} />
                        </div>
                        <a
                          href="https://www.linkedin.com/in/ekene-chris"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-caput-mortuum hover:underline font-medium"
                        >
                          linkedin.com/in/ekene-chris
                        </a>
                      </li>

                      <li className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/80 text-white rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <FaTwitter size={18} />
                        </div>
                        <a
                          href="https://x.com/iamekenechris"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-caput-mortuum hover:underline font-medium"
                        >
                          x.com/iamekenechris
                        </a>
                      </li>

                      <li className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/80 text-white rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <FaGithub size={18} />
                        </div>
                        <a
                          href="https://github.com/Ekene-Chris"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-caput-mortuum hover:underline font-medium"
                        >
                          github.com/Ekene-Chris
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>

                {submitStatus && (
                  <div
                    className={`p-4 mb-6 rounded-lg ${
                      submitStatus.success
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-semibold mb-2"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-semibold mb-2"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-2"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-caput-mortuum focus:border-caput-mortuum transition-all resize-none"
                      placeholder="Tell me about your project or question..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full px-8 py-4 bg-gradient-to-r from-caput-mortuum to-caput-mortuum/80 hover:from-caput-mortuum/90 hover:to-caput-mortuum text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-caput-mortuum/50 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kombu-green/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-kombu-green">
                Questions
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-caput-mortuum">
                  What services do you offer?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I provide technical consulting, architectural guidance for
                  DevOps and cloud infrastructure, career mentorship for
                  engineers, and technical leadership training. Each service is
                  tailored to the specific needs of individuals or
                  organizations.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-caput-mortuum">
                  How does your mentorship program work?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  My mentorship program is typically a 3-6 month engagement with
                  regular 1:1 sessions, personalized learning paths, and
                  practical projects aligned with your career goals. I work with
                  each mentee to identify skill gaps and create targeted
                  development plans.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-caput-mortuum">
                  Do you offer speaking engagements or workshops?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, I regularly speak at conferences and conduct workshops on
                  DevOps practices, cloud architecture, and engineering career
                  development. Please contact me with details about your event,
                  and we can discuss availability and topics.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-caput-mortuum">
                  How quickly can I expect a response?
                </h3>
                <p className="text-gray-700 leading-relaxed">
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
