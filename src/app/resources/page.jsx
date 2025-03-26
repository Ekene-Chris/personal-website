import Link from "next/link";
import Image from "next/image";
import {
  FaFileAlt,
  FaBook,
  FaVideo,
  FaPodcast,
  FaDownload,
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

      {/* Coming Soon Message */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Resources Coming Soon!</h2>
            <p className="text-lg mb-8">
              I'm currently developing a collection of valuable resources for
              engineers at all career stages. These will include technical
              guides, career development templates, and tools to help you excel
              in your role.
            </p>
            <Link href="/" className="btn btn-primary inline-block">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Resource Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-linen p-8 rounded-lg shadow-md text-center">
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

            <div className="bg-linen p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-caput-mortuum mb-4 flex justify-center">
                <FaBook />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Resources</h3>
              <p className="text-gray-600 mb-4">
                Templates, frameworks, and guides for advancing your engineering
                career.
              </p>
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                Coming Soon
              </span>
            </div>

            <div className="bg-linen p-8 rounded-lg shadow-md text-center">
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

            <div className="bg-linen p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-caput-mortuum mb-4 flex justify-center">
                <FaPodcast />
              </div>
              <h3 className="text-xl font-bold mb-2">Podcast & Interviews</h3>
              <p className="text-gray-600 mb-4">
                Conversations with industry experts and successful African
                engineers.
              </p>
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource Teaser */}
      <section className="py-16 bg-linen">
        <div className="container mx-auto px-6">
          <div className="bg-black text-white rounded-lg shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <Image
                src="/images/content-1.jpg"
                alt="Background pattern"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">
                Global DevOps Competency Matrix
              </h2>
              <p className="text-lg mb-8">
                The Global DevOps Competency Matrix is a comprehensive guide
                mapping technical skills to career levels in DevOps. This matrix
                helps engineers identify skill gaps and create targeted
                development plans to advance their careers.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="btn bg-caput-mortuum hover:bg-opacity-90 text-white flex items-center">
                  <FaDownload className="mr-2" /> Coming Soon
                </button>
                <p className="text-sm opacity-80">
                  Will be available for free download soon!
                </p>
              </div>
            </div>
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
