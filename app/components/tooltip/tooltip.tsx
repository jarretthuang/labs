import {
  useEffect,
  useMemo,
  useRef,
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

  const tooltipPosition = useMemo(() => {
    const current = containerRef.current;
    return current
      ? {
          top: current.offsetTop + current.offsetHeight,
          left: current.offsetLeft + current.offsetWidth,
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
    containerRef.current &&
    createPortal(
      <div
        className="absolute bg-gray-100 border-1 border-gray-200 px-3 py-2 rounded-md text-gray-700"
        style={tooltipPosition}
      >
        {content()}
      </div>,
      containerRef.current,
    )
  );
}
