import { typography } from "@/styles/typography";
import Image from "next/image";
import TextHelper from "../text-helper";
import { load } from "rudder-sdk-js";

export default function StateCard({
  src,
  name,
  loading,
}: {
  src: string;
  name: string;
  loading?: "lazy" | "eager" | undefined;
}) {
  return (
    <div className="state-card">
      <Image src={src} alt="name" className="w-full" loading={loading} />
      <TextHelper>{name}</TextHelper>
    </div>
  );
}
