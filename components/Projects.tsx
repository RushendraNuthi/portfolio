import React, { useState, useEffect, useRef } from 'react';

const projectsData = [
    {
        title: 'Cognito: Automated Threat Intelligence Platform',
        description: 'A web-based security tool designed to automate the process of risk assessment for various digital indicators. It centralizes intelligence from multiple industry-standard APIs to provide a quick, consolidated security score.',
        contributions: [
            'Engineered a Flask-based application that integrates <strong>VirusTotal, AbuseIPDB, and IPQualityScore APIs</strong> to provide automated risk scoring for URLs, IPs, hashes, and email headers.',
            'Dramatically reduced manual analysis and triage time by <strong>60%</strong>, significantly improving the efficiency and accuracy of threat classification.',
            'Implemented solutions using <strong>Large Language Models (LLMs)</strong> and prompt engineering to automatically generate analysis modules and threat reports, boosting the development pace by <strong>40%</strong>.',
        ],
        link: { url: 'https://github.com/RushendraNuthi/Cognito', text: 'View on GitHub' }
    },
    {
        title: 'AIDFAS: Anomaly and Intrusion Detection & Forensic Analysis System',
        description: 'A comprehensive security system built to perform real-time threat detection and provide forensic analysis capabilities. It uses machine learning for proactive defense and aggregates data for in-depth investigation.',
        contributions: [
            'Implemented a real-time anomaly detection system using the <strong>Isolation Forest</strong> algorithm and a phishing email classifier with <strong>TF-IDF and Logistic Regression</strong>, achieving an accuracy rate of over <strong>92%</strong>.',
            'Developed and rolled out a user-friendly alert dashboard and forensic timeline using <strong>Flask and Bootstrap 5</strong>, integrating data from <strong>AbuseIPDB and AlienVault OTX APIs</strong>.',
            'Leveraged <strong>LLMs (Ollama, Kimi-K2)</strong> and AI-powered automation to accelerate the development lifecycle by <strong>60%</strong>.',
            'Designed and established <strong>RESTful APIs</strong> to aggregate and integrate multi-source forensic data, including logs, network packets, memory dumps, and emails.',
        ],
        link: { url: 'https://github.com/RushendraNuthi/AIDFAS', text: 'View on GitHub' }
    },
    {
        title: 'Chrome Cookies Extractor',
        description: 'A Python-based utility for cybersecurity professionals and forensic analysts to extract and decrypt sensitive cookie data from the Google Chrome browser on Windows.',
        contributions: [
            'Developed a script in <strong>Python</strong> to locate, extract, and parse the Chrome cookies database file.',
            'Implemented decryption logic using the <strong>AES</strong> cipher and the <strong>Windows CryptProtectData API</strong> to successfully decrypt protected cookie values.',
            'Engineered the tool to extract comprehensive details for each cookie, including host, name, value, creation date, and expiration.',
            'Formatted the extracted, decrypted data into a human-readable text file for straightforward analysis and reporting.',
        ],
        link: { url: 'https://github.com/RushendraNuthi/Chrome_Cookies_Extractor', text: 'View on GitHub' }
    },
    {
        title: 'Clickjacking Scanner',
        description: 'A command-line tool designed for developers and security testers to quickly identify potential Clickjacking vulnerabilities in web applications by inspecting HTTP headers.',
        contributions: [
            'Created a lightweight and efficient vulnerability scanner using <strong>Python</strong>.',
            'The tool focuses on detecting the vulnerability by analyzing the <code>X-Frame-Options</code> HTTP response header to check for misconfigurations.',
            'Included an option to log the full, verbose response headers, allowing for a more detailed manual analysis of security configurations.',
            'Designed with a simple and intuitive command-line interface for ease of use in automated scripts or manual testing sessions.',
        ],
        link: { url: 'https://github.com/RushendraNuthi/Clickjacking_Scanner', text: 'View on GitHub' }
    },
    {
        title: 'Custom Netcat Module',
        description: 'A versatile network utility built in Python that emulates the functionality of Netcat. It provides a flexible tool for network debugging, testing, and remote administration.',
        contributions: [
            'Built a dual-mode tool that can operate as both a <strong>TCP client</strong> to connect to remote servers and as a <strong>listening server</strong> to accept incoming connections.',
            'Integrated advanced functionality for remote access, including <strong>command execution</strong>, <strong>file uploads</strong>, and an interactive command shell.',
            'Engineered robust <strong>error handling and graceful shutdown</strong> logic to ensure stable and reliable network connections.',
            'Designed the module to be easily extensible for custom networking tasks and security testing scenarios.',
        ],
        link: { url: 'https://github.com/RushendraNuthi/Custom_Netcat_Module', text: 'View on GitHub' }
    },
];

const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-6-13.5v13.5" />
    </svg>
);

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
    </svg>
);

const Projects: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [textIsVisible, setTextIsVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const currentProject = projectsData[activeIndex];
    
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

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (isPlaying && !isHovered && isVisible) {
            intervalRef.current = window.setInterval(() => {
                handleNext();
            }, 6000); // Auto-play interval: 6 seconds
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying, isHovered, activeIndex, isVisible]);
    
    const handleNavigation = (newIndex: number) => {
        if (!textIsVisible) return; // Prevent multiple clicks during transition
        
        setTextIsVisible(false);

        setTimeout(() => {
            setActiveIndex(newIndex);
            setTextIsVisible(true);
        }, 300); // Corresponds to text fade duration
    };

    const handlePrev = () => {
        const newIndex = (activeIndex - 1 + projectsData.length) % projectsData.length;
        handleNavigation(newIndex);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % projectsData.length;
        handleNavigation(newIndex);
    };

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const styledContributions = (html: string) => {
        const codeStyled = html.replace(/<code>/g, '<code class="bg-background/80 text-accent rounded px-1.5 py-0.5 font-mono text-sm">');
        const strongStyled = codeStyled.replace(/<strong>/g, '<strong class="text-accent font-semibold">');
        return strongStyled;
    };

    return (
        <section 
            ref={sectionRef}
            id="projects" 
            className={`bg-background py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div 
                    className="bg-background-secondary/60 p-6 sm:p-8 rounded-lg shadow-xl shadow-accent/10 border border-accent/20 flex flex-col"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    
                    <div className="relative flex-grow flex items-center justify-center min-h-[32rem]">
                        <div className={`transition-all duration-300 ease-in-out text-center max-w-3xl ${textIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                            <h3 className="text-3xl font-bold text-accent mb-4">{currentProject.title}</h3>
                            <p className="mb-6 leading-relaxed text-text-primary/90">{currentProject.description}</p>
                            <h4 className="text-xl font-semibold mb-3 text-text-primary">Key Contributions:</h4>
                            <ul className="list-disc list-inside space-y-2 text-left">
                                {currentProject.contributions.map((item, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{ __html: styledContributions(item) }} />
                                ))}
                            </ul>
                             {currentProject.link && (
                                <div className="mt-8">
                                    <a
                                        href={currentProject.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-accent text-background font-bold py-3 px-8 rounded-full hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-accent/20"
                                    >
                                        {currentProject.link.text}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-accent/20">
                        <div className="flex items-center justify-between">
                            <div className="text-lg font-semibold">
                                <span className="text-accent">{String(activeIndex + 1).padStart(2, '0')}</span>
                                <span className="text-text-primary/50"> / {String(projectsData.length).padStart(2, '0')}</span>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={togglePlay}
                                    aria-label={isPlaying ? "Pause auto-play" : "Start auto-play"}
                                    className="p-3 rounded-full border border-accent/30 text-text-primary hover:bg-accent hover:text-background transition-colors duration-200"
                                >
                                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                                </button>
                                <button 
                                    onClick={handlePrev} 
                                    disabled={!textIsVisible}
                                    aria-label="Previous project"
                                    className="p-3 rounded-full border border-accent/30 text-text-primary hover:bg-accent hover:text-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                    <ArrowLeft />
                                </button>
                                <button 
                                    onClick={handleNext} 
                                    disabled={!textIsVisible}
                                    aria-label="Next project"
                                    className="p-3 rounded-full border border-accent/30 text-text-primary hover:bg-accent hover:text-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-accent/20 h-0.5 mt-4 rounded-full overflow-hidden">
                            <div 
                                className="bg-accent h-0.5 rounded-full transition-all duration-300 ease-in-out" 
                                style={{ width: `${((activeIndex + 1) / projectsData.length) * 100}%` }}
                                role="progressbar"
                                aria-valuenow={activeIndex + 1}
                                aria-valuemin={1}
                                aria-valuemax={projectsData.length}
                                aria-label="Projects progress"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;