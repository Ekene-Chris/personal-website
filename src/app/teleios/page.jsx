import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Teleios Program | Ekene Chris",
  description: "Learn about the Teleios program aimed at transforming African engineers into global tech leaders.",
};

export default function Teleios() {
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
    </>
  );
}
