"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

export default function CustomArrow({
  style,
  pos,
  srcSVG,
  onClick,
}: {
  style?: object;
  pos?: string;
  srcSVG: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <button
      type="button"
      className={
        "bg-slate-100 absolute translate-y-[-50%] top-[50%] p-3 rounded-full border shadow-lg hover:bg-slate-200 z-[1] " +
        pos
      }
      onClick={onClick}
    >
      <Image
        src={srcSVG}
        width={10}
        height={10}
        alt="prev"
        className="w-50 aspect-square"
      />
      <span className="sr-only">Next</span>
    </button>
  );
}
