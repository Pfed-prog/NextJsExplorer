import Navbar from "./Navbar";
import Footer from "./Footer";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
