export type ToastAction = {
  id: string;
  name: string;
  onClick: () => void;
};

export type ToastInfo = {
  header: string;
  description?: string;
  actions?: ToastAction[];
  onClose?: () => void;
};
