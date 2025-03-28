import Link from "next/link";
import Image from "next/image";
import {
  FaFileAlt,
  FaBook,
  FaVideo,
  FaPodcast,
  FaDownload,
  FaFileCode,
  FaLaptopCode,
} from "react-icons/fa";

export const metadata = {
  title: "Resources | Ekene Chris",
  description:
    "Access guides, templates, and learning resources to accelerate your DevOps and cloud engineering career.",
};

export default function Resources() {
  return (
    <div className="pt-24 bg-linen min-h-screen">
      {/* Resources Header */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Tools, guides, and learning materials to accelerate your career in
            DevOps and cloud engineering.
          </p>
        </div>
      </section>

      {/* Featured Resource - AI Resume Analyzer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-linen rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-caput-mortuum text-white px-4 py-1 rounded-full text-sm mb-6">
                  Featured Tool
                </span>
                <h2 className="text-3xl font-bold mb-4">AI Resume Analyzer</h2>
                <p className="text-lg mb-6">
                  Get expert feedback on your tech resume, tailored for software
                  engineers, and discover what it takes to stand out in today's
                  competitive tech marketplace.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p>
                      Industry-Aligned Analysis Based on real tech industry
                      standards
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p>
                      Keyword Optimization to stand out to recruiters and ATS
                      systems
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p>Targeted Feedback with role-specific recommendations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p>
                      Career Advancement guidance with clear path to improvement
                    </p>
                  </li>
                </ul>
                <a
                  href="https://resume.ekenechris.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-caput-mortuum hover:bg-opacity-90 text-white inline-block"
                >
                  Analyze Your Resume Now
                </a>
              </div>
              <div className="bg-black p-8 lg:p-0 flex items-center justify-center">
                <div className="relative w-full h-64 lg:h-full">
                  <Image
                    src="/images/ai-resume-analyzer.jpg"
                    alt="AI Resume Analyzer"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-70 p-6 rounded-lg max-w-md text-center">
                      <h3 className="text-white text-xl font-bold mb-4">
                        AI-Powered Resume Analysis for Engineers
                      </h3>
                      <p className="text-white">
                        Upload your resume in PDF or DOCX format along with your
                        target role and experience level to get detailed
                        feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-linen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Resource Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-caput-mortuum mb-4 flex justify-center">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Guides</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides for implementing DevOps practices and cloud
                infrastructure.
              </p>
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-caput-mortuum mb-4 flex justify-center">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Tools</h3>
              <p className="text-gray-600 mb-4">
                Interactive tools to help you evaluate and advance your
                engineering career.
              </p>
              <Link
                href="#tools"
                className="inline-block bg-caput-mortuum text-white px-4 py-2 rounded-full text-sm"
              >
                View Tools
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-caput-mortuum mb-4 flex justify-center">
                <FaVideo />
              </div>
              <h3 className="text-xl font-bold mb-2">Tutorials & Webinars</h3>
              <p className="text-gray-600 mb-4">
                Video content on technical topics and career development
                strategies.
              </p>
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-caput-mortuum mb-4 flex justify-center">
                <FaBook />
              </div>
              <h3 className="text-xl font-bold mb-2">Templates & Downloads</h3>
              <p className="text-gray-600 mb-4">
                Ready-to-use templates, checklists, and resources for your
                engineering career.
              </p>
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Available Tools Section */}
      <section id="tools" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Available Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Resume Analyzer Card */}
            <div className="bg-linen rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 relative">
                <Image
                  src="/images/ai-resume-analyzer.jpg"
                  alt="AI Resume Analyzer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold px-4 text-center">
                    AI Resume Analyzer
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Get expert feedback on your tech resume tailored for software
                  engineers. Learn how to stand out in today's competitive tech
                  marketplace.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-caput-mortuum font-bold">
                    Free Tool
                  </span>
                  <a
                    href="https://resume.ekenechris.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-caput-mortuum text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
                  >
                    Try It Now
                  </a>
                </div>
              </div>
            </div>

            {/* Coming Soon Tool Card */}
            <div className="bg-linen rounded-lg shadow-md overflow-hidden opacity-75">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaFileCode className="text-6xl text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-caput-mortuum py-2 px-6 rounded-full">
                    <h3 className="text-white text-lg font-bold">
                      Coming Soon
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  DevOps Competency Matrix
                </h3>
                <p className="text-gray-700 mb-6">
                  Evaluate your DevOps skills against industry standards and
                  identify areas for improvement to advance your career.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold">
                    Under Development
                  </span>
                  <button
                    disabled
                    className="bg-gray-300 text-gray-600 py-2 px-4 rounded cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-linen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            How the AI Resume Analyzer Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-5xl text-caput-mortuum mb-6 flex justify-center">
                <span className="w-16 h-16 bg-caput-mortuum text-white rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Upload Your Resume</h3>
              <p className="text-gray-600">
                Submit your resume in PDF or DOCX format along with information
                about your target role and experience level.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-5xl text-caput-mortuum mb-6 flex justify-center">
                <span className="w-16 h-16 bg-caput-mortuum text-white rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your resume against industry standards for
                developers, engineers, and tech professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-5xl text-caput-mortuum mb-6 flex justify-center">
                <span className="w-16 h-16 bg-caput-mortuum text-white rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Get Detailed Feedback</h3>
              <p className="text-gray-600">
                Receive actionable insights to improve your resume and increase
                your chances of landing your dream tech role.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://resume.ekenechris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-caput-mortuum hover:bg-opacity-90 text-white inline-block"
            >
              Try the Resume Analyzer Now
            </a>
          </div>
        </div>
      </section>

      {/* Teleios Platform */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative h-[300px] md:h-auto">
              <div className="absolute w-full h-full bg-caput-mortuum rounded-lg transform -translate-x-4 -translate-y-4"></div>
              <div className="relative w-full h-full bg-gray-200 rounded-lg">
                <Image
                  src="/images/content-2.jpg"
                  alt="Teleios Platform"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Explore the Teleios Platform
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Teleios is an exclusive tech learning platform designed to help
                ambitious engineers close skill gaps and compete globally. The
                platform offers personalized learning paths, hands-on projects,
                and mentorship from industry experts.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p>
                    AI-powered skill assessment and learning recommendations
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p>Hands-on projects designed by industry experts</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p>Community of ambitious engineers from across Africa</p>
                </div>
              </div>
              <a
                href="https://jointeleios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-block"
              >
                Visit Teleios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-kombu-green text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Resources Delivered to Your Inbox
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Subscribe to receive updates when new resources are available, along
            with weekly insights on DevOps, cloud architecture, and engineering
            career development.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 w-full rounded-l-lg sm:rounded-r-none focus:outline-none text-black mb-3 sm:mb-0"
              required
            />
            <button
              type="submit"
              className="bg-caput-mortuum hover:bg-opacity-90 text-white px-6 py-3 rounded-r-lg sm:rounded-l-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
