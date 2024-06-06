import { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useDarkMode } from "@/hooks/theme/UIThemeContext";

interface LayoutProps {
    readonly children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { isDarkMode } = useDarkMode();
    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <div className="bg-sky-200 dark:bg-black/90 dark:text-white  min-h-screen">
                <div style={{ minHeight: "90vh" }}>
                    <Navbar />
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </div>
    );
}
