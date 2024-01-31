import VideoModal from "@/components/video-modal";

export default function Page({ params }: { params: { title: string } }) {
  const { title } = params;

  return <VideoModal title={decodeURI(title)} />;
}
