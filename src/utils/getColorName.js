import ColorNamer from "color-namer";
export default (colorCode) => {
  var names = ColorNamer(colorCode);
  return names.html[0].name;
};

// Works for HEX, HSL, RGB, and RGBA

/*
Example : 
    let colorName = getColorName("#E2D28F");
    console.log(colorName)
*/
