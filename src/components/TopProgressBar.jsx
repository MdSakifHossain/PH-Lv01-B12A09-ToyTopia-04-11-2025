import React, { useEffect, useState } from "react";

const TopProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || window.scrollY;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const percent = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;
      setWidth(percent);
    };

    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1.5 bg-cyan-400 z-99999"
      style={{ width: `${width}%` }}
    ></div>
  );
};

export default TopProgressBar;
