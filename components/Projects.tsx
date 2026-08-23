import React, { useState, useEffect, useRef } from "react";
import data from "../data/portfolio.json";

const projectsData = data.projects;

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25v13.5m-6-13.5v13.5"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
    />
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
    const newIndex =
      (activeIndex - 1 + projectsData.length) % projectsData.length;
    handleNavigation(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % projectsData.length;
    handleNavigation(newIndex);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const styledContributions = (html: string) => {
    const codeStyled = html.replace(
      /<code>/g,
      '<code class="bg-background/80 text-accent rounded px-1.5 py-0.5 font-mono text-sm">'
    );
    const strongStyled = codeStyled.replace(
      /<strong>/g,
      '<strong class="text-accent font-semibold">'
    );
    return strongStyled;
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`bg-background py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div
          className="bg-background-secondary/60 p-6 sm:p-8 rounded-lg shadow-xl shadow-accent/10 border border-accent/20 flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative flex-grow flex items-center justify-center min-h-[32rem]">
            <div
              className={`transition-all duration-300 ease-in-out text-center max-w-3xl ${
                textIsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              {currentProject.image && (
                <img
                  src={currentProject.image}
                  alt={`${currentProject.title} preview`}
                  loading="lazy"
                  className="w-full max-w-xl mx-auto rounded-lg border border-accent/20 shadow-lg mb-6 object-cover object-top"
                />
              )}
              <h3 className="text-3xl font-bold text-accent mb-2">
                {currentProject.title}
              </h3>
              {currentProject.status && (
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-wide text-accent border border-accent/40 rounded-full px-3 py-1">
                  {currentProject.status}
                </span>
              )}
              <p className="mb-4 leading-relaxed text-text-primary/90">
                {currentProject.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {currentProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-text-primary">
                Key Contributions:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-left">
                {currentProject.contributions.map((item, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{
                      __html: styledContributions(item),
                    }}
                  />
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {currentProject.repo && (
                  <a
                    href={currentProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-background font-bold py-3 px-8 rounded-full hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-accent/20"
                  >
                    View on GitHub
                  </a>
                )}
                {currentProject.demo && (
                  <a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-accent text-accent font-bold py-3 px-8 rounded-full hover:bg-accent hover:text-background transition-colors duration-300 ease-in-out"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-accent/20">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">
                <span className="text-accent">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-text-primary/50">
                  {" "}
                  / {String(projectsData.length).padStart(2, "0")}
                </span>
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
                style={{
                  width: `${((activeIndex + 1) / projectsData.length) * 100}%`,
                }}
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
