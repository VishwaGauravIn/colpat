export default (hex) => {
  // Convert hex code to RGB values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Create color variations
  // const colorScheme = {
  //   primary: hex,
  //   secondary: rgbToHex(r + 20, g + 20, b + 20),
  //   tertiary: rgbToHex(r + 40, g + 40, b + 40),
  //   quaternary: rgbToHex(r - 20, g - 20, b - 20),
  //   quinary: rgbToHex(r - 40, g - 40, b - 40),
  // };

  const colorScheme = [
    hex,
    rgbToHex(r + 20, g + 20, b + 20),
    rgbToHex(r + 40, g + 40, b + 40),
    rgbToHex(r - 20, g - 20, b - 20),
    rgbToHex(r - 40, g - 40, b - 40),
  ];

  return colorScheme;
};

function rgbToHex(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
}
