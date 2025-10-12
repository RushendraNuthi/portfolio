import React, { useState, useEffect, useRef } from 'react';

const skillsData = [
    {
        category: 'Programming & Development',
        items: [
            { title: 'Languages', skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL', 'Bash'] },
            { title: 'Web Technologies', skills: ['HTML/CSS', 'Flask', 'REST APIs'] },
            { title: 'Version Control', skills: ['Git', 'GitHub'] },
        ],
    },
    {
        category: 'Cybersecurity & Analysis',
        items: [
            { title: 'Domains', skills: ['Threat Detection', 'Open-Source Intelligence (OSINT)', 'Indicator of Compromise (IOC) Analysis', 'Anomaly Detection', 'Digital Forensics', 'Network & Web Security'] },
            { title: 'Security Tools', skills: ['Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'Nessus', 'OWASP ZAP'] },
        ],
    },
    {
        category: 'Tools & Platforms',
        items: [
            { title: 'Cloud & DevOps', skills: ['Google Cloud Platform'] },
            { title: 'Development Environment', skills: ['VS Code', 'GitHub Copilot'] },
        ],
    },
];

const Skills: React.FC = () => {
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
            id="skills" 
            className={`bg-background-secondary py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-12 text-center">Core Competencies & Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((categoryGroup, index) => (
                        <div 
                            key={categoryGroup.category} 
                            className="bg-background/50 p-6 rounded-lg shadow-xl shadow-accent/10 border border-accent/30 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <h3 className="text-2xl font-bold text-accent mb-4 pb-4 border-b border-accent/20">{categoryGroup.category}</h3>
                            <div className="space-y-6 mt-4">
                                {categoryGroup.items.map((item) => (
                                    <div key={item.title}>
                                        <h4 className="font-semibold text-text-primary/90 mb-3">{item.title}:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill) => (
                                                <span key={skill} className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full border border-accent/20 hover:bg-accent hover:text-background transition-colors duration-200 cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;