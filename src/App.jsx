import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="font-display-mono min-h-svh body text-gray-100 flex flex-col gap-4 lg:gap-12">
      <Header />

      <main className="container mx-auto flex-1 flex flex-col px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
