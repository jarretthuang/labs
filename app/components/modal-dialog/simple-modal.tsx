export default function SimpleModal({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-gray-400/50 flex p-2">
      <div className="m-auto border-1 border-gray-200 rounded-2xl w-full max-w-xl bg-white p-8 flex flex-col gap-4">
        <span className="text-2xl font-medium">{title}</span>
        <p className="flex-1">{description}</p>
        <div className="flex justify-end">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
