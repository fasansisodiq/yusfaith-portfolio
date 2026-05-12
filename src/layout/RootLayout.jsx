import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/srolltotop/ScrollToTop.jsx";
import { Toaster } from "@/components/ui/sonner";

const RootLayout = () => {
  const location = useLocation();
  const isHidden = location.pathname === "/";
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] text-white">
      <Header />
      <main className="w-full h-full max-w-container mx-auto px-6 sm:px-8 lg:px-10 2xl:px-0">
        <ScrollToTop />
        <Outlet />
        <Toaster />
      </main>
      <Footer isHidden={isHidden} />
    </div>
  );
};

export default RootLayout;
