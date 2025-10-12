tailwind.config = {
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                'background-secondary': 'var(--color-background-secondary)',
                'text-primary': 'var(--color-text-primary)',
                accent: 'var(--color-accent)',
            },
            keyframes: {
                float: {
                    '0%': { transform: 'translateY(20px) translateX(0px)', opacity: '0' },
                    '50%': { opacity: '0.7' },
                    '100%': { transform: 'translateY(-20px) translateX(5px)', opacity: '0' },
                },
                'float-alt': {
                    '0%': { transform: 'translateY(15px) translateX(10px)', opacity: '0.1' },
                    '50%': { opacity: '0.6' },
                    '100%': { transform: 'translateY(-25px) translateX(-10px)', opacity: '0' },
                },
                'float-subtle': {
                    '0%': { transform: 'translateY(10px)', opacity: '0.2' },
                    '50%': { opacity: '0.5' },
                    '100%': { transform: 'translateY(-10px)', opacity: '0' },
                },
                'fade-in-out': {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' },
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-alt': 'float-alt 8s ease-in-out infinite',
                'float-subtle': 'float-subtle 10s linear infinite',
                'fade-in-out': 'fade-in-out 5s ease-in-out infinite',
            }
        },
    },
};
