import { useState } from "react";
import { MODAL_DIALOG } from "~/models/components";
import SimpleModal from "./simple-modal";

export const meta = () => MODAL_DIALOG.meta;
export const handle = MODAL_DIALOG.routeHandle;

export default function ModalDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && (
        <SimpleModal
          title={title}
          description={description}
          onClose={() => setOpen(false)}
        ></SimpleModal>
      )}
    </div>
  );
}

const title = "Metamorphosis";
const description =
  "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.";
