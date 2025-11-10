const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const arr1 = {};
  const arr2 = {};

  for (const char of s1) {
    arr1[char] = (arr2[char] || 0) + 1;
  }

  for (const char of s2) {
    arr1[char] = (arr2[char] || 0) + 1;
  }

  let count = 0;

  for (const char in freq1) {
    if (arr2[char]) {
      count += Math.min(arr1[char], arr2[char]);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
