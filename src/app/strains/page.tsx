import Image from "next/image";

import banner from "@/assets/banner/go-beyond-thc-banner.png";
import VideoCarousel from "@/components/carousel/variant-video";

export default function Home() {
  return (
    <div>
      <Image
        src={banner}
        alt="Buy it - Try it - Review it"
        className="my-6"
        width={1260}
        height={200}
        loading="eager"
      />

      <div className="flex flex-col gap-6">
        <VideoCarousel name="Browse sativa strains" items={[]} />
        <VideoCarousel name="Browse indica strains" items={[]} />
        <VideoCarousel name="Browse hybrid strains" items={[]} />
        <VideoCarousel name="Strains for completing tasks" items={[]} />
        <VideoCarousel name="Strains for sleep" items={[]} />
        <VideoCarousel name="Strains for creativity" items={[]} />
        <VideoCarousel name="Tips to consider for strains" items={[]} />
        <VideoCarousel name="Strains to boost your appetite" items={[]} />
        <VideoCarousel name="Focused and present" items={[]} />
      </div>
    </div>
  );
}
