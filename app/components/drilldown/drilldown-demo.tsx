import { DRILLDOWN } from "~/models/components";
import Drilldown, { type DrilldownItem } from "./drilldown";
import { drilldownItems } from "./drilldown-sample";

export const meta = () => DRILLDOWN.meta;
export const handle = DRILLDOWN.routeHandle;

export default function DrilldownDemo() {
  return (
    <div className="flex max-w-sm w-full h-fit max-h-60 flex-col gap-2">
      <Drilldown items={drilldownItems} />
    </div>
  );
}
