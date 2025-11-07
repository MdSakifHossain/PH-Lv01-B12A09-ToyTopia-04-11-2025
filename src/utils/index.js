// Fisher–Yates (Knuth) shuffle algorithm
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const detectMobile = ({ maxWidth = 768 } = {}) => {
  const ua = navigator.userAgent || "";
  const uaMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  const isNarrow =
    typeof window.matchMedia === "function" &&
    window.matchMedia(`(max-width: ${maxWidth}px)`).matches;

  return uaMobile || isNarrow;
};
