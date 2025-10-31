import React, { useEffect, useState } from "react";

const GhostCursor = () => {
  // Always start bottom-right
  const [position, setPosition] = useState({ x: 9000, y: 5000 });

  useEffect(() => {
    const handleMove = (e) => {
      // ONLY follow if it's a real mouse
      if (e.pointerType === "mouse") {
        setPosition({ x: e.clientX, y: e.clientY });
      }
      // Touch/pen? Do nothing → stays at 9999,9999
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-99999 pointer-events-none duration-300 ease-out"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="relative -top-3 -left-3 grid place-items-center">
        <span className="rounded-full bg-red-500 size-4" />
        <span className="absolute rounded-full bg-red-500 opacity-60 size-8 animate-ping" />
      </div>
    </div>
  );
};

export default GhostCursor;
