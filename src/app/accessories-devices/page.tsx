import Image from "next/image";

import banner from "@/assets/banner/tools-loved-by-community-banner.png";
import VideoCarousel from "@/components/carousel/variant-video";

export default function Home() {
  return (
    <div>
      <Image src={banner} alt="Buy it - Try it - Review it" className="my-6" />

      <div className="flex flex-col gap-6">
        <VideoCarousel name="Dry herb vaporizer reviews" items={[]} />
        <VideoCarousel name="Concentrate vaporizer reviews" items={[]} />
        <VideoCarousel name="Essential flower tools" items={[]} />
        <VideoCarousel name="Glass piece & infuser reviews" items={[]} />
      </div>
    </div>
  );
}
