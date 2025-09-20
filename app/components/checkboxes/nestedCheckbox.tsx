import { useState } from "react";
import Checkbox from "./checkbox";
import type { CheckboxItem } from "./models";

export default function NestedCheckbox({ item }: { item: CheckboxItem }) {
  const [state, setState] = useState(item);
  const handleOnChange = (indices: number[], checked: boolean) => {
    setState((prev) => {
      const deepClone = JSON.parse(JSON.stringify(prev)) as CheckboxItem;
      let target = prev;
      while (indices.length > 0) {
        target = (target.children ?? [])[indices.shift()!];
      }
      updateDescendants(target, checked);
      updateRoot(deepClone);
      return deepClone;
    });
  };
  return (
    <Checkbox
      key={state.id}
      item={state}
      level={0}
      indices={[]}
      onChanged={handleOnChange}
    ></Checkbox>
  );
}

function updateDescendants(root: CheckboxItem, checked: boolean): void {
  let nodes = [root];
  for (let i = 0; i < nodes.length; i++) {
    const current = nodes[i];
    current.checked = checked;
    nodes.push(...(current.children ?? []));
  }
}

function updateRoot(node: CheckboxItem): void {
  const children = node.children ?? [];
  if (children.length === 0) {
    return;
  } else {
    children.forEach(updateRoot);
    if (children.every((child) => child.checked === true)) {
      node.checked = true;
    } else if (children.every((child) => child.checked === false)) {
      node.checked = false;
    } else {
      node.checked = "indeterminate";
    }
  }
}
