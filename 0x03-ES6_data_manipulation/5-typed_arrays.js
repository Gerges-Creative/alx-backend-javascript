/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored in the position.
 * @returns {DataView}
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Postion outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8view = new DataView(buffer);
  int8view.setInt8(position, value);

  return int8view;
}
