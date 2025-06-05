import Image from "next/image";
import Link from "next/link";
import TestimonialSection from "@/components/TestimonialSection";
import {
  FaCloud,
  FaRocket,
  FaCompass,
  FaServer,
  FaEarthAfrica,
  FaArrowUpRightDots,
  FaUsers,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa6";

export default function Home() {
  return (
    <>
     
      {/* Hero Section */}
<section className="hero-gradient min-h-screen flex items-center pt-16 md:pt-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center z-10 relative py-10">
          <div className="md:w-2/3 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              The Elite DevOps Program Transforming African Engineers into Global Tech Leaders
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              A groundbreaking 4-month program crafted to turn mid-level African engineers 
              into world-class technical experts ready for global opportunities.
            </p>
            
            <div className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Program Highlights:</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Advanced curriculum mirroring top global tech companies
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Real-world production-grade projects
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Expert-led live classes and 1:1 mentorship
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Complimentary AWS/Azure cloud access
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="https://jointeleios.com" 
                target="_blank"
                className="btn btn-primary py-3 px-4 sm:py-3 sm:px-6 text-sm sm:text-base"
              >
                Apply Now (Deadline: June 21)
              </Link>
              <Link
                href="#program-details"
                className="btn bg-transparent border-2 border-white hover:bg-white hover:text-black py-3 px-4 sm:py-3 sm:px-6 text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 sm:mt-10 md:mt-0 flex justify-center">
            <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 border-4 border-white shadow-lg">
              <Image
                src="/images/ekene-profile.jpg"
                alt="Ekene Chris"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section id="program-details" className="py-16 sm:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
            Teleios Program Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Who Should Apply</h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  <span>
                    <strong>Mid-level DevOps, Backend, or Frontend engineers</strong> ready to step into senior or leadership roles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  <span>
                    <strong>Self-taught developers</strong> eager to validate their skills in a rigorous, real-world environment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  <span>
                    <strong>Driven recent graduates</strong> who refuse to settle for average and are determined to stand out globally
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Program Investment</h3>
              <div className="bg-caput-mortuum bg-opacity-30 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base">
                <p className="mb-2"><strong>One-Time Payment:</strong> $1,000 for the entire 4-month experience</p>
                <p className="mb-2"><strong>Flexible Monthly Plan:</strong> $300/month over 4 months</p>
                <p><strong>Early Bird Bonus:</strong> Free 1:1 career strategy session (valued at $250)</p>
              </div>
              <p className="text-sm sm:text-base">
                <strong>Limited to 50 participants only</strong><br />
                Deadline to Apply: June 21, 2025
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <Link 
              href="https://jointeleios.com" 
              target="_blank"
              className="btn btn-primary text-base sm:text-xl py-3 px-6 sm:py-4 sm:px-8"
            >
              Secure Your Spot Now
            </Link>
          </div>
        </div>
      </section>


<section id="program-details" className="py-20 bg-black text-white">
  <div className="container mx-auto px-6">
    <h2 className="section-title">Teleios Program Details</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Who Should Apply</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-caput-mortuum mr-2">•</span>
            <span>
              <strong>Mid-level DevOps, Backend, or Frontend engineers</strong> ready to step into senior or leadership roles
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-caput-mortuum mr-2">•</span>
            <span>
              <strong>Self-taught developers</strong> eager to validate their skills in a rigorous, real-world environment
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-caput-mortuum mr-2">•</span>
            <span>
              <strong>Driven recent graduates</strong> who refuse to settle for average and are determined to stand out globally
            </span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-6">Program Investment</h3>
        <div className="bg-caput-mortuum bg-opacity-30 p-6 rounded-lg mb-6">
          <p className="mb-2"><strong>One-Time Payment:</strong> $1,000 for the entire 4-month experience</p>
          <p className="mb-2"><strong>Flexible Monthly Plan:</strong> $300/month over 4 months</p>
          <p><strong>Early Bird Bonus:</strong> Free 1:1 career strategy session (valued at $250)</p>
        </div>
        <p className="text-lg">
          <strong>Limited to 50 participants only</strong><br />
          Deadline to Apply: June 21, 2025
        </p>
      </div>
    </div>
    
    <div className="text-center mt-16">
      <Link 
        href="https://jointeleios.com" 
        target="_blank"
        className="btn btn-primary text-xl py-4 px-8"
      >
        Secure Your Spot Now
      </Link>
    </div>
  </div>
</section>

      {/* Mission Statement */}
      <section className="py-20 bg-linen">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Building Africa's Technical Future</h2>
          <p className="max-w-4xl mx-auto text-lg mt-12">
            I position myself as a DevOps Architect who empowers African
            engineers to compete globally through technical excellence and
            strategic upskilling. Through my expertise in cloud architecture,
            system design, and DevOps best practices, I aim to create pathways
            for African tech talent to reach senior engineering positions at
            global companies.
          </p>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Technical Excellence & Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="expertise-card bg-caput-mortuum bg-opacity-30 p-8 rounded-lg transition duration-300">
              <div className="text-caput-mortuum text-4xl mb-6">
                <FaCloud />
              </div>
              <h3 className="text-xl font-bold mb-4">DevOps Architecture</h3>
              <p className="mb-6">
                Deep expertise in building scalable, resilient infrastructure
                and optimizing deployment pipelines.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Cloud infrastructure optimization
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Microservices architecture
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  CI/CD implementation
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  System reliability engineering
                </li>
              </ul>
            </div>

            <div className="expertise-card bg-caput-mortuum bg-opacity-30 p-8 rounded-lg transition duration-300">
              <div className="text-caput-mortuum text-4xl mb-6">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold mb-4">Career Acceleration</h3>
              <p className="mb-6">
                Strategic guidance to help engineers advance their careers and
                reach senior roles faster.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Skills gap analysis
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Learning roadmaps
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Global engineer mindset
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Technical interview preparation
                </li>
              </ul>
            </div>

            <div className="expertise-card bg-caput-mortuum bg-opacity-30 p-8 rounded-lg transition duration-300">
              <div className="text-caput-mortuum text-4xl mb-6">
                <FaCompass />
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Leadership</h3>
              <p className="mb-6">
                Mentorship and guidance on developing the technical and soft
                skills needed for leadership roles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  System design mentorship
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Technical decision frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Team capability building
                </li>
                <li className="flex items-start">
                  <span className="text-caput-mortuum mr-2">•</span>
                  Technical documentation standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-linen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Insights for Technical Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="content-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/images/content-1.jpg"
                  alt="Content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-kombu-green text-white px-3 py-1 rounded text-sm mb-4">
                  DevOps Architect's Playbook
                </span>
                <h3 className="text-lg font-bold mb-2">
                  Architecting Multi-Region Kubernetes Deployments
                </h3>
                <p className="text-gray-600 mb-4">
                  A deep dive into scaling applications across multiple regions
                  with Kubernetes...
                </p>
                <button className="text-caput-mortuum font-medium flex items-center">
                  Coming Soon
                </button>
              </div>
            </div>

            <div className="content-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/images/content-2.jpg"
                  alt="Content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-kombu-green text-white px-3 py-1 rounded text-sm mb-4">
                  Global Engineer
                </span>
                <h3 className="text-lg font-bold mb-2">
                  Communication Patterns That Global Teams Expect
                </h3>
                <p className="text-gray-600 mb-4">
                  How to align your communication style with global engineering
                  teams...
                </p>
                <button className="text-caput-mortuum font-medium flex items-center">
                  Coming Soon
                </button>
              </div>
            </div>

            <div className="content-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/images/content-3.jpg"
                  alt="Content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-kombu-green text-white px-3 py-1 rounded text-sm mb-4">
                  From Mid to Senior
                </span>
                <h3 className="text-lg font-bold mb-2">
                  System Design Skills That Show You're Senior-Ready
                </h3>
                <p className="text-gray-600 mb-4">
                  Key architectural thinking patterns that separate mid-level
                  from senior engineers...
                </p>
                <button className="text-caput-mortuum font-medium flex items-center">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Series */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">My Signature Content Series</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-caput-mortuum bg-opacity-30 p-6 rounded-lg shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-800 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2 relative z-10">
                DevOps Architect's Playbook
              </h3>
              <p className="mb-6 relative z-10">
                Deep dives into advanced technical concepts with real-world
                applications
              </p>
              <div className="absolute bottom-[-20px] right-[-20px] text-caput-mortuum opacity-10 text-8xl">
                <FaServer />
              </div>
              <button className="inline-block border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 relative z-10">
                Coming Soon
              </button>
            </div>

            <div className="bg-caput-mortuum bg-opacity-30 p-6 rounded-lg shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-800 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2 relative z-10">
                Global Engineer
              </h3>
              <p className="mb-6 relative z-10">
                Insights on bridging the gap between local experience and global
                opportunities
              </p>
              <div className="absolute bottom-[-20px] right-[-20px] text-caput-mortuum opacity-10 text-8xl">
                <FaEarthAfrica />
              </div>
              <button className="inline-block border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 relative z-10">
                Coming Soon
              </button>
            </div>

            <div className="bg-caput-mortuum bg-opacity-30 p-6 rounded-lg shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-800 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2 relative z-10">
                From Mid to Senior
              </h3>
              <p className="mb-6 relative z-10">
                Specific technical skills and mindset shifts required to advance
                to senior roles
              </p>
              <div className="absolute bottom-[-20px] right-[-20px] text-caput-mortuum opacity-10 text-8xl">
                <FaArrowUpRightDots />
              </div>
              <button className="inline-block border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 relative z-10">
                Coming Soon
              </button>
            </div>

            <div className="bg-caput-mortuum bg-opacity-30 p-6 rounded-lg shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-800 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2 relative z-10">
                African Tech Leaders
              </h3>
              <p className="mb-6 relative z-10">
                Interviews with successful African engineers in global companies
              </p>
              <div className="absolute bottom-[-20px] right-[-20px] text-caput-mortuum opacity-10 text-8xl">
                <FaUsers />
              </div>
              <button className="inline-block border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 relative z-10">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Using the new component */}
      <TestimonialSection />

      {/* Newsletter Section */}
      <section className="py-20 bg-kombu-green text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Technical Excellence Community
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Subscribe to receive weekly insights on DevOps architecture, career
            advancement strategies, and exclusive content to accelerate your
            technical growth
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

      {/* Contact Section */}
      <section className="py-20 bg-linen">
        <div className="container mx-auto px-6 text-center">
          <div className="text-center mb-12">
            <h2 className="section-title">Let's Connect</h2>
            <p className="mt-6 text-lg">
              Follow me on social media for daily insights and updates on DevOps
              and career advancement
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ekene-chris"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black flex items-center justify-center rounded-full text-white hover:bg-caput-mortuum transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/iamekenechris"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black flex items-center justify-center rounded-full text-white hover:bg-caput-mortuum transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://github.com/Ekene-Chris"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black flex items-center justify-center rounded-full text-white hover:bg-caput-mortuum transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
