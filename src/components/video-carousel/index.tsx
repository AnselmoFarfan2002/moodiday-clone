import { typography } from "@/styles/typography";
import VideoCard from "../video-card";
import VideoMeta from "@/models/video-meta";
import Carousel from "../carousel";

export default function VideoCarousel({
  name,
  items,
}: {
  name: string;
  items: Array<VideoMeta>;
}) {
  return (
    <div>
      <h3 className={`${typography.title} font-extrabold text-lg mb-4`}>
        {name}
      </h3>
      <Carousel>
        <VideoCard
          id="2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY"
          title="PLUGplay Exotics Vape Cartridge"
          feeling="Loved"
          minutes={0}
          seconds={21}
        />
        <VideoCard
          id="2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY"
          title="PLUGplay Exotics Vape Cartridge"
          feeling="Loved"
          minutes={0}
          seconds={21}
        />
        <VideoCard
          id="2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY"
          title="PLUGplay Exotics Vape Cartridge"
          feeling="Loved"
          minutes={0}
          seconds={21}
        />
        <VideoCard
          id="2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY"
          title="PLUGplay Exotics Vape Cartridge"
          feeling="Loved"
          minutes={0}
          seconds={21}
        />
        <VideoCard
          id="2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY"
          title="PLUGplay Exotics Vape Cartridge"
          feeling="Loved"
          minutes={0}
          seconds={21}
        />
      </Carousel>
      <div className="flex gap-4 "></div>
    </div>
  );
}
