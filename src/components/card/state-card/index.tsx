import { typography } from "@/styles/typography";
import Image from "next/image";
import TextHelper from "../text-helper";

export default function StateCard({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  return (
    <div className="state-card">
      <Image src={src} alt="name" />
      <TextHelper>{name}</TextHelper>
    </div>
  );
}
