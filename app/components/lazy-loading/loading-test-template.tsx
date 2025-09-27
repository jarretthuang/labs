export default function LoadingTestTemplate({
  chunkNumber,
  className,
}: {
  chunkNumber: number;
  className?: string;
}) {
  return (
    <div className={`w-full h-full flex rounded-xl p-4 ${className ?? ""}`}>
      <span className="m-auto text-pretty">Loaded chunk {chunkNumber} 🎉</span>
    </div>
  );
}
