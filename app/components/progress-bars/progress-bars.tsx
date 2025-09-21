import { useState } from "react";
import { PROGRESS_BARS } from "~/models/components";
import ProgressBar from "./progress-bar";

export const meta = () => PROGRESS_BARS.meta;
export const handle = PROGRESS_BARS.routeHandle;

export default function ProgressBars() {
  const [count, setCount] = useState(1);

  const renderBars = () => {
    const bars = [];
    for (let i = 0; i < count; i++) {
      bars.push(<ProgressBar key={i} />);
    }
    return bars;
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <button className="w-fit" onClick={() => setCount((c) => c + 1)}>
        Add
      </button>
      {renderBars()}
    </div>
  );
}
