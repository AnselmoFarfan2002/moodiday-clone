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
      id:
        name == "Chimuelo dance"
          ? "BFHIxBMtly01yBD7aTwflh33I24Tl6MWI9BtgV79eFIk"
          : "2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY",
      title: "PLUGplay Exotics Vape Cartridge",
      feeling: "Loved",
      minutes: 0,
      seconds: 21,
    },
  });

  return { product };
}
