export default function LoadingTest({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full flex rounded-xl ${className ?? ""}`}>
      <span className="m-auto">Loaded</span>
    </div>
  );
}
