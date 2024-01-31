import VideoModal from "@/components/video-modal";

export default function ProductReview({
  params,
}: {
  params: { title: string };
}) {
  const { title } = params;

  return <VideoModal title={title} />;
}
