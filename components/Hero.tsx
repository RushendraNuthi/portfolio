import React, { useState, useEffect, useRef } from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const scrollTicking = useRef(false);
    const mouseMoveTicking = useRef(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const name = "Rushendra Nuthi";

    useEffect(() => {
        // Trigger animation after a short delay to ensure rendering
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Initialize state on mount in case the page is reloaded at a scrolled position
        setOffsetY(window.pageYOffset);

        const handleScroll = () => {
            if (!scrollTicking.current) {
                window.requestAnimationFrame(() => {
                    setOffsetY(window.pageYOffset);
                    scrollTicking.current = false;
                });
                scrollTicking.current = true;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!mouseMoveTicking.current) {
                window.requestAnimationFrame(() => {
                    // Calculate offset from the center of the screen
                    setOffsetX(e.clientX - window.innerWidth / 2);
                    mouseMoveTicking.current = false;
                });
                mouseMoveTicking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Calculate a ratio from 0 to 1 based on scroll position within the viewport
    const scrollRatio = Math.min(offsetY / (window.innerHeight * 0.8), 1);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Deep Background Layer - moves slowest */}
            <div
                className="absolute inset-0 z-0"
                style={{ transform: `translateY(${offsetY * 0.15}px) translateX(${offsetX * 0.005}px)` }}
            >
                <BackgroundAnimation density="low" />
            </div>

            {/* Mid Background Animation Layer - moves slower than content */}
            <div
                className="absolute inset-0 z-10"
                style={{ transform: `translateY(${offsetY * 0.3}px) translateX(${offsetX * 0.015}px)` }}
            >
                <BackgroundAnimation />
            </div>

            {/* Blur Layer for Depth */}
            <div className="absolute inset-0 z-20 backdrop-blur-sm"></div>

            {/* Content Layer - moves faster than background */}
            <div
                className="relative z-30 text-center p-4"
                style={{
                    transform: `translateY(${offsetY * 0.5}px) translateX(${offsetX * 0.025}px)`,
                }}
            >
                <p
                    className="mb-2 text-xl md:text-2xl font-light tracking-widest text-text-primary transition-all duration-700 ease-out"
                    style={{
                        opacity: isLoaded ? 1 - scrollRatio * 1.5 : 0,
                        transform: isLoaded ? `translateY(${-scrollRatio * 50}px)` : 'translateY(10px)',
                        transitionDelay: '100ms',
                        willChange: 'transform, opacity',
                    }}
                >
                    Hello, I'm
                </p>
                <h1 
                    className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-accent drop-shadow-lg flex justify-center"
                    style={{
                        transform: `scale(${1 - scrollRatio * 0.1})`,
                        opacity: 1 - scrollRatio,
                        willChange: 'transform, opacity',
                    }}
                >
                    {name.split('').map((char, index) => (
                        <span
                            key={index}
                            className={`transform transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${200 + index * 50}ms` }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
                <p 
                    className="mt-4 text-xl md:text-2xl font-light tracking-widest text-text-primary transition-all duration-700 ease-out"
                    style={{
                        opacity: isLoaded ? 1 - scrollRatio * 1.2 : 0,
                        transform: isLoaded ? `translateY(${scrollRatio * 50}px)` : 'translateY(10px)',
                        transitionDelay: `${200 + name.length * 50 + 200}ms`,
                        willChange: 'transform, opacity',
                    }}
                >
                    A Cyber Security Student
                </p>
            </div>
            
            {/* Vignette/Overlay Layer - stationary */}
            <div className="absolute inset-0 bg-background/40 z-20"></div>

        </section>
    );
};

export default Hero;
