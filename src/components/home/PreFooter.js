import React from "react";

export default function PreFooter() {
  return (
    <div className="Menu w-full max-w-[98vw] flex justify-center items-center scale-50 sm:scale-100">
      <ul className="Menu-list" data-offset="10">
        <li className="Menu-list-item font-bold" data-offset="20">
          COLPAT
          <span className="Mask">
            <span>COLPAT</span>
          </span>
          <span className="Mask">
            <span>COLPAT</span>
          </span>
        </li>
        <li className="Menu-list-item text-tint-green flex whitespace-nowrap scale-50 md:scale-100" data-offset="20">
          the ultimate design tool!
          <span className="Mask subMask">
            <span>the ultimate design tool!</span>
          </span>
          <span className="Mask subMask">
            <span>the ultimate design tool!</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
