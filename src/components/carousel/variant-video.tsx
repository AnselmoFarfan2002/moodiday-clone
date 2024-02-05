"use client";

import VideoMeta from "@/models/video-meta";
import Carousel from ".";
import { randomUUID } from "crypto";
import { v4 } from "uuid";
import VideoCard from "../card/video-card";

export default function VideoCarousel({
  name,
  items,
  autoplay = false,
}: {
  name: string;
  items: Array<VideoMeta>;
  autoplay?: boolean;
}) {
  return (
    <Carousel
      name={name}
      autoplay={autoplay}
      items={Array.from({ length: 10 }, () => (
        <VideoCard
          key={v4()}
          id="edUmfKz6yEk1mWb007JIELEUDHWmuHYc9R027LUhiaFGk"
          title="Wana Classic Watermelon Hybrid Gummies"
          feeling="Enyojed"
          minutes={1}
          seconds={24}
        />
      ))}
    />
  );
}
