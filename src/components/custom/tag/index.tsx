import { ReactNode } from "react";

export default function FeelingTag({
  className,
  feeling,
}: {
  className: string;
  feeling: string;
}) {
  const bgColors: { [key: string]: string } = {
    Loved: "bg-lime-500",
    Mixed: "bg-amber-500"
  };

  return (
    <span
      className={`${bgColors[feeling]} py-1 px-2 font-bold text-white rounded-3xl shadow ${className}`}
    >
      {feeling}
    </span>
  );
}
