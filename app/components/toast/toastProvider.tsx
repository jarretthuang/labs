import { createContext, type ReactNode, useContext, useState } from "react";
import type { ToastInfo } from "~/components/toast/model";
import type { WithID } from "~/utils/typeUtils";
import { v4 as uuidv4 } from "uuid";

type ToastContextAPI = {
  push: (toast: ToastInfo) => void;
};

const EMPTY_TOAST_CONTEXT_API: ToastContextAPI = {
  push: () => {},
};

export const ToastContext = createContext<ToastContextAPI>(
  EMPTY_TOAST_CONTEXT_API,
);

const DURATION = 5000;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<WithID<ToastInfo>[]>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  const api: ToastContextAPI = {
    push: (toast: ToastInfo) => {
      const id = uuidv4();
      setToasts((prev) => {
        return [
          ...prev,
          {
            ...toast,
            id,
          },
        ];
      });
      setTimeout(() => {
        removeToast(id);
      }, DURATION);
    },
  };

  return (
    <ToastContext value={api}>
      {children}
      {toasts.length > 0 && (
        <div className="absolute bottom-4 flex flex-col items-center gap-2 max-w-full p-4">
          {toasts.reverse().map((t) => (
            <div
              className="flex gap-2 items-center justify-between bg-gray-100 w-xl max-w-full px-6 py-3 rounded-2xl shadow-md"
              key={t.id}
            >
              <div className="flex flex-col">
                <span className="font-medium text-gray-500">{t.header}</span>
                <span className="text-gray-700">{t.description}</span>
              </div>
              <button
                className="text-xl text-gray-500"
                onClick={() => removeToast(t.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </ToastContext>
  );
}
