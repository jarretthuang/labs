import LoadingTestTemplate from "./loading-test-template";

export default function LoadingTest({ className }: { className?: string }) {
  return <LoadingTestTemplate chunkNumber={2} className={className} />;
}
