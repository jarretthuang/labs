import { useCallback, useState } from "react";
import SimpleCheckbox from "./simple-checkbox";
import type { CheckboxItem } from "./models";

export default function NestedCheckbox({ item }: { item: CheckboxItem }) {
  const [state, setState] = useState(item);

  const handleOnChange = useCallback((indices: number[], checked: boolean) => {
    setState((prev) => {
      const deepClone = JSON.parse(JSON.stringify(prev)) as CheckboxItem;
      let target = deepClone;
      const parents = [];
      const paths = [...indices];
      while (paths.length > 0) {
        parents.push(target);
        target = (target.children ?? [])[paths.shift()!];
      }
      updateDescendants(target, checked);
      updateParents(parents);
      return deepClone;
    });
  }, []);

  return (
    <SimpleCheckbox
      key={state.id}
      item={state}
      level={0}
      indices={[]}
      onChanged={handleOnChange}
    ></SimpleCheckbox>
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
