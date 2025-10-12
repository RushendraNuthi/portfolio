import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        if (scrollHeight > 0) {
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(progress);
        } else {
            // Handle cases where the content is not scrollable, reset to 0.
            setScrollProgress(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Run once on mount to set initial position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full h-1 bg-background-secondary/50 z-50" aria-hidden="true">
            <div 
                className="h-full bg-accent transition-all duration-100 ease-linear"
                style={{ width: `${scrollProgress}%` }}
                role="progressbar"
                aria-valuenow={scrollProgress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Page scroll progress"
            ></div>
        </div>
    );
};

export default ScrollProgressBar;