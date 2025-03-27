import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe } from "react-icons/fa";

export const metadata = {
  title: "About Ekene Chris | DevOps Architect",
  description:
    "Learn more about Ekene Chris, a Technology Architect, Mentor, and Tech Educator dedicated to empowering tech professionals.",
};

export default function About() {
  return (
    <div className="pt-24 bg-linen min-h-screen">
      {/* About Hero */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-caput-mortuum">
                <Image
                  src="/images/ekene-profile.jpg"
                  alt="Ekene Chris"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-6">About Ekene Chris</h1>
              <p className="text-xl leading-relaxed mb-6">
                Technology Architect, Mentor, and Tech Educator dedicated to
                empowering tech professionals through innovation and real-world
                expertise.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/ekene-chris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-caput-mortuum hover:bg-opacity-90 text-white p-3 rounded-full transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/ekenechris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-caput-mortuum hover:bg-opacity-90 text-white p-3 rounded-full transition"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://github.com/Ekene-Chris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-caput-mortuum hover:bg-opacity-90 text-white p-3 rounded-full transition"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">My Story</h2>

            <div className="space-y-6 text-lg">
              <p>
                As the Co-Founder & CEO of Teleios, I am shaping AI-powered
                learning for aspiring and mid-level engineers across all
                disciplines. My focus is on bridging the gap between African
                tech talent and global opportunities through practical,
                results-oriented training and mentorship.
              </p>

              <p>
                With a track record spanning Andela, Kuda, and Tek Experts, I
                specialize in architecture design, system optimization, and
                software engineering best practices. My experience leading
                complex cloud infrastructure projects has given me unique
                insights into what it takes for engineers from emerging tech
                ecosystems to excel in global companies.
              </p>

              <p>
                I'm passionate about mentorship and strategic problem-solving,
                committed to building resilient, scalable tech solutions that
                drive efficiency and transformation. My approach combines deep
                technical expertise with a keen understanding of the human
                elements needed for successful engineering teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">
              Professional Experience
            </h2>

            <div className="space-y-12">
              <div className="border-l-4 border-caput-mortuum pl-6 relative">
                <div className="w-4 h-4 bg-caput-mortuum rounded-full absolute -left-[10px] top-1"></div>
                <h3 className="text-xl font-bold">Co-Founder & CEO</h3>
                <h4 className="text-lg text-caput-mortuum mb-2">Teleios</h4>
                <p className="text-gray-500 mb-4">January 2025 - Present</p>
                <p className="text-lg">
                  Teleios is an elite, AI-Powered tech learning experience that
                  transforms Africa's most ambitious engineers into world-class
                  technical leaders through advanced curriculum, real-world
                  projects, and expert mentorship.
                </p>
              </div>

              <div className="border-l-4 border-caput-mortuum pl-6 relative">
                <div className="w-4 h-4 bg-caput-mortuum rounded-full absolute -left-[10px] top-1"></div>
                <h3 className="text-xl font-bold">Senior DevOps Engineer</h3>
                <h4 className="text-lg text-caput-mortuum mb-2">Andela</h4>
                <p className="text-gray-500 mb-4">October 2024 - Present</p>
                <p className="text-lg">
                  Developing and maintaining critical infrastructure for partner
                  companies. Mentoring junior engineers and establishing best
                  practices for cloud resource management and deployment
                  pipelines.
                </p>
              </div>

              <div className="border-l-4 border-caput-mortuum pl-6 relative">
                <div className="w-4 h-4 bg-caput-mortuum rounded-full absolute -left-[10px] top-1"></div>
                <h3 className="text-xl font-bold">Senior DevOps Engineer</h3>
                <h4 className="text-lg text-caput-mortuum mb-2">Kuda Bank</h4>
                <p className="text-gray-500 mb-4">March 2021 - October 2024</p>
                <p className="text-lg">
                  Led the technical infrastructure design and implementation for
                  one of Africa's fastest-growing fintech companies. Established
                  DevOps practices and built scalable cloud infrastructure
                  supporting millions of users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Skills */}
      <section className="py-16 bg-linen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Technical Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Cloud & Infrastructure
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    AWS (Advanced)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Microsoft Azure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Google Cloud Platform
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Infrastructure as Code (Terraform, CloudFormation)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Containerization (Docker, Kubernetes)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">DevOps & Automation</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    CI/CD (Jenkins, GitHub Actions, CircleCI)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Configuration Management (Ansible, Chef)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Monitoring & Observability (Prometheus, Grafana, ELK)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Site Reliability Engineering
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Security Automation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Software Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    JavaScript/TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Go
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Microservices Architecture
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    API Design
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Leadership & Education
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Technical Mentorship
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Curriculum Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Team Leadership
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Technical Writing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-caput-mortuum rounded-full mr-2"></span>
                    Public Speaking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Whether you're looking for mentorship, technical consulting, or
            collaboration opportunities, I'm always open to connecting with
            passionate tech professionals.
          </p>
          <Link
            href="/contact"
            className="btn bg-caput-mortuum hover:bg-opacity-90 text-white inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
