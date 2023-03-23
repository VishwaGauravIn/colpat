import ColorNamer from "color-namer";
export default (colorCode) => {
  var names = ColorNamer(colorCode);
  return names.basic[0].name;
};
