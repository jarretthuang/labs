import { useEffect, useRef, useState } from "react";
import type { CheckboxItem } from "./models";

type ChekboxProps = {
  item: CheckboxItem;
  level: number;
  indices: number[];
  onChanged: (indices: number[], checked: boolean) => void;
};

export default function Checkbox({
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

  const handleChange = (e: any) => {
    onChanged(indices, inputRef?.current?.checked ?? false);
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
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor={item.id.toString()}>{item.name}</label>
      </div>
      {item.children?.map((child, index) => (
        <Checkbox
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
