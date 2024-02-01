import VideoMeta from "@/models/video-meta";
import Image from "next/image";
import Link from "next/link";

import PlayIcon from "@/assets/svg-icons/play-icon.svg";
import FeelingTag from "../../custom/tag";
import TextHelper from "../text-helper";

export default function VideoCard({
  id,
  feeling,
  title,
  minutes,
  seconds,
}: VideoMeta) {
  return (
    <div className="video-card">
      <div className={`relative`}>
        <div className="w-full rounded-3xl overflow-hidden aspect-[7/10] flex items-center">
          <Image
            className="w-full"
            src={`https://image.mux.com/${id}/thumbnail.jpg?time=0`}
            alt=""
            width={200}
            height={240}
          />
        </div>

        <FeelingTag feeling={feeling} className="absolute top-0 right-0 m-2" />

        <Link
          href={"/video/product-review/" + title}
          className={`backdrop-blur-sm bg-black/25 py-1 px-3 absolute bottom-0 right-0 text-white rounded-3xl shadow m-2 flex gap-1 align-middle`}
        >
          <Image src={PlayIcon} width={20} height={20} alt="" />
          <span className={`font-semibold`}>
            {minutes}:{seconds}
          </span>
        </Link>
      </div>
      <TextHelper>{title}</TextHelper>
    </div>
  );
}
