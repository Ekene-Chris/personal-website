"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ajayi Precious",
    position: "Founder, Scrub.io",
    initials: "AP",
    testimonial:
      "I've had the privilege of working with Ekene Chris on multiple projects since 2015, and he consistently demonstrates resourcefulness, strategic thinking, and a deep analytical approach. He doesn't just execute tasks—he anticipates challenges, studies problems thoroughly, and develops well-thought-out solutions. His ability to think ahead, adapt quickly, and deliver with precision makes him an invaluable asset to any team.",
  },
  {
    name: "Bright Nnah",
    position: "DevOps Engineer, MTN Nigeria",
    initials: "BN",
    testimonial:
      'I met Ekene Chris earlier in my career as a Cloud Engineer on the same role. Within 8 months on the job he was the run to for technical advice. Which progressed him as DevOps Engineer. Technically? I strongly recommend Chris for his tenacity and "can do spirit"',
  },
  {
    name: "Chika Elumeziem",
    position: "Senior DevOps Engineer, YellowCard",
    initials: "CE",
    testimonial:
      "Working with Ekene Chris was an incredible experience. As my boss, he had a deep understanding of engineering and always made sure the entire team was aligned and empowered. His leadership was both supportive and inspiring, making complex challenges feel achievable. I truly appreciate his guidance and the impact he had on my growth.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("fade-in");
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        setAnimation("fade-out");

        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          setAnimation("fade-in");
        }, 500);
      }, 8000); // Increased time to allow for reading longer testimonials
    }

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      setAutoplay(false); // Pause autoplay when user interacts
      setAnimation("fade-out");

      setTimeout(() => {
        setCurrentIndex(index);
        setAnimation("fade-in");
      }, 500);
    }
  };

  const handlePrev = () => {
    setAutoplay(false); // Pause autoplay when user interacts
    setAnimation("fade-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setAnimation("fade-in");
    }, 500);
  };

  const handleNext = () => {
    setAutoplay(false); // Pause autoplay when user interacts
    setAnimation("fade-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setAnimation("fade-in");
    }, 500);
  };

  return (
    <section className="py-20 bg-linen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What People Say</h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-700">
            Read what colleagues and clients have to say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-10 focus:outline-none hover:bg-gray-100 transition hidden md:flex"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 min-h-[300px] flex items-center">
              <div
                className={`transition-opacity duration-500 ${
                  animation === "fade-in" ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="mb-6">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonials[currentIndex].testimonial}"
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-14 h-14 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <span className="font-bold text-lg">
                      {testimonials[currentIndex].initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-10 focus:outline-none hover:bg-gray-100 transition hidden md:flex"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-caput-mortuum"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
