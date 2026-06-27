import React, { useState, useEffect, useRef } from "react";
import Profile from "/Assets/profile.svg";
import data from "../data/portfolio.json";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`bg-background py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="flex justify-center md:col-span-4">
            <div className="relative">
              <img
                src={Profile}
                alt="Profile picture of Rushendra Nuthi"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-accent/50 shadow-lg shadow-accent/20"
              />
              <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-ping"></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            {data.about.bio.map((paragraph, idx) => (
              <p key={idx} className="text-lg mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-background-secondary/40 border border-accent/20 rounded-lg p-4"
                >
                  <dt className="text-sm uppercase tracking-wide text-accent/80">
                    {fact.label}
                  </dt>
                  <dd className="text-base font-semibold mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
