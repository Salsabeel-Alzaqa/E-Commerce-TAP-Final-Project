import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
