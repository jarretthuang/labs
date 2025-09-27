import LoadingTestTemplate from "./loading-test-template";

export default function LoadingTest({ className }: { className?: string }) {
  return <LoadingTestTemplate chunkNumber={1} className={className} />;
}
