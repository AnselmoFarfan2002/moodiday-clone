import VideoMeta from "./video-meta";

export default interface Product {
  name: string;
  brand: string;
  category: string;
  dosis?: string;
  creator: string;
  states?: Array<string>;
  review: VideoMeta;
}
