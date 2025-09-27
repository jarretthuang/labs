import { lazy, Suspense } from "react";
import { LAZY_LOADING } from "~/models/components";

export const meta = () => LAZY_LOADING.meta;
export const handle = LAZY_LOADING.routeHandle;

export default function LazyLoadingDemo() {
  const SlowComponent1 = lazyWithDelay(() => import("./loading-test-1"), 1000);
  const SlowComponent2 = lazyWithDelay(() => import("./loading-test-2"), 2000);
  const SlowComponent3 = lazyWithDelay(() => import("./loading-test-3"), 3000);
  const loading = <div className="m-auto">Loading...</div>;
  return (
    <div className="w-full max-w-2xl h-full bg-gray-100 rounded-xl grid grid-rows-2 grid-cols-2 p-4 gap-4">
      <div className="col-span-2 flex rounded-xl bg-gray-50">
        <Suspense fallback={loading}>
          <SlowComponent1 className="bg-gray-200" />
        </Suspense>
      </div>
      <div className="flex rounded-xl bg-gray-50">
        <Suspense fallback={loading}>
          <SlowComponent2 className="bg-gray-300" />
        </Suspense>
      </div>
      <div className="flex rounded-xl bg-gray-50">
        <Suspense fallback={loading}>
          <SlowComponent3 className="bg-gray-400" />
        </Suspense>
      </div>
    </div>
  );
}

function lazyWithDelay<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  waitTime: number,
) {
  return lazy(() =>
    new Promise<{ default: T }>((resolve) => {
      setTimeout(() => {
        resolve(factory());
      }, waitTime);
    }).then((module) => module),
  );
}
