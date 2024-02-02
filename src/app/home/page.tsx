import { typography } from "@/styles/typography";
import Image from "next/image";

import banner from "@/assets/banner/Moodi Day HB.svg";
import VideoCarousel from "@/components/carousel/variant-video";
import Carousel from "@/components/carousel";
import statesSources from "./_states";
import StateCard from "@/components/card/state-card";
import { v4 } from "uuid";

export default function Home() {
  return (
    <div>
      <h1
        className={`${typography.title} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-1 md:mb-3`}
      >
        Try More Plants
      </h1>
      <h1
        className={`${typography.body} text-sm md:text-xl lg:text-2xl text-center text-slate-500 max-w-[90%] mx-auto`}
      >
        Share honest reviews about cannabis brands, earn rewards
      </h1>

      <Image
        src={banner}
        alt="Buy it - Try it - Review it"
        className="my-6"
        width={1260}
        height={200}
        loading="eager"
      />

      <div className="flex flex-col gap-6">
        <VideoCarousel name="Trending reviews" items={[]} />
        <VideoCarousel name="Popular strains" items={[]} />
        <Carousel
          className="carousel-states"
          name="Browse products by state"
          items={statesSources.map((state, i) => (
            <StateCard {...state} key={v4()} />
          ))}
          autoplay
          infinite
          dots
        />
        <VideoCarousel name="Concentrates 101" items={[]} />
        <VideoCarousel name="Popular smoking tools & devices" items={[]} />
      </div>
    </div>
  );
}
