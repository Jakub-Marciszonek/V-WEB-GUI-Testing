/**
 * Converts a hex color value to an RGB object.
 * Supports #RGB and #RRGGBB formats.
 *
 * @param {string} hex - Hex color, e.g. "#ff00aa" or "#f0a"
 * @returns {{ r: number, g: number, b: number }}
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the hex color is invalid.
 */
function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("Hex color must be a string.");
  }

  const normalized = hex.replace(/^#/, "");

  if (!/^(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(normalized)) {
    throw new Error("Invalid hex color. Use #RGB or #RRGGBB.");
  }

  const fullHex =
    normalized.length === 3
      ? [...normalized].map((char) => char + char).join("")
      : normalized;

  const value = Number.parseInt(fullHex, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

module.exports = { hexToRgb };