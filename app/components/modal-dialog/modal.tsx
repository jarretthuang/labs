import type { ReactNode } from "react";

export default function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-gray-400/50 flex p-2 z-10">
      <div className="m-auto border-1 border-gray-200 rounded-3xl w-full max-w-2xl bg-white p-8 flex flex-col gap-4">
        <span className="text-2xl font-medium">{title}</span>
        <div className="flex-1">{children}</div>
        <div className="flex justify-end">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
