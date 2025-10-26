import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-display-mono min-h-svh flex flex-col gap-12">
      <Header />

      <main className="border container mx-auto flex-1">
        <img className="size-32" src="/vite.svg" alt="logo" />
        <h3 className="text-5xl">App.jsx</h3>
      </main>

      <Footer />
    </div>
  );
};

export default App;
