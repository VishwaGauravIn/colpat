import ColorNamer from "color-namer";
export default (colorCode) => {
  var names = ColorNamer(colorCode);
  return names.ntc[0].name.toLowerCase().replaceAll(" ", "-");
};

// Works for HEX, HSL, RGB, and RGBA

/*
Example : 
    let colorName = getColorName("#E2D28F");
    console.log(colorName)
*/

export const genericColorName = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "quinary",
];
