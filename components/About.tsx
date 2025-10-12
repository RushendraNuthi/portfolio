import React, { useState, useEffect, useRef } from 'react';

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
            className={`bg-background py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="flex justify-center md:col-span-4">
                        <div className="relative">
                            <img
                                src="/profile.svg"
                                alt="Profile picture of Rushendra Nuthi"
                                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-accent/50 shadow-lg shadow-accent/20"
                            />
                            <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-ping"></div>
                        </div>
                    </div>
                    <div className="md:col-span-8">
                         <h2 className="text-4xl font-bold mb-6">
                            About Me
                        </h2>
                        <p className="text-lg mb-6 leading-relaxed">
                          As a passionate and detail-oriented Computer Science student, I am deeply invested in the intersection of software development and cybersecurity. My hands-on experience is centered around building full-stack applications and sophisticated security tools from the ground up. I am proficient in leveraging Python, Flask, and machine learning models to create efficient, automated solutions that address complex security challenges. My work includes integrating diverse APIs to build comprehensive data dashboards and streamline security workflows. As a Google Cybersecurity Certified professional, I have cultivated a strong foundation in secure coding practices, systematic problem-solving, and robust system design. I am eager to apply my skills and contribute to innovative projects within a dynamic, tech-driven organization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;