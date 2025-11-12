import Image from "next/image";
import Link from "next/link";
import {
  FaRocket,
  FaUsers,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaArrowRight,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";

export const metadata = {
  title: "Teleios Program | Ekene Chris",
  description: "Learn about the Teleios program aimed at transforming African engineers into global tech leaders.",
};

export default function Teleios() {
  return (
    <div className="pt-20 bg-linen min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-caput-mortuum/80"></div>
          {/* Decorative animated circles */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-caput-mortuum/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gold/30 backdrop-blur-sm border border-gold rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaStar className="text-gold" />
                  Next Cohort: January 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                The Elite{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-caput-mortuum to-kombu-green">
                  DevOps Program
                </span>{" "}
                Transforming African Engineers into Global Tech Leaders
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                A groundbreaking 4-month program crafted to turn entry-level and mid-level African engineers
                into world-class technical experts ready for global opportunities.
              </p>

              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-gold" />
                  Program Highlights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span>Advanced curriculum mirroring top global tech companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span>Real-world production-grade projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span>Expert-led live classes and 1:1 mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span>Complimentary AWS/Azure cloud access</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="https://jointeleios.com"
                  target="_blank"
                  className="group px-8 py-4 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold text-black rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-gold/50 flex items-center justify-center gap-2"
                >
                  Join Waitlist for January 2026
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#program-details"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-black text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right content - Profile image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-80 h-80 rounded-full border-2 border-dashed border-gold/30"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow-reverse">
                  <div className="w-80 h-80 rounded-full border-2 border-dashed border-caput-mortuum/30" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-gold/50 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/ekene-profile.jpg"
                    alt="Ekene Chris"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Program Details Section - Redesigned */}
      <section id="program-details" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-caput-mortuum/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Program Details</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Teleios{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-caput-mortuum">
                Program Details
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-caput-mortuum mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Who Should Apply */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-caput-mortuum rounded-xl flex items-center justify-center">
                  <FaUsers className="text-2xl text-black" />
                </div>
                <h3 className="text-3xl font-bold">Who Should Apply</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You should apply to Teleios if you're an entry-level or mid-level engineer who wants to accelerate to senior-level capabilities. We also lookout for engineers eager to compete for global opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Entry-level and mid-level DevOps, Backend, or Frontend engineers ready to step into senior roles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Engineers eager to validate their skills in a rigorous, real-world environment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Ambitious engineers determined to stand out globally and compete for international opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* What Makes Teleios Different */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-caput-mortuum to-gold rounded-xl flex items-center justify-center">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <h3 className="text-3xl font-bold">What Makes Teleios Different</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Unlike traditional bootcamps focused on entry-level skills, Teleios offers advanced, senior-level curriculum with real-world projects that simulate challenges faced at leading tech companies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Advanced, senior-level curriculum designed for career acceleration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Small cohorts with personalized attention and 1:1 mentorship from industry veterans
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Focus on building a portfolio of excellence rather than just teaching basics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Investment */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gold/20 to-caput-mortuum/20 backdrop-blur-sm p-10 rounded-2xl border-2 border-gold/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-caput-mortuum rounded-xl flex items-center justify-center">
                  <FaLaptopCode className="text-2xl text-black" />
                </div>
                <h3 className="text-3xl font-bold">Program Investment</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/30 p-6 rounded-xl border border-gold/20">
                  <p className="text-lg mb-2">
                    <strong className="text-gold">One-Time Payment:</strong>
                  </p>
                  <p className="text-3xl font-bold">
                    <span className="line-through text-gray-500">$1,000</span>
                    <span className="ml-3 text-gold">$500</span>
                  </p>
                  <p className="text-gray-300 mt-2">for the entire 4-month experience</p>
                </div>

                <div className="bg-black/30 p-6 rounded-xl border border-gold/20">
                  <p className="text-lg mb-2">
                    <strong className="text-gold">Flexible Monthly Plan:</strong>
                  </p>
                  <p className="text-3xl font-bold text-gold">$300/month</p>
                  <p className="text-gray-300 mt-2">over 4 months</p>
                </div>
              </div>

              <div className="bg-kombu-green/30 p-6 rounded-xl border border-kombu-green/50 mb-6">
                <p className="text-lg">
                  <strong className="text-gold">Early Bird Bonus:</strong>{" "}
                  <span className="text-white">Free 1:1 career strategy session (valued at $250)</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold mb-2">
                  <span className="text-gold">Limited to 50 participants only</span>
                </p>
                <p className="text-xl text-gray-300">
                  Next cohort begins January 2026
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="https://jointeleios.com"
              target="_blank"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold text-black rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-gold/50"
            >
              Join the January 2026 Waitlist
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Teleios Section */}
      <section className="py-24 bg-gradient-to-br from-linen to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-caput-mortuum/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">Why Teleios</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your Path to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-gold">
                Global Excellence
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-caput-mortuum to-gold rounded-xl flex items-center justify-center mb-6">
                <FaChalkboardTeacher className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Mentorship</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn directly from industry veterans with experience at top global companies. Get personalized 1:1 guidance tailored to your career goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-caput-mortuum rounded-xl flex items-center justify-center mb-6">
                <FaLaptopCode className="text-black text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-World Projects</h3>
              <p className="text-gray-700 leading-relaxed">
                Build production-grade projects that mirror challenges at leading tech companies. Create a portfolio that stands out to global employers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-kombu-green to-caput-mortuum rounded-xl flex items-center justify-center mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Small Cohorts</h3>
              <p className="text-gray-700 leading-relaxed">
                Limited to 50 participants for maximum attention and support. Join a community of ambitious engineers committed to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
