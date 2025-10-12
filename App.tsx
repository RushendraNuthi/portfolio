import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
    return (
        <main className="text-text-primary bg-background">
            <ThemeToggle />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <ScrollProgressBar />
        </main>
    );
};

export default App;
