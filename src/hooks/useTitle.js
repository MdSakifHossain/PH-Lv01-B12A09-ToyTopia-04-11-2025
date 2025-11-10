import { useEffect } from "react";

export const useTitle = (title, appName = "ToyTopia") => {
  useEffect(() => {
    const cleanTitle =
      typeof title === "string" && title.trim() ? title.trim() : "";

    document.title = cleanTitle ? `${cleanTitle} | ${appName}` : appName;
  }, [title, appName]);
};
