import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UIThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}


const UIThemeContext = createContext<UIThemeContextType | undefined>(undefined);

export const UIThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsDarkMode(storedTheme === 'dark');
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        } else {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDarkScheme);
            document.documentElement.classList.toggle('dark', prefersDarkScheme);
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <UIThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </UIThemeContext.Provider>
    );
};

export const useDarkMode = (): UIThemeContextType => {
    const context = useContext(UIThemeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a UIThemeProvider');
    }
    return context;
};
