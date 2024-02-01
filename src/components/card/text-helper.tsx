import { typography } from "@/styles/typography";
import { ReactNode } from "react";

export default function TextHelper({ children }: { children: ReactNode }) {
  return (
    <p
      className={`${typography.title} text-[.65em] font-bold text-slate-500 py-2`}
    >
      {children}
    </p>
  );
}
