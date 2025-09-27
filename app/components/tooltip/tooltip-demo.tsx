import { TOOLTIP } from "~/models/components";
import { useEffect, useRef, useState } from "react";
import Tooltip from "./tooltip";

export const meta = () => TOOLTIP.meta;
export const handle = TOOLTIP.routeHandle;

function useNow(cadence: number) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, cadence);
    return () => clearInterval(interval);
  }, []);
  return now;
}

export default function TooltipDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const now = useNow(1000);

  const currentTime = () => {
    const hour = now.getHours();
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
        <div>
          Your local time is{" "}
          <span className="bg-gray-200 px-2 py-1 rounded-md">
            {now.toLocaleTimeString()}
          </span>
          .
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="select-none cursor-pointer" ref={containerRef}>
        Hover me!
      </div>
      <Tooltip content={currentTime} containerRef={containerRef} />
    </div>
  );
}
