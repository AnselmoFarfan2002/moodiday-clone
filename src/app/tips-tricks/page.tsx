import Image from "next/image";

import banner from "@/assets/banner/more-about-banner.png";
import VideoCarousel from "@/components/carousel/variant-video";

export default function Home() {
  return (
    <div>
      <Image src={banner} alt="Buy it - Try it - Review it" className="my-6" />

      <div className="flex flex-col gap-6">
        <VideoCarousel name="Concentrate guides" items={[]} />
        <VideoCarousel name="Cannabis 101" items={[]} />
        <VideoCarousel name="Flower topics" items={[]} />
        <VideoCarousel name="For newbies" items={[]} />
        <VideoCarousel name="Product terms to know" items={[]} />
        <VideoCarousel name="Accessories tips" items={[]} />
      </div>
    </div>
  );
}
