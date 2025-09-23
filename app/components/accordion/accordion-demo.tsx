import { ACCORDION } from "~/models/components";
import { ACCORDION_ITEMS } from "./models";
import Accordion from "./accordion";

export const meta = () => ACCORDION.meta;
export const handle = ACCORDION.routeHandle;

export default function AccordionDemo() {
  return (
    <div className="flex flex-col w-full max-w-md gap-4">
      {ACCORDION_ITEMS.map((item) => (
        <Accordion item={item} />
      ))}
    </div>
  );
}
