import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="font-display-mono min-h-svh flex flex-col gap-12">
      <Header />

      <main className="border container mx-auto flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
