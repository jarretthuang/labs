import DiffTool from "~/components/diff-tool/diff-tool";
import { DIFF_TOOL } from "~/models/components";
import { DIFF_LEFT, DIFF_RIGHT } from "~/components/diff-tool/testData";

export const meta = () => DIFF_TOOL.meta;
export const handle = DIFF_TOOL.routeHandle;

export default function DiffToolDemo() {
  return (
    <div className="overflow-y-auto">
      <DiffTool left={DIFF_LEFT} right={DIFF_RIGHT} />
    </div>
  );
}
