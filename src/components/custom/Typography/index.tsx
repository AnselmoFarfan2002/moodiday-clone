import { typography } from "@/styles/typography";
import { ReactNode } from "react";

export default function Typography({
  variant = "body",
  className,
  children,
}: {
  variant?: string;
  className?: string;
  children?: ReactNode;
}) {
  if (!children) return;

  const styles: {
    [key: string]: {
      family: string;
      size: string;
      width?: string;
      color?: string;
    };
  } = {
    h1: {
      family: typography.title,
      size: "text-2xl",
      width: "font-black",
    },
    h4: {
      family: typography.title,
      size: "text-lg",
      width: "font-extrabold",
    },
    h5: {
      family: typography.title,
      size: "text-md",
      width: "font-extrabold",
    },
    h6: {
      family: typography.title,
      size: "text-sm",
      width: "font-extrabold",
    },
    body: {
      family: typography.body,
      size: "text-sm",
      color: "text-slate-600",
    },
    body2: {
      family: typography.body,
      size: "text-sm",
      width: "font-light",
      color: "text-slate-600",
    },
    title2: {
      family: typography.body,
      size: "text-sm",
      width: "font-semibold",
      color: "text-slate-600",
    },
  };

  return (
    <p
      className={`${styles[variant].family} ${styles[variant].size} ${styles[variant].width} ${styles[variant].color} ${className}`}
    >
      {children}
    </p>
  );
}
