import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from "react-icons/fa";
import {
  FaCloud,
  FaCode,
  FaRocket,
  FaUsers
} from "react-icons/fa6";

export const metadata = {
  title: "About Ekene Chris | DevOps Architect",
  description:
    "Learn more about Ekene Chris, a Technology Architect, Mentor, and Tech Educator dedicated to empowering tech professionals.",
};

export default function About() {
  return (
    <div className="pt-20 bg-linen min-h-screen">
      {/* About Hero - Redesigned */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-caput-mortuum/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-kombu-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-72 h-72 rounded-full border-2 border-dashed border-caput-mortuum/30"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow-reverse">
                  <div className="w-72 h-72 rounded-full border-2 border-dashed border-gold/30" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-caput-mortuum shadow-2xl shadow-caput-mortuum/50">
                  <Image
                    src="/images/ekene-profile.jpg"
                    alt="Ekene Chris"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Me</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-gold">
                  Ekene Chris
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold rounded-full mb-6"></div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-8">
                Technology Architect, Mentor, and Tech Educator dedicated to
                empowering tech professionals through innovation and real-world
                expertise.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/ekene-chris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-caput-mortuum flex items-center justify-center rounded-lg text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://x.com/iamekenechris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-caput-mortuum flex items-center justify-center rounded-lg text-white transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://github.com/Ekene-Chris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-caput-mortuum flex items-center justify-center rounded-lg text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-linen to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-caput-mortuum/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">My Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">My Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p>
                  I'm a Senior DevOps Engineer, educator, and founder — passionate about building both reliable systems and reliable engineers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p>
                  I started my journey in Physics, where I graduated top of my class. I loved solving complex problems, but even more — I loved explaining them. That passion followed me into tech.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p>
                  Today, I design and scale cloud-native systems for global companies, architecting automation, infrastructure, and platform reliability. I specialize in DevOps, Platform Engineering, and Cloud Engineering, ensuring systems are not just running — but resilient, observable, secure, and scalable.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p>
                  Even while building systems, I found myself building people. I started Teleios — not just as another tech training program, but as an elite engineering academy focused on practical DevOps mastery, engineering discipline, and world-class readiness.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p>
                  I believe that the future of Africa's tech transformation relies on both infrastructure and intellectual infrastructure. We need world-class cloud platforms — but we also need world-class engineers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p>
                  I'm also involved in open source, contributing to CNCF-related projects and cloud-native tooling, focusing on improving reliability and automation in distributed systems. I actively collaborate with global engineering communities, write documentation, review PRs, and build small features that improve developer experience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p>
                  In the long term, I'm building an AI-powered collaborative learning platform that blends peer learning, mentorship, and community — because the future of education won't just be intelligent, it will be deeply human, interactive, and immersive.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="font-semibold">
                  I architect systems.<br />
                  I mentor engineers.<br />
                  And I'm designing the future of learning and cloud engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Redesigned */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">Career Path</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-kombu-green">
                  Experience
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-caput-mortuum to-gold rounded-full"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ml-8 relative">
                  <div className="absolute -left-12 top-8 w-8 h-8 bg-gradient-to-br from-caput-mortuum to-gold rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-caput-mortuum to-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaRocket className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Co-Founder & CEO</h3>
                      <h4 className="text-lg text-caput-mortuum mb-2 font-semibold">Teleios</h4>
                      <p className="text-gray-500 text-sm mb-4">January 2025 - Present</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Teleios is an elite, AI-Powered tech learning experience that
                    transforms Africa's most ambitious engineers into world-class
                    technical leaders through advanced curriculum, real-world
                    projects, and expert mentorship.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-kombu-green rounded-full"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ml-8 relative">
                  <div className="absolute -left-12 top-8 w-8 h-8 bg-gradient-to-br from-gold to-kombu-green rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold to-kombu-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaCloud className="text-2xl text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Senior DevOps Engineer</h3>
                      <h4 className="text-lg text-caput-mortuum mb-2 font-semibold">Andela</h4>
                      <p className="text-gray-500 text-sm mb-4">October 2024 - Present</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Developing and maintaining critical infrastructure for partner
                    companies. Mentoring junior engineers and establishing best
                    practices for cloud resource management and deployment
                    pipelines.
                  </p>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-kombu-green to-caput-mortuum rounded-full"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ml-8 relative">
                  <div className="absolute -left-12 top-8 w-8 h-8 bg-gradient-to-br from-kombu-green to-caput-mortuum rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-kombu-green to-caput-mortuum rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaCode className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Senior DevOps Engineer</h3>
                      <h4 className="text-lg text-caput-mortuum mb-2 font-semibold">Kuda Bank</h4>
                      <p className="text-gray-500 text-sm mb-4">March 2021 - October 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Led the technical infrastructure design and implementation for
                    one of Africa's fastest-growing fintech companies. Established
                    DevOps practices and built scalable cloud infrastructure
                    supporting millions of users.
                  </p>
                </div>
              </div>

              {/* Experience Item 4 */}
              <div className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-caput-mortuum to-gold rounded-full"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ml-8 relative">
                  <div className="absolute -left-12 top-8 w-8 h-8 bg-gradient-to-br from-caput-mortuum to-gold rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-caput-mortuum to-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaCloud className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">DevOps Engineer</h3>
                      <h4 className="text-lg text-caput-mortuum mb-2 font-semibold">Reddington Healthcare</h4>
                      <p className="text-gray-500 text-sm mb-4">2019 - 2021</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Designed and implemented cloud infrastructure and automation solutions
                    for healthcare systems. Built CI/CD pipelines and monitoring systems
                    to ensure high availability and reliability of critical healthcare applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Skills - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-linen to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-kombu-green/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-caput-mortuum font-semibold text-sm uppercase tracking-wider">Skills & Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-kombu-green">
                  Expertise
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skill Card 1 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-caput-mortuum to-caput-mortuum/50 rounded-xl flex items-center justify-center">
                    <FaCloud className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Cloud & Infrastructure</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">AWS (Advanced)</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Microsoft Azure</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Infrastructure as Code (Terraform, Ansible, CloudFormation)</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Containerization (Docker, Kubernetes, Helm)</span>
                  </li>
                </ul>
              </div>

              {/* Skill Card 2 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-caput-mortuum rounded-xl flex items-center justify-center">
                    <FaRocket className="text-black text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">DevOps & Automation</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <span className="text-gold mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">CI/CD (GitHub Actions, ArgoCD, Azure DevOps)</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-gold mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Monitoring & Observability (Prometheus, Grafana, ELK, Datadog, New Relic)</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-gold mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Site Reliability Engineering</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-gold mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Security Automation</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-gold mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">High Availability & Scalability</span>
                  </li>
                </ul>
              </div>

              {/* Skill Card 3 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-kombu-green to-kombu-green/50 rounded-xl flex items-center justify-center">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Software Development</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <span className="text-kombu-green mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Python</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-kombu-green mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Go</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-kombu-green mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Microservices Architecture</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-kombu-green mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">API Design</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-kombu-green mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Cloud-Native Development</span>
                  </li>
                </ul>
              </div>

              {/* Skill Card 4 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-caput-mortuum via-gold to-kombu-green rounded-xl flex items-center justify-center">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Leadership & Education</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Technical Mentorship</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Curriculum Development</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Team Leadership</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Technical Writing</span>
                  </li>
                  <li className="flex items-center group/item">
                    <span className="text-caput-mortuum mr-3">▸</span>
                    <span className="group-hover/item:text-caput-mortuum transition-colors">Public Speaking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-caput-mortuum/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caput-mortuum to-gold">
                Together?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Whether you're looking for mentorship, technical consulting, or
              collaboration opportunities, I'm always open to connecting with
              passionate tech professionals.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-caput-mortuum to-caput-mortuum/80 hover:from-caput-mortuum/90 hover:to-caput-mortuum text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-caput-mortuum/50"
            >
              Get in Touch
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
