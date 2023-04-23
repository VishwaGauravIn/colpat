import React, { useEffect } from "react";
var col = require("nice-color-palettes");

export default function HeroAnimation() {
  useEffect(() => {
    setInterval(() => {
      let elem =
        document.getElementsByClassName("color-block")[
          Math.floor(Math.random() * (200 - 0 + 1) + 0)
        ];
      elem.style.scale = "1.2";
      elem.style.zIndex = "10";
      setTimeout(() => {
        elem.style.scale = "1";
        elem.style.zIndex = "1";
      }, 1000);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-wrap scale-150 items-center justify-center">
      {col.map((colors, i) => (
        <div key={i} className="flex items-center">
          {colors.map((color, i) => (
            <button
              style={{ background: color }}
              key={i}
              className="w-9 sm:w-12 h-9 sm:h-12 hover:rounded-full hover:scale-75 color-block transition-all ease-in-out relative duration-300 focus:rounded-none focus:animate-spin outline-none focus:z-20"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
