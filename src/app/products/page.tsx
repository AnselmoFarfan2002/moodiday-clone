import { typography } from "@/styles/typography";
import Image from "next/image";

import banner from "@/assets/banner/rating-products-banner.png";
import VideoCarousel from "@/components/carousel/variant-video";
import Carousel from "@/components/carousel";
import StateCard from "@/components/card/state-card";
import { v4 } from "uuid";
import statesSources from "@/app/home/_states";

export default function Home() {
  return (
    <div>
      <Image src={banner} alt="Buy it - Try it - Review it" className="my-6" />

      <div className="flex flex-col gap-6">
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
        <VideoCarousel name="Concentrate reviews" items={[]} />
        <VideoCarousel name="Gummy reviews" items={[]} />
        <VideoCarousel name="Pills, mints & strips reviews" items={[]} />
        <VideoCarousel name="Regular pre roll reviews" items={[]} />
        <VideoCarousel name="Distillate vapes" items={[]} />
        <VideoCarousel name="Beverage reviews" items={[]} />
        <VideoCarousel name="Dispensary hauls" items={[]} />
        <VideoCarousel name="Flower reviews" items={[]} />
        <VideoCarousel name="Live resin vape reviews" items={[]} />
        <VideoCarousel name="Infused pre roll reviews" items={[]} />
        <VideoCarousel name="Candy and snack reviews" items={[]} />
      </div>
    </div>
  );
}
