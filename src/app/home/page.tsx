import { typography } from "@/styles/typography";
import Image from "next/image";

import banner from "@/assets/Moodi Day HB.svg";

export default function Home() {
  return (
    <div style={{ height: "150vh" }}>
      <h1
        className={`${typography.title} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-1 md:mb-3`}
      >
        Try More Plants
      </h1>
      <h1 className={`${typography.body} text-sm md:text-xl lg:text-2xl text-center text-slate-500 max-w-[90%] mx-auto`}>
        Share honest reviews about cannabis brands, earn rewards
      </h1>

      <Image src={banner} alt="Buy it - Try it - Review it" className="my-6" />
    </div>
  );
}
