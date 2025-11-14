import { TOAST } from "~/models/components";
import { useContext } from "react";
import { ToastContext } from "~/components/toast/toastProvider";

export const meta = () => TOAST.meta;
export const handle = TOAST.routeHandle;

export default function ToastDemo() {
  const toastContext = useContext(ToastContext);

  const showToast = () => {
    const currentTime = new Date().toLocaleTimeString();
    toastContext.push({
      header: "New toast",
      description: `This is a new toast created at ${currentTime}!`,
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show toast!</button>
    </div>
  );
}
