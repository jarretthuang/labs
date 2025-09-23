import { useState } from "react";
import { AUTH_CODE_INPUT } from "~/models/components";

export const meta = () => AUTH_CODE_INPUT.meta;
export const handle = AUTH_CODE_INPUT.routeHandle;

export default function AuthCodeInputDemo() {
  const [digits, setDigits] = useState(
    new Array<number | undefined>(6).fill(undefined),
  );
  return (
    <form className="flex flex-col border-1 border-gray-200 h-fit p-12 rounded-lg gap-4">
      <div className="flex gap-2">
        {digits.map((digit) => (
          <input className="w-12 h-16" type="number" min={0} max={9}></input>
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
