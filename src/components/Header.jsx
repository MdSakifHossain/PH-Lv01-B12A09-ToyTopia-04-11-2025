import React from "react";

const Header = () => {
  return (
    <header className="font-outfit">
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <img className="size-12" src="/vite.svg" alt="Logo" />
          <h3 className="text-4xl">ToyTopia</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
