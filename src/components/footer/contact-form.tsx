import statesSources from "@/app/home/_states";
import Typography from "../custom/Typography";
import FeelingTag from "../custom/tag";
import Link from "next/link";
import { v4 } from "uuid";

export default function ContactForm() {
  const inputClass =
    "w-full border p-3  focus:outline-8 focus:outline-sky-400 transition-none";
  return (
    <form className="grid grid-cols-12 gap-x-8 gap-y-4 my-4">
      <fieldset className="col-span-6">
        <label className="w-full">
          <Typography className="font-semibold mb-2">Email*</Typography>
          <input className={inputClass} />
        </label>
      </fieldset>
      <fieldset className="col-span-6">
        <label className="w-full">
          <Typography className="font-semibold mb-2">
            State you live in*
          </Typography>
          <select className={inputClass} defaultValue={""}>
            <option value={""} className="text-slate-400">
              Please select
            </option>
            {statesSources.map((state) => (
              <option key={v4()}>{state.name}</option>
            ))}
          </select>
        </label>
      </fieldset>
      <fieldset className="col-span-12">
        <label className="w-full">
          <Typography className="font-semibold mb-2">
            Brand(s) you'd like us to review*
          </Typography>
        </label>
        <input className={inputClass} />
      </fieldset>
      <fieldset className="col-span-12">
        <button type="submit">
          <FeelingTag feeling="Submit" className="bg-purple-500" />
        </button>
      </fieldset>
    </form>
  );
}
