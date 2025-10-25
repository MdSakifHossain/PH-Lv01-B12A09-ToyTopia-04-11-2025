import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import { Toaster } from "sonner";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

import { InstalledContext } from "./contexts/InstalledContext";

const App = () => {
  const navigation = useNavigation();
  const [globalInstalledList, setGlobalInstalledList] = useState(() => {
    try {
      const saved = localStorage.getItem("installedApps");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "installedApps",
        JSON.stringify(globalInstalledList)
      );
    } catch (e) {
      console.error("Failed to save installed apps:", e);
    }
  }, [globalInstalledList]);

  return (
    <>
      <InstalledContext value={[globalInstalledList, setGlobalInstalledList]}>
        <Toaster position="top-right" richColors />
        {navigation.state !== "idle" ? (
          <LoadingSpinner />
        ) : (
          <div className="min-h-svh bg-bg font-inter flex flex-col items-start">
            <Header />
            <main className="flex-1 w-full flex flex-col items-start">
              <Outlet />
            </main>
            <Footer />
          </div>
        )}
      </InstalledContext>
    </>
  );
};

export default App;
