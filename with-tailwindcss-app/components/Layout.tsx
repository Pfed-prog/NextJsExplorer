import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import React, { FunctionComponent, ReactNode } from "react";

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
