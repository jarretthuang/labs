import { useState } from "react";

export default function Drilldown({ items }: { items: DrilldownItem[] }) {
  const [breadcrumbs, setBreadcrumbs] = useState<DrilldownItem[]>([]);
  const currentItem = breadcrumbs.at(-1);
  const currentChildren = currentItem ? (currentItem.children ?? []) : items;

  function Item({
    item,
    isCurrent,
    onClick,
  }: {
    item: DrilldownItem;
    isCurrent: boolean;
    onClick?: () => void;
  }) {
    return (
      <button
        className="w-full flex items-center gap-4 justify-between"
        onClick={onClick}
      >
        <span>{item.displayName}</span>
        {item.children?.length && (
          <svg
            className={`${isCurrent ? "" : "rotate-180"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            role="img"
          >
            <polyline points="18 14 12 8 6 14"></polyline>
            <polyline points="18 18 12 12 6 18"></polyline>
          </svg>
        )}
      </button>
    );
  }

  return (
    <div className="w-full h-full flex flex-col border-2 border-gray-100 rounded-xl overflow-hidden">
      {currentItem && (
        <div className="p-2 border-b-1 border-gray-100">
          <Item
            item={currentItem}
            isCurrent={true}
            onClick={() => {
              setBreadcrumbs((bc) => {
                const copy = [...bc];
                copy.pop();
                return copy;
              });
            }}
          />
        </div>
      )}
      <ul className="w-full flex flex-col gap-2 p-2 overflow-auto">
        {currentChildren
          .sort((a, b) => a.displayName.localeCompare(b.displayName))
          .map((child) => (
            <li className="w-full" key={child.id}>
              <Item
                item={child}
                isCurrent={false}
                onClick={() => {
                  const children = child.children ?? [];
                  if (children.length > 0) {
                    setBreadcrumbs((bc) => {
                      return [...bc, child];
                    });
                  }
                }}
              ></Item>
            </li>
          ))}
      </ul>
    </div>
  );
}

export type DrilldownItem = {
  id: string;
  displayName: string;
  description?: string;
  children?: DrilldownItem[];
};
