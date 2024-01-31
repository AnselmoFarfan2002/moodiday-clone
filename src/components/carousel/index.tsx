import { ReactNode } from "react";
import ArrowLeft from "@/assets/svg-icons/arrow-left.svg";
import ArrowRight from "@/assets/svg-icons/arrow-right.svg";
import Image from "next/image";

export default function Carousel({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full" data-carousel="static">
      <div className="relative flex gap-3 overflow-auto  sm:overflow-x-hidden px-3">
        {children}
      </div>

      <div className="hidden sm:block">
        <button
          type="button"
          className="bg-slate-100 absolute translate-y-[-50%] top-[50%] p-3 rounded-full border shadow-lg hover:bg-slate-200"
        >
          <Image
            src={ArrowLeft}
            width={10}
            height={10}
            alt="prev"
            className="w-50 aspect-square"
          />
          <span>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="bg-slate-100 absolute translate-y-[-50%] top-[50%] right-0 p-3 rounded-full border shadow-lg hover:bg-slate-200"
        >
          <Image
            src={ArrowRight}
            width={10}
            height={10}
            alt="prev"
            className="w-50 aspect-square"
          />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}
