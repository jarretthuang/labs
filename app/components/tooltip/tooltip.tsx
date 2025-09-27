import { useEffect, useState, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";

export default function Tooltip({
  content,
  containerRef,
}: {
  content: () => ReactNode;
  containerRef: RefObject<HTMLElement | null>;
}) {
  const [show, setShow] = useState(false);

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
        style={{
          top:
            containerRef.current.offsetTop + containerRef.current.offsetHeight,
          left:
            containerRef.current.offsetLeft + containerRef.current.offsetWidth,
        }}
      >
        {content()}
      </div>,
      containerRef.current,
    )
  );
}
