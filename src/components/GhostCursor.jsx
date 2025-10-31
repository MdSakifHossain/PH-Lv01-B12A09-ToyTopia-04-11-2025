import React, { useEffect, useState } from "react";

const GhostCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /**
   *
   * un-comment this side effect if you think you are gonna need
   * that cursor at the literal center of the screen
   * else just leave it bro..
   *
   * at first i thought it would be cool.
   * but now it feels like it's kinda a little too much for me.
   *
   * besides, i don't know what the fuck is this code doing..
   * so i avoided it and now i made my own code..
   *
   */
  // useEffect(() => {
  //   const centre = () => setPosition({ x: innerWidth / 2, y: innerHeight / 2 });
  //   centre();
  //   addEventListener("resize", centre);
  //   return () => removeEventListener("resize", centre);
  // }, []);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  // it is the fully working version. do not touch it. It's sacred.
  return (
    <div
      className="fixed top-0 left-0 z-99999 pointer-events-none duration-300 ease-out delay-0"
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
