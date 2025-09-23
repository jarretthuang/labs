import { DATA_TABLE } from "~/models/components";
import { COL_DEFS, type Row } from "./models";
import { useEffect, useRef, useState } from "react";

export const meta = () => DATA_TABLE.meta;
export const handle = DATA_TABLE.routeHandle;

export default function DataTableDemo() {
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [end, setEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const endRef = useRef(end);
  useEffect(() => {
    endRef.current = end;
  }, [end]);

  const loadingRef = useRef(isLoading);
  useEffect(() => {
    loadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/rows", {
          method: "POST",
          body: JSON.stringify({
            pageIndex,
            pageSize: 30,
          }),
        });
        const json = await response.json();
        setEnd(json.end);
        setRows((rows) => [...rows, ...json.rows]);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    })();
  }, [pageIndex]);

  useEffect(() => {
    const div = scrollRef.current;
    if (!div) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = div;
      if (
        scrollTop + clientHeight >= scrollHeight - 2 &&
        !endRef.current &&
        !loadingRef.current
      ) {
        setPageIndex((i) => i + 1);
      }
    };

    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-full h-80 border-gray-200 border-2 rounded-xl overflow-hidden relative">
        {isLoading && (
          <div className="w-full h-full absolute top-0 left-0 bg-white/80 z-20 flex">
            <span className="m-auto">Loading...</span>
          </div>
        )}
        <div className="w-full h-full overflow-auto" ref={scrollRef}>
          <table className="w-full flex flex-col h-fit border-collapse">
            <thead className="bg-gray-100 w-fit sticky top-0">
              <tr className="flex">
                <th className="w-14 border-1 px-4 py-2 flex items-center border-gray-200"></th>
                {COL_DEFS.map((col) => (
                  <th
                    key={col.id}
                    className="border-1 px-4 py-2 flex items-center border-gray-200 font-semibold text-gray-500"
                    style={{ width: `${col.width}px` }}
                  >
                    <span>{col.name}</span>{" "}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="flex-1 w-fit">
              {rows.map((row, index) => (
                <tr key={row.id} className="flex">
                  <td className="w-14 border-1 px-4 py-2 items-center border-gray-100 bg-gray-50 font-medium text-right">
                    {index + 1}
                  </td>
                  {COL_DEFS.map((col) => (
                    <td
                      key={`${row.id}.${col.id}`}
                      className="border-1 px-4 py-2 items-center border-gray-100 truncate"
                      style={{ width: `${col.width}px` }}
                    >
                      <span>{(row as any)[col.field] ?? "N/A"}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end p-2 items-center gap-2 text-gray-600">
        <span>
          Rows: {rows.length} / {end ? rows.length : "?"}{" "}
        </span>
      </div>
    </div>
  );
}
