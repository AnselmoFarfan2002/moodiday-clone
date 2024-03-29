"use client";

import { typography } from "@/styles/typography";
import Link from "next/link";
import HeaderEffect from "./effect";
import { usePathname } from "next/navigation";
import routes from "./routes";

export default function Header() {
  const container = "border rounded-3xl shadow my-auto text-slate-500";
  const display = "grid items-center whitespace-nowrap";
  const pageLinkClass = `px-3 h-fit py-1 ${container} ${display} font-normal`;
  const pathname = usePathname();

  const Links = () =>
    routes.map((route, i) => (
      <Link
        key={"route-" + i}
        className={`${pageLinkClass} flex-1 text-center ${
          pathname == route.pathname
            ? "bg-fuchsia-400 text-white"
            : "hover:bg-slate-100"
        } `}
        href={route.pathname}
      >
        {route.name}
      </Link>
    ));

  return (
    <>
      <HeaderEffect />
      <header className="px-6 fixed w-full bg-white z-10">
        <div className="pt-6 lg:py-6 flex gap-2 justify-between align-middle sm:flex-wrap max-w-6xl mx-auto">
          <Link href={"/home"} className="whitespace-nowrap">
            <h2
              className={`${typography.title} lg:text-[1.75em] md:text-[1.75em] sm:text-[1.5em] text-[1.25em] sm:font-black font-extrabold`}
            >
              <span className="text-[#105429]">moodi</span> day
            </h2>
          </Link>

          <div className="lg:flex gap-2 flex-wrap align-middle hidden shrink-0 flex-1 justify-center">
            <Links />
          </div>

          <div
            className={`${container} flex flex-row py-1 px-1 font-normal flex-1 lg:flex-none`}
          >
            <button className="icon-button text-slate-400" title="Search">
              <span className="material-symbols-outlined">search</span>
            </button>
            <input
              type="text"
              placeholder="Search for a product"
              className="focus:border-0 focus:outline-none flex-1 w-full"
            />
            <button className="icon-button text-slate-400" title="Clean">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <Link
            className={`bg-orange-600 hover:bg-orange-700 text-white md:font-bold sm:font-semibold font-medium ${pageLinkClass} whitespace-nowrap`}
            href={"/tips-tricks"}
          >
            Join us
          </Link>
        </div>

        <div className="lg:hidden flex gap-2 flex-nowrap align-middle sm:justify-center overflow-x-auto pt-3 pb-6">
          <Links />
        </div>
      </header>
    </>
  );
}
