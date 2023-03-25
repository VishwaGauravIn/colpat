import getColorName from "@/utils/getColorName";
import React, { useEffect, useState } from "react";
import { customToast } from "../elements/toast/Toast";

export default function ColorPicker({ val, setVal, label }) {
  // Using this to Solve hydration issue
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="flex flex-col gap-2 w-24 justify-center items-center">
          <input
            type="color"
            id=""
            defaultValue={val}
            onChange={(e) => setVal(e.target.value)}
            className="outline-none bg-transparent h-10 w-10 rounded-full overflow-hidden transition-all ease-in-out duration-100"
          />

          <span className="opacity-75">{val}</span>
          <span className="capitalize font-semibold">{label}</span>
          <button
            className="text-xs bg-tint-emerald text-black w-full py-1 rounded-sm hover:ring-2 ring-offWhite/40"
            onClick={() => customToast(`Color name is: ${getColorName(val)}`)}
          >
            Check name
          </button>
        </div>
      )}
    </>
  );
}
