import { useState } from "react";
import Checkbox from "./checkbox";
import type { CheckboxItem } from "./models";

export default function NestedCheckbox({ item }: { item: CheckboxItem }) {
  const [state, setState] = useState(item);
  const handleOnChange = (indices: number[], checked: boolean) => {
    setState((prev) => {
      const deepClone = JSON.parse(JSON.stringify(prev)) as CheckboxItem;
      let target = prev;
      const parents = [];
      while (indices.length > 0) {
        parents.push(target);
        target = (target.children ?? [])[indices.shift()!];
      }
      updateDescendants(target, checked);
      updateParents(parents);
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

function updateParents(nodes: CheckboxItem[]): void {
  console.log(nodes);
  while (nodes.length > 0) {
    const current = nodes.pop()!;
    const children = current.children ?? [];
    if (children.every((child) => child.checked === true)) {
      current.checked = true;
    } else if (children.every((child) => !child.checked)) {
      current.checked = false;
    } else {
      current.checked = "indeterminate";
    }
  }
}
