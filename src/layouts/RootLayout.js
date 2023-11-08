import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const [section, setSection] = useState("");

  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet context={{ section: section }} />
      </main>
      <Footer setSection={setSection} />
    </div>
  );
};
