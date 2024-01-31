"use client";

import { useEffect } from "react";

export default function HeaderEffect() {
  useEffect(() => {
    document.querySelector("header")?.classList.remove("shadow-md");

    const handleScroll = () => {
      if (window.scrollY == 0)
        document.querySelector("header")?.classList.remove("shadow-md");
      else document.querySelector("header")?.classList.add("shadow-md");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <></>;
}
