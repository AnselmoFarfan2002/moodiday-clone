"use client";

import useProduct from "@/hooks/useProduct";
import MuxPlayer from "@mux/mux-player-react";
import { useRouter } from "next/navigation";
import FeelingTag from "../custom/tag";

import "@mux/mux-player/themes/classic";

export default function VideoModal({ title }: { title: string }) {
  const { product } = useProduct({ name: title });
  const { review } = product;
  const router = useRouter();
  const onClose = () => router.back();

  const LinePropValue = ({ prop, value }: { prop: string; value: string }) => (
    <p>
      <span className="font-semibold">{prop}</span>: {value}
    </p>
  );

  return (
    <article className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-slate-500/25 z-20 flex justify-center items-center">
      <div className="w-full h-full fixed" onClick={onClose} />
      <div
        className={`h-full w-full bg-white z-30 overflow-scroll
        sm:flex sm:max-h-[600px] sm:max-w-[800px] sm:overflow-hidden md:rounded-2xl`}
      >
        <section className="flex justify-center bg-black w-full">
          <MuxPlayer
            theme="classic"
            playbackId={review.id}
            startTime={0}
            style={{ height: "600px", width: "337px" }}
            autoPlay={true}
          />
        </section>
        <section className="p-8 flex flex-col gap-4 text-sm font-light text-slate-600">
          <div className="flex justify-between">
            <FeelingTag feeling={review.feeling} className="" />
            <button className="icon-button" onClick={onClose}>
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>

          <LinePropValue prop="Product name" value={review.title} />
          <LinePropValue prop="Product brand" value={product.brand} />
          <LinePropValue prop="Category" value={product.category} />
          <LinePropValue
            prop="Moodi Day Creator Credits"
            value={product.creator}
          />
          <LinePropValue
            prop="State Availability"
            value={product.states?.join(", ") ?? ""}
          />

          <p className="italic">
            This review was sourced from our budtender creator community and is
            not a substitute for professional medical advice. Seek the advice of
            a health professional before using cannabis for a medical condition.
            Always consume responsibly.
          </p>
        </section>
      </div>
    </article>
  );
}
