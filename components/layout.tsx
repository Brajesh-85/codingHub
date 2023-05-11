import Navbar from "./navbar";
import Footer from "./footer";
import Providers from "./providers";

const Layout = (props: any) => {
  return (
    <>
      <div className="container2 m-auto">
        <Navbar />
        <Providers>
          <div>{props.children}</div>
        </Providers>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
