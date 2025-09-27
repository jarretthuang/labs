import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";

export default function Tooltip({
  content,
  containerRef,
}: {
  content: () => ReactNode;
  containerRef: RefObject<HTMLElement | null>;
}) {
  const [show, setShow] = useState(false);

  const tooltipStyle = useMemo(() => {
    const current = containerRef.current;
    return current
      ? {
          top: current.offsetTop + current.offsetHeight + 10,
          left: current.offsetLeft + 10,
        }
      : {};
  }, [containerRef?.current]);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) {
      return;
    }
    const onMouseEnter = () => setShow(true);
    const onMouseLeave = () => setShow(false);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchstart", onMouseEnter);
    container.addEventListener("touchend", onMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchstart", onMouseEnter);
      container.removeEventListener("touchend", onMouseLeave);
    };
  }, [containerRef]);

  return (
    show &&
    createPortal(
      <div
        className="absolute max-w-full bg-gray-100 border-1 border-gray-200 px-4 py-3 rounded-md text-gray-700"
        style={tooltipStyle}
      >
        {content()}
      </div>,
      document.body,
    )
  );
}
