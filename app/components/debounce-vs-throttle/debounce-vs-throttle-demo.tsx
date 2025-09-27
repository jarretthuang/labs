import { useCallback, useState } from "react";
import { DEBOUNCE_VS_THROTTLE } from "~/models/components";

export const meta = () => DEBOUNCE_VS_THROTTLE.meta;
export const handle = DEBOUNCE_VS_THROTTLE.routeHandle;

export default function DebounceVsThrottleDemo() {
  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  const [debounceClickTotal, setDebounceClickTotal] = useState(0);
  const [throttleClickTotal, setThrottleClickTotal] = useState(0);

  const onDebounce = useCallback(
    debounce(() => setDebounceCount((c) => c + 1), 500),
    [],
  );

  const onThrottle = useCallback(
    throttle(() => setThrottleCount((c) => c + 1), 500),
    [],
  );

  const notification = (total: number, success: number) => {
    return `Clicked ${total} ${total === 1 ? "time" : "times"}, ${success} ${success === 1 ? "success" : "successes"}.`;
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <button
          className="w-fit"
          onClick={() => {
            setDebounceClickTotal((t) => t + 1);
            onDebounce();
          }}
        >
          Debounce 0.5s
        </button>
        <span>{notification(debounceClickTotal, debounceCount)}</span>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="w-fit"
          onClick={() => {
            setThrottleClickTotal((t) => t + 1);
            onThrottle();
          }}
        >
          Throttle 0.5s
        </button>
        <span>{notification(throttleClickTotal, throttleCount)}</span>
      </div>
    </div>
  );
}

function debounce(fn: Function, delay: number): Function {
  let timeout: any;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn: Function, interval: number): Function {
  let isThrottled = false;
  return function (...args: any[]) {
    if (isThrottled) return;
    isThrottled = true;
    fn(...args);
    setTimeout(() => (isThrottled = false), interval);
  };
}
