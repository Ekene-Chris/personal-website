"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BentoHero from "@/components/BentoHero";
import TechStackMarquee from "@/components/TechStackMarquee";
import SpotlightCard from "@/components/SpotlightCard";
import TestimonialSection from "@/components/TestimonialSection";
import {
  FaCloud,
  FaRocket,
  FaCompass,
  FaArrowRight,
  FaServer,
  FaEarthAfrica,
  FaArrowUpRightDots,
  FaUsers,
} from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-deep-charcoal min-h-screen">
      {/* Bento Grid Hero */}
      <BentoHero />

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Mission Statement - Redesigned with Afro-Futurism */}
      <section className="py-24 bg-deep-charcoal relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot-size opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <span className="text-gold font-mono font-semibold text-sm uppercase tracking-wider">
                // MISSION_STATEMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                Building Africa's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-caput-mortuum font-mono">
                  Technical Future
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-caput-mortuum mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-card-dark to-deep-charcoal rounded-2xl border border-gold/30 p-8 md:p-12 relative overflow-hidden group">
              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-caput-mortuum/10 to-transparent"></div>

              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 relative z-10">
                I am a{" "}
                <span className="font-bold text-gold font-mono">DevOps Architect</span> who
                empowers African engineers to compete globally through technical excellence
                and strategic upskilling. Through my expertise in cloud architecture,
                system design, and DevOps best practices, I aim to create pathways for
                African tech talent to reach senior engineering positions at global
                companies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section - Spotlight Cards */}
      <section className="py-24 bg-deep-charcoal relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono font-semibold text-sm uppercase tracking-wider">
              // CORE_EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Technical Excellence &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-caput-mortuum font-mono">
                Transformation
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-caput-mortuum mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spotlight Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <SpotlightCard>
                <div className="h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/50 rounded-xl flex items-center justify-center mb-6">
                    <FaCloud className="text-3xl text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white font-mono">
                    DevOps Architecture
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    Deep expertise in building scalable, resilient infrastructure
                    and optimizing deployment pipelines.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Cloud infrastructure optimization</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Microservices architecture</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>CI/CD implementation</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>System reliability engineering</span>
                    </li>
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Spotlight Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <SpotlightCard>
                <div className="h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/50 rounded-xl flex items-center justify-center mb-6">
                    <FaRocket className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white font-mono">
                    Career Acceleration
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    Strategic guidance to help engineers advance their careers and
                    reach senior roles faster.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Skills gap analysis</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Learning roadmaps</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Global engineer mindset</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Technical interview preparation</span>
                    </li>
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Spotlight Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <SpotlightCard>
                <div className="h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-kombu-green to-kombu-green/50 rounded-xl flex items-center justify-center mb-6">
                    <FaCompass className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white font-mono">
                    Technical Leadership
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    Mentorship and guidance on developing the technical and soft
                    skills needed for leadership roles.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>System design mentorship</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Technical decision frameworks</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Team capability building</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-gold mr-3 mt-1 font-mono">→</span>
                      <span>Technical documentation standards</span>
                    </li>
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Content - Asymmetrical Grid */}
      <section className="py-24 bg-gradient-to-b from-deep-charcoal to-card-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-size opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono font-semibold text-sm uppercase tracking-wider">
              // FEATURED_ARTICLES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Insights for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-kombu-green font-mono">
                Technical Excellence
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-kombu-green mx-auto rounded-full"></div>
          </motion.div>

          {/* Asymmetrical Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Large Featured Article */}
            <motion.div
              className="lg:row-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/blog/architecting-multi-region-kubernetes-deployments-beyond-basic-replication"
                className="group block h-full"
              >
                <div className="relative h-full min-h-[500px] lg:min-h-[600px] bg-card-dark rounded-2xl border border-gold/30 overflow-hidden hover:border-gold/60 transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/content-1.jpg"
                      alt="Featured Article"
                      fill
                      className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  </div>

                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <span className="inline-block w-fit px-4 py-2 bg-kombu-green border border-gold rounded-lg text-sm font-mono font-semibold text-gold mb-4">
                      DEVOPS ARCHITECT'S PLAYBOOK
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white group-hover:text-gold transition-colors">
                      Architecting Multi-Region Kubernetes Deployments
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      A deep dive into scaling applications across multiple regions
                      with Kubernetes, focusing on high availability and disaster recovery strategies.
                    </p>
                    <div className="flex items-center gap-2 text-gold font-mono">
                      Read Article
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Smaller Articles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/blog/communication-patterns-that-global-teams-expect"
                className="group block"
              >
                <div className="relative h-[280px] bg-card-dark rounded-2xl border border-gold/30 overflow-hidden hover:border-gold/60 transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/content-2.jpg"
                      alt="Article"
                      fill
                      className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  </div>

                  <div className="relative h-full p-6 flex flex-col justify-end">
                    <span className="inline-block w-fit px-3 py-1 bg-kombu-green/80 rounded text-xs font-mono font-semibold text-gold mb-3">
                      GLOBAL ENGINEER
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">
                      Communication Patterns That Global Teams Expect
                    </h3>
                    <p className="text-gray-400 text-sm">
                      How to align your communication style with global engineering teams...
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/blog/system-design-skills-that-show-you-re-senior-ready"
                className="group block"
              >
                <div className="relative h-[280px] bg-card-dark rounded-2xl border border-gold/30 overflow-hidden hover:border-gold/60 transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/content-3.jpg"
                      alt="Article"
                      fill
                      className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  </div>

                  <div className="relative h-full p-6 flex flex-col justify-end">
                    <span className="inline-block w-fit px-3 py-1 bg-kombu-green/80 rounded text-xs font-mono font-semibold text-gold mb-3">
                      FROM MID TO SENIOR
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">
                      System Design Skills That Show You're Senior-Ready
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Key architectural thinking patterns that separate mid-level from senior engineers...
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Series - Redesigned */}
      <section className="py-24 bg-card-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono font-semibold text-sm uppercase tracking-wider">
              // CONTENT_SERIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              My Signature{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-caput-mortuum to-kombu-green font-mono">
                Content Series
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold via-caput-mortuum to-kombu-green mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaServer,
                title: "DevOps Architect's Playbook",
                description: "Deep dives into advanced technical concepts with real-world applications",
                gradient: "from-gold to-caput-mortuum",
                delay: 0.1,
              },
              {
                icon: FaEarthAfrica,
                title: "Global Engineer",
                description: "Insights on bridging the gap between local experience and global opportunities",
                gradient: "from-kombu-green to-gold",
                delay: 0.2,
              },
              {
                icon: FaArrowUpRightDots,
                title: "From Mid to Senior",
                description: "Specific technical skills and mindset shifts required to advance to senior roles",
                gradient: "from-caput-mortuum to-kombu-green",
                delay: 0.3,
              },
              {
                icon: FaUsers,
                title: "African Tech Leaders",
                description: "Interviews with successful African engineers in global companies",
                gradient: "from-gold to-kombu-green",
                delay: 0.4,
              },
            ].map((series, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: series.delay }}
              >
                <SpotlightCard className="h-full">
                  <div className="flex flex-col h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${series.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <series.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white font-mono">
                      {series.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow text-sm">
                      {series.description}
                    </p>
                    <Link
                      href="/blog"
                      className="mt-6 inline-flex items-center gap-2 text-gold font-mono hover:gap-3 transition-all group"
                    >
                      {index === 3 ? "Coming Soon" : "Read on Blog"}
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Newsletter - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-kombu-green via-kombu-green to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono font-semibold text-sm uppercase tracking-wider">
              // NEWSLETTER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-mono">
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
                placeholder="your.email@domain.com"
                className="flex-1 px-6 py-4 rounded-lg bg-black/50 border border-gold/30 focus:outline-none focus:border-gold text-white placeholder-gray-500 font-mono"
                required
              />
              <button
                type="submit"
                className="group px-8 py-4 bg-gold text-black rounded-lg font-semibold transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 flex items-center justify-center gap-2 font-mono"
              >
                Subscribe
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Redesigned */}
      <section className="py-24 bg-deep-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-size opacity-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono font-semibold text-sm uppercase tracking-wider">
              // CONNECT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white font-mono">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-caput-mortuum">
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-caput-mortuum mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 mb-12">
              Follow me on social media for daily insights and updates on DevOps
              and career advancement
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-black rounded-lg font-bold text-lg transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 font-mono"
            >
              Get In Touch
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
