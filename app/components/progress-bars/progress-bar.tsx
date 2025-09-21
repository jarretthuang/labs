import { useEffect, useState } from "react";
import "./progress-bar.css";

export default function ProgressBar() {
  const [transition, setTransition] = useState("");
  useEffect(() => {
    setTransition("progress-bar__filled");
  });
  return (
    <div className="w-full h-4 bg-gray-100 rounded-sm">
      <div
        className={`w-full h-full bg-orange-400 rounded-sm progress-bar ${transition}`}
      ></div>
    </div>
  );
}
