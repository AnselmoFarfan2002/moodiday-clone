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
          id="2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY"
          title="PLUGPlay Exotics Vape Cartridge"
          feeling="Mixed"
          minutes={0}
          seconds={10}
        />
      ))}
    />
  );
}
