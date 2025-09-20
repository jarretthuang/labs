import { useEffect, useRef, useState } from "react";
import type { CheckboxItem } from "./models";

type ChekboxProps = {
  item: CheckboxItem;
  level: number;
};

export default function Checkbox({ item, level }: ChekboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    item.checked ?? false,
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = checked === "indeterminate";
    }
  }, []);

  const handleChange = () => {
    setChecked(inputRef?.current?.checked ?? false);
  };

  return (
    <>
      <div
        className="flex items-center gap-2"
        style={{ paddingLeft: `${level * 20}px` }}
      >
        <input
          id={item.id.toString()}
          type="checkbox"
          checked={!!checked}
          ref={inputRef}
          onChange={() => handleChange()}
        ></input>
        <label htmlFor={item.id.toString()}>{item.name}</label>
      </div>
      {item.children?.map((child) => (
        <Checkbox item={child} level={level + 1} />
      ))}
    </>
  );
}
