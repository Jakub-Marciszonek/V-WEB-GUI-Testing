// math.test.js

const { expect } = require("chai");
const { hexToRgb } = require("../math");

/**
 * Unit tests for the hexToRgb() function.
 * These tests verify that hexadecimal color values are
 * correctly converted into RGB objects and that invalid
 * inputs produce the expected errors.
 *
 * @module test/math
 */
describe("math.js", () => {

  /**
   * Tests for the hexToRgb() function.
   * The function accepts three-digit and six-digit hex colors
   * and returns an object containing r, g, and b values.
   */
  describe("hexToRgb()", () => {

    /**
     * Tests conversion of a six-digit hexadecimal color.
     * #ff00aa should produce red 255, green 0, and blue 170.
     */
    it("should convert a six-digit hex color to RGB", () => {
      expect(hexToRgb("#ff00aa")).to.deep.equal({
        r: 255,
        g: 0,
        b: 170
      });
    });

    /**
     * Tests conversion of a three-digit hexadecimal color.
     * Each digit is duplicated, so #f0a becomes #ff00aa.
     */
    it("should convert a three-digit hex color to RGB", () => {
      expect(hexToRgb("#f0a")).to.deep.equal({
        r: 255,
        g: 0,
        b: 170
      });
    });

    /**
     * Tests that the function accepts hex values without
     * a leading # character.
     * The value 336699 should produce RGB (51, 102, 153).
     */
    it("should accept hex without the # prefix", () => {
      expect(hexToRgb("336699")).to.deep.equal({
        r: 51,
        g: 102,
        b: 153
      });
    });

    /**
     * Tests conversion of black.
     * The hexadecimal value #000000 should produce
     * zero for all three RGB components.
     */
    it("should convert black correctly", () => {
      expect(hexToRgb("#000000")).to.deep.equal({
        r: 0,
        g: 0,
        b: 0
      });
    });

    /**
     * Tests conversion of white.
     * The hexadecimal value #ffffff should produce
     * 255 for all three RGB components.
     */
    it("should convert white correctly", () => {
      expect(hexToRgb("#ffffff")).to.deep.equal({
        r: 255,
        g: 255,
        b: 255
      });
    });

    /**
     * Tests error handling for invalid hexadecimal characters.
     * The value #xyz contains characters that are not valid
     * hexadecimal digits, so the function should throw an error.
     */
    it("should throw an error for an invalid hex color", () => {
      expect(() => hexToRgb("#xyz")).to.throw("Invalid hex color");
    });

    /**
     * Tests error handling for an unsupported hex length.
     * The value #12 contains only two digits, so it should
     * be rejected because only three or six digits are supported.
     */
    it("should throw an error for an invalid hex length", () => {
      expect(() => hexToRgb("#12")).to.throw("Invalid hex color");
    });

    /**
     * Tests error handling when the input is not a string.
     * Passing a number instead of a hexadecimal color string
     * should cause the function to throw a TypeError.
     */
    it("should throw a TypeError if input is not a string", () => {
      expect(() => hexToRgb(123)).to.throw(TypeError);
    });

  });
});