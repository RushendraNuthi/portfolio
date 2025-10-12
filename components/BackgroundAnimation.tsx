import React, { useMemo } from 'react';

const SYMBOLS = [
    '0101', '🔒', '🔑', '🛡️', 'TLS', 'AES-256', 'VPN', 'authN', 'authZ', 'firewall', 'encrypt', 'decrypt', 'malware', 'pentest', 'XSS', 'CSRF'
];

const ANIMATION_CLASSES = ['animate-float', 'animate-float-alt', 'animate-float-subtle'];
// This will now use the text-accent class which pulls from our CSS variables
const COLORS = ['text-accent/30', 'text-accent/40', 'text-accent/20'];

interface SymbolConfig {
    id: number;
    symbol: string;
    className: string;
    style: React.CSSProperties;
}

interface BackgroundAnimationProps {
  density?: 'low' | 'high';
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ density = 'high' }) => {
    const symbols = useMemo<SymbolConfig[]>(() => {
        const count = density === 'high' ? 40 : 25;
        const sizeMultiplier = density === 'high' ? 1.5 : 1.2;
        const opacityClass = density === 'high' ? '' : 'opacity-75';

        return Array.from({ length: count }).map((_, i) => {
            const colorClass = COLORS[Math.floor(Math.random() * COLORS.length)];
            const animationClass = ANIMATION_CLASSES[Math.floor(Math.random() * ANIMATION_CLASSES.length)];
            
            return {
                id: i,
                symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
                className: `absolute ${colorClass} ${animationClass} ${opacityClass}`,
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * sizeMultiplier + 0.5}rem`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 8 + 6}s`,
                },
            };
        });
    }, [density]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {symbols.map(({ id, symbol, style, className }) => (
                <span
                    key={id}
                    className={className}
                    style={style}
                    aria-hidden="true"
                >
                    {symbol}
                </span>
            ))}
        </div>
    );
};

export default BackgroundAnimation;