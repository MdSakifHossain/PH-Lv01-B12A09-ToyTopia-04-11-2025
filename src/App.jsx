import React from "react";
import { Toaster } from "sonner";
import { Outlet, useNavigation } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <>
      <Toaster />
      {navigation.state !== "idle" ? (
        <LoadingSpinner />
      ) : (
        <div className="font-display-mono min-h-svh body text-gray-100 flex flex-col gap-4 lg:gap-12">
          <Header />

          <main className="container mx-auto flex-1 flex flex-col px-4">
            <Outlet />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
