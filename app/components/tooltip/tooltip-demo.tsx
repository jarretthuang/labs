import { TOOLTIP } from "~/models/components";
import { useRef } from "react";
import Tooltip from "./tooltip";

export const meta = () => TOOLTIP.meta;
export const handle = TOOLTIP.routeHandle;

export default function TooltipDemoComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTime = () => {
    const date = new Date();
    const hour = date.getHours();
    let greeting = "";
    if (hour >= 5 && hour < 12) {
      greeting = "Good morning!";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good afternoon!";
    } else if (hour >= 17 && hour < 24) {
      greeting = "Good evening!";
    } else {
      greeting = "Good to see you, night owl!";
    }
    return (
      <>
        <span className="font-semibold">{greeting}</span>
        <div>Your current local time is {date.toLocaleTimeString()}.</div>
      </>
    );
  };

  return (
    <div>
      <div ref={containerRef}>Hover me!</div>
      <Tooltip content={currentTime} containerRef={containerRef} />
    </div>
  );
}
