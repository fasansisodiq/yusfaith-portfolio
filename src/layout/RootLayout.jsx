import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/srolltotop/ScrollToTop.jsx";

const RootLayout = () => {
  const location = useLocation();
  const isHidden = location.pathname === "/";
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="w-full h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 2xl:px-0">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer isHidden={isHidden} />
    </div>
  );
};

export default RootLayout;
