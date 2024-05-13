import { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  readonly children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
