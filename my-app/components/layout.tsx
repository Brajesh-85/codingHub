import Navbar from "./navbar";
import Footer from "./footer";
import Providers from "./providers";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Providers>{children}</Providers>
      <Footer />
    </>
  );
}
