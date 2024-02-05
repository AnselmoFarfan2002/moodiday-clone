import Product from "@/models/product";
import { useState } from "react";

export default function useProduct({ name }: { name: string }): {
  product: Product;
} {
  const [product, setProduct] = useState({
    name: "PLUGplay Exotics Vape Cartridge",
    brand: "PLUGPlay",
    category: "Vape Cartridge",
    creator: "Stephanie C.",
    states: ["Illinois", "Massachusetts"],
    review: {
      id: "edUmfKz6yEk1mWb007JIELEUDHWmuHYc9R027LUhiaFGk",
      title: "PLUGplay Exotics Vape Cartridge",
      feeling: "Loved",
      minutes: 0,
      seconds: 21,
    },
  });

  return { product };
}
