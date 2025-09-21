import { ACCORDION } from "~/models/components";
import { ACCORDION_ITEMS } from "./models";
import SimpleAccordion from "./simple-accordion";

export const meta = () => ACCORDION.meta;
export const handle = ACCORDION.routeHandle;

export default function Accordion() {
  return (
    <div className="flex flex-col w-full max-w-md gap-4">
      {ACCORDION_ITEMS.map((item) => (
        <SimpleAccordion item={item} />
      ))}
    </div>
  );
}
