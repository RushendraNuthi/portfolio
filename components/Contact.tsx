import React, { useState, useEffect, useRef } from 'react';
import Resume from '/Assets/Rushendra_Nuthi_Resume.pdf';

// SVG Icons
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.94 0-1.62.61-1.62 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.38 1.02 3.38 4.52z"></path>
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"></path>
    </svg>
);

const socialLinks = [
    {
        name: 'Email',
        href: 'mailto:rushendra.nuthi123@gmail.com',
        icon: EmailIcon,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/rushendranuthi13',
        icon: LinkedInIcon,
    },
    {
        name: 'GitHub',
        href: 'https://github.com/RushendraNuthi',
        icon: GitHubIcon,
    },
];

const Contact: React.FC = () => {
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
            id="contact"
            className={`bg-background-secondary py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto text-text-primary/80">
                    I'm currently seeking new opportunities and am excited to contribute to innovative projects. Feel free to reach out or view my resume.
                </p>
                <div className="flex justify-center items-center gap-8 md:gap-12">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Contact me via ${link.name}`}
                            className="text-text-primary/70 hover:text-accent transform transition-all duration-300 ease-in-out hover:scale-110"
                        >
                            <link.icon />
                        </a>
                    ))}
                </div>

                <div className="mt-16">
                    <a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent text-background font-bold py-3 px-8 rounded-full hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-accent/20"
                    >
                        View My Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;