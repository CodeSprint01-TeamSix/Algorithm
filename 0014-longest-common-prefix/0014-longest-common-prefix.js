/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j of strs) {
      if (j[i] != strs[0][i]) {
        return j.slice(0, i);
      }
    }
  }

  return strs[0];
};