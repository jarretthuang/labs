import { useState } from "react";
import { MODAL_DIALOG } from "~/models/components";
import Modal from "./modal";

export const meta = () => MODAL_DIALOG.meta;
export const handle = MODAL_DIALOG.routeHandle;

export default function ModalDialogDemo() {
  const [open, setOpen] = useState<"simple" | "rich" | undefined>(undefined);
  return (
    <div>
      <div className="flex gap-2">
        <button onClick={() => setOpen("simple")}>
          Open with simple content
        </button>
        <button onClick={() => setOpen("rich")}>Open with rich content</button>
      </div>
      {open === "simple" && (
        <Modal title={title} onClose={() => setOpen(undefined)}>
          <p>{p1}</p>
        </Modal>
      )}
      {open === "rich" && (
        <Modal title={title} onClose={() => setOpen(undefined)}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img
                src="metamorphosis.jpg"
                className="w-36 h-36 rounded-xl object-contain"
              ></img>
              <div className="flex flex-col px-2 gap-1">
                <span className="font-medium">Arthur: Franz Kafka</span>
                <span className="font-medium">Published: 1915</span>
                <span className="font-medium">Links:</span>
                <div className="px-2 flex flex-col">
                  <a
                    href="https://en.wikipedia.org/wiki/The_Metamorphosis"
                    target="_blank"
                  >
                    Wikipedia - The Metamorphosis
                  </a>
                  <a
                    href="https://en.wikipedia.org/wiki/Franz_Kafka"
                    target="_blank"
                  >
                    Wikipedia - Franz Kafka
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-gray-100 rounded-xl overflow-hidden">
              <div className="max-h-64 overflow-auto p-6 flex flex-col gap-4">
                <p className="text-pretty first-letter:text-8xl first-letter:font-medium first-letter:float-left first-letter:mr-2 first-letter:font-serif">
                  {p1}
                </p>
                <p className="text-pretty">{p2}</p>
                <p className="text-pretty">{p3}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

const title = "The Metamorphosis";
const p1 =
  "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.";
const p2 =
  "The bedding was hardly able to cover it and seemed ready to slide off at any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.";
const p3 = `
"What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table—Samsa was a traveling salesman—and above it hung a picture he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.`;
