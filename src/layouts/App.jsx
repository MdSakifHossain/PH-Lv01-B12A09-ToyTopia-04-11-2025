import React from "react";
import { Toaster } from "sonner";
import { Outlet, useNavigation } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GhostCursor from "../components/GhostCursor";

const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <Toaster />
      <GhostCursor />
      {navigation.state !== "idle" ? (
        <LoadingSpinner />
      ) : (
        // this is the main div, top guy. the big bro of this everythig..
        <div className="font-display-mono min-h-svh h-auto body text-gray-100 flex flex-col gap-4 lg:gap-12">
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
