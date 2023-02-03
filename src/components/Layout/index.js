import { useRouter } from "next/router";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-[#0A061D]  relative h-screen max-w-[100vw] overflow-x-hidden">
      {router.pathname !== "/login" && <Header />}
      <div className="z-50">{children}</div>
      {router.pathname !== "/login" && <Footer />}
    </div>
  );
};

export default Layout;
