import { FunctionComponent, ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface BaseLayoutProps {
  children?: ReactNode;
}

export const Layout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
