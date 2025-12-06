import React, { useState, useEffect, useRef } from "react";
import Profile from "/Assets/profile.svg";

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
            <p className="text-lg mb-6 leading-relaxed">
              I am a dedicated and passionate Computer Science professional with
              a strong foundation in cyber-security, software development, and
              networking. Currently pursuing my M.Tech in Computer Networks and
              Information Security, I combine rigorous academic training with a
              real-world mindset to build secure, efficient, and scalable
              software systems.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Over the years, I’ve cultivated a versatile skill set in software
              development — proficient in modern web technologies, system
              design, and security-first practices. I thrive on creating
              intuitive, high-performance solutions, whether it’s building
              dynamic web applications or designing robust backend
              architectures. My interests span across multiple domains, and I am
              particularly drawn to challenging problems in cybersecurity,
              network design, and full-stack development.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My personal portfolio site reflects not just a collection of
              projects, but a narrative of growth — showcasing projects that
              highlight my technical abilities, problem-solving mindset, and
              commitment to clean, maintainable code. I take pride in writing
              code that is readable, efficient, and secure, while following
              industry best practices and standards.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              As a learner at heart, I am always exploring new tools,
              frameworks, and methodologies to stay updated with evolving
              technologies. I believe that continuous learning — coupled with a
              strong foundation — is key to driving meaningful impact. I welcome
              collaboration, innovation, and opportunities where I can
              contribute my skills to real-world challenges and deliver tangible
              value.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              In essence, I see myself as a growth-oriented developer and
              security-conscious engineer who aims to build solutions that are
              not only functional but also secure, scalable, and maintainable. I
              am driven by curiosity, guided by discipline, and committed to
              excellence in every project I undertake.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              As a learner at heart, I am always exploring new tools,
              frameworks, and methodologies to stay updated with evolving
              technologies. I believe that continuous learning — coupled with a
              strong foundation — is key to driving meaningful impact. I welcome
              collaboration, innovation, and opportunities where I can
              contribute my skills to real-world challenges and deliver tangible
              value. In essence, I see myself as a growth-oriented developer and
              security-conscious engineer who aims to build solutions that are
              not only functional but also secure, scalable, and maintainable. I
              am driven by curiosity, guided by discipline, and committed to
              excellence in every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
