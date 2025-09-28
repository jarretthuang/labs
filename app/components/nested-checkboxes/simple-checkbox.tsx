import { useEffect, useRef, useState } from "react";
import type { CheckboxItem } from "./models";

type ChekboxProps = {
  item: CheckboxItem;
  level: number;
  indices: number[];
  onChanged: (indices: number[], checked: boolean) => void;
};

export default function SimpleCheckbox({
  item,
  level,
  indices,
  onChanged,
}: ChekboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.indeterminate = item.checked === "indeterminate";
    }
  }, [item.checked]);

  const handleChange = (toggle: boolean) => {
    const current = inputRef?.current?.checked ?? false;
    onChanged(indices, toggle ? !current : current);
  };

  return (
    <>
      <div
        className="flex items-center gap-2"
        style={{ paddingLeft: `${level * 25}px` }}
      >
        <input
          id={item.id.toString()}
          type="checkbox"
          checked={item.checked === true}
          ref={inputRef}
          onChange={() => handleChange(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleChange(true);
            }
          }}
        ></input>
        <label htmlFor={item.id.toString()}>{item.name}</label>
      </div>
      {item.children?.map((child, index) => (
        <SimpleCheckbox
          key={child.id}
          item={child}
          level={level + 1}
          indices={[...indices, index]}
          onChanged={onChanged}
        />
      ))}
    </>
  );
}
