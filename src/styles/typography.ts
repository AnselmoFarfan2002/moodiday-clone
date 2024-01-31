import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const josefin_sans = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const typography = {
  title: poppins.className,
  body: josefin_sans.className,
};
