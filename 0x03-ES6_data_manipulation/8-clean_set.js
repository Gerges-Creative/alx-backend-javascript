/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String}
 */

export default function cleanSet(set, startString) {
  let mulStr = '';

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const x of set) {
    if (typeof x === 'string' && x.startsWith(startString)) {
      const str = x.slice(startString.length);
      if (mulStr) {
        mulStr += `-${str}`;
      } else {
        mulStr = str;
      }
    }
  }
  return mulStr;
}
