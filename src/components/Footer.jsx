import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ekene-chris", Icon: FaLinkedin },
  { label: "X (Twitter)", href: "https://x.com/iamekenechris", Icon: FaTwitter },
  { label: "GitHub", href: "https://github.com/Ekene-Chris", Icon: FaGithub },
  { label: "Website", href: "https://ekenechris.com", Icon: FaGlobe },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const resourceLinks = [
  { label: "Teleios Platform", href: "https://jointeleios.com", external: true },
  { label: "Teleios Fellowship", href: "/teleios" },
  { label: "Tools & Guides", href: "/resources" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Only offer the newsletter once its Brevo list is configured, so the form
  // never silently fails.
  const newsletterEnabled = Boolean(process.env.BREVO_NEWSLETTER_LIST_ID);

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div
          className={`py-12 grid grid-cols-1 gap-8 ${
            newsletterEnabled ? "md:grid-cols-4" : "md:grid-cols-3"
          }`}
        >
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div>
                <span className="font-bold text-lg">Ekene Chris</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Technology Architect & Educator empowering engineers to excel in
              the global tech landscape.
            </p>
            <div className="flex space-x-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-gold transition"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-caput-mortuum">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-black transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-caput-mortuum">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map(({ label, href, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-black transition"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {newsletterEnabled && (
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-bold text-lg mb-4 text-caput-mortuum">
                Join My Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Get the latest career advancement tips and technical insights.
              </p>
              <NewsletterForm />
            </div>
          )}
        </div>

        {/* Brand Values */}
        <div className="py-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Innovation · Mentorship · Adaptability · Growth · Excellence
          </p>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {currentYear} Ekene Chris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
