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
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-caput-mortuum/80"></div>
          {/* Decorative animated circles */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-caput-mortuum/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-kombu-green/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-caput-mortuum/30 backdrop-blur-sm border border-caput-mortuum rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaStar className="text-gold" />
                  DevOps Architect & Technical Mentor
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Empowering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-gold">
                  African Engineers
                </span>{" "}
                Through DevOps Excellence
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Building the bridge between African talent and global
                opportunities through technical expertise and strategic upskilling
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-caput-mortuum to-caput-mortuum/80 hover:from-caput-mortuum/90 hover:to-caput-mortuum text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-caput-mortuum/50 flex items-center justify-center gap-2"
                >
                  Work With Me
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-black text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                >
                  Explore My Work
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-8">
                <span className="text-gray-400">Follow me:</span>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/ekene-chris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-caput-mortuum flex items-center justify-center rounded-lg text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://x.com/iamekenechris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-caput-mortuum flex items-center justify-center rounded-lg text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="https://github.com/Ekene-Chris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-caput-mortuum flex items-center justify-center rounded-lg text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right content - Profile image with decorative elements */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-80 h-80 rounded-full border-2 border-dashed border-caput-mortuum/30"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow-reverse">
                  <div className="w-80 h-80 rounded-full border-2 border-dashed border-gold/30" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Profile image */}
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-caput-mortuum/50 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/ekene-profile.jpg"
                    alt="Ekene Chris"
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay */}
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

      {/* Mission Statement - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-linen to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-caput-mortuum/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-kombu-green/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">My Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Building Africa's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-kombu-green">
                  Technical Future
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-caput-mortuum/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-kombu-green/10 to-transparent rounded-tr-full"></div>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 relative z-10">
                I am a{" "}
                <span className="font-bold text-caput-mortuum">DevOps Architect</span> who
                empowers African engineers to compete globally through technical excellence
                and strategic upskilling. Through my expertise in cloud architecture,
                system design, and DevOps best practices, I aim to create pathways for
                African tech talent to reach senior engineering positions at global
                companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas - Redesigned */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">What I Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Technical Excellence &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-gold">
                Transformation
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-caput-mortuum/30 hover:border-caput-mortuum transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaCloud className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">DevOps Architecture</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Deep expertise in building scalable, resilient infrastructure
                  and optimizing deployment pipelines.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-caput-mortuum mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Cloud infrastructure optimization</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-caput-mortuum mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Microservices architecture</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-caput-mortuum mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">CI/CD implementation</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-caput-mortuum mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">System reliability engineering</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-caput-mortuum rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-caput-mortuum rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaRocket className="text-3xl text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Career Acceleration</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Strategic guidance to help engineers advance their careers and
                  reach senior roles faster.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Skills gap analysis</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Learning roadmaps</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Global engineer mindset</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-gold mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Technical interview preparation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-kombu-green to-caput-mortuum rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-kombu-green/30 hover:border-kombu-green transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-kombu-green to-kombu-green/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaCompass className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Technical Leadership</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Mentorship and guidance on developing the technical and soft
                  skills needed for leadership roles.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-kombu-green mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">System design mentorship</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-kombu-green mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Technical decision frameworks</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-kombu-green mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Team capability building</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-kombu-green mr-3 mt-1">▸</span>
                    <span className="group-hover/item:text-white transition-colors">Technical documentation standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-linen to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-caput-mortuum/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">Featured Articles</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Insights for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-kombu-green">
                Technical Excellence
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/content-1.jpg"
                  alt="Content"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-kombu-green text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  DevOps Architect's Playbook
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-caput-mortuum transition-colors">
                  Architecting Multi-Region Kubernetes Deployments
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A deep dive into scaling applications across multiple regions
                  with Kubernetes...
                </p>
                <Link
                  href="/blog/architecting-multi-region-kubernetes-deployments-beyond-basic-replication"
                  className="inline-flex items-center gap-2 text-caput-mortuum font-semibold group-hover:gap-3 transition-all"
                >
                  Read on the Blog
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/content-2.jpg"
                  alt="Content"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-kombu-green text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Global Engineer
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-caput-mortuum transition-colors">
                  Communication Patterns That Global Teams Expect
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  How to align your communication style with global engineering
                  teams...
                </p>
                <Link
                  href="/blog/communication-patterns-that-global-teams-expect"
                  className="inline-flex items-center gap-2 text-caput-mortuum font-semibold group-hover:gap-3 transition-all"
                >
                  Read on the Blog
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/content-3.jpg"
                  alt="Content"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-kombu-green text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  From Mid to Senior
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-caput-mortuum transition-colors">
                  System Design Skills That Show You're Senior-Ready
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Key architectural thinking patterns that separate mid-level
                  from senior engineers...
                </p>
                <Link
                  href="/blog/system-design-skills-that-show-you-re-senior-ready"
                  className="inline-flex items-center gap-2 text-caput-mortuum font-semibold group-hover:gap-3 transition-all"
                >
                  Read on the Blog
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Series - Redesigned */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-caput-mortuum/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-kombu-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Content Series</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              My Signature{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum via-gold to-kombu-green">
                Content Series
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum via-gold to-kombu-green mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Series 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-caput-mortuum to-gold rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-caput-mortuum/30 hover:border-caput-mortuum transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaServer className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  DevOps Architect's Playbook
                </h3>
                <p className="mb-6 text-gray-400 flex-grow leading-relaxed">
                  Deep dives into advanced technical concepts with real-world
                  applications
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 border-2 border-caput-mortuum py-2.5 px-5 rounded-lg hover:bg-caput-mortuum transition-all duration-300 font-medium"
                >
                  Read on the Blog
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Series 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-kombu-green to-gold rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-kombu-green/30 hover:border-kombu-green transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-kombu-green to-kombu-green/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaEarthAfrica className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Global Engineer
                </h3>
                <p className="mb-6 text-gray-400 flex-grow leading-relaxed">
                  Insights on bridging the gap between local experience and global
                  opportunities
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 border-2 border-kombu-green py-2.5 px-5 rounded-lg hover:bg-kombu-green transition-all duration-300 font-medium"
                >
                  Read on the Blog
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Series 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-caput-mortuum rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-caput-mortuum rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaArrowUpRightDots className="text-2xl text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  From Mid to Senior
                </h3>
                <p className="mb-6 text-gray-400 flex-grow leading-relaxed">
                  Specific technical skills and mindset shifts required to advance
                  to senior roles
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold py-2.5 px-5 rounded-lg hover:bg-gold hover:text-black transition-all duration-300 font-medium"
                >
                  Read on the Blog
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Series 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-caput-mortuum via-gold to-kombu-green rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-caput-mortuum via-gold to-kombu-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  African Tech Leaders
                </h3>
                <p className="mb-6 text-gray-400 flex-grow leading-relaxed">
                  Interviews with successful African engineers in global companies
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 py-2.5 px-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium"
                >
                  Coming Soon
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Newsletter Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-kombu-green via-kombu-green to-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-caput-mortuum/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
                Newsletter
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Technical Excellence Community
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Subscribe to receive weekly insights on DevOps architecture, career
              advancement strategies, and exclusive content to accelerate your
              technical growth
            </p>
            <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-black placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="group px-8 py-4 bg-gradient-to-r from-caput-mortuum to-caput-mortuum/80 hover:from-caput-mortuum/90 hover:to-caput-mortuum rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-caput-mortuum/50 flex items-center justify-center gap-2"
              >
                Subscribe
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-linen via-white to-linen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-caput-mortuum/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kombu-green/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">Connect With Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-kombu-green">
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 mb-12">
              Follow me on social media for daily insights and updates on DevOps
              and career advancement
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ekene-chris"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-gradient-to-br from-gray-100 to-white hover:from-caput-mortuum hover:to-caput-mortuum flex items-center justify-center rounded-2xl text-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://x.com/iamekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-gradient-to-br from-gray-100 to-white hover:from-caput-mortuum hover:to-caput-mortuum flex items-center justify-center rounded-2xl text-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://github.com/Ekene-Chris"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-gradient-to-br from-gray-100 to-white hover:from-caput-mortuum hover:to-caput-mortuum flex items-center justify-center rounded-2xl text-black hover:text-white transition-all duration-3 00 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
