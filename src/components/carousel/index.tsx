"use client";

import Slider from "react-slick";
import CustomArrow from "./arrows";

import ArrowLeft from "@/assets/svg-icons/arrow-left.svg";
import ArrowRight from "@/assets/svg-icons/arrow-right.svg";
import { ReactNode } from "react";
import Typography from "../custom/Typography";
import FeelingTag from "../custom/tag";

export default function Carousel({
  name,
  items,
  autoplay = false,
  infinite = false,
  dots = false,
  className = "",
}: {
  className?: string;
  name: string;
  items: Array<ReactNode>;
  autoplay?: boolean;
  infinite?: boolean;
  dots?: boolean;
}) {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    draggable: false,
    nextArrow: <CustomArrow srcSVG={ArrowRight} pos="right-[-20px]" />,
    prevArrow: <CustomArrow srcSVG={ArrowLeft} pos="left-[-20px]" />,
    autoplaySpeed: 2000,
    autoplay,
    infinite,
    dots,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={className}>
      <div className="flex justify-between mb-4">
        <Typography variant="h4">{name}</Typography>

        <button>
          <FeelingTag feeling="View All" className="bg-fuchsia-400 hover:bg-fuchsia-500" />
        </button>
      </div>
      <Slider {...settings}>{items}</Slider>
    </div>
  );
}
