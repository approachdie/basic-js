const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const used = new Map();
  const result = [];

  for (const name of names) {
    if (!used.has(name)) {
      used.set(name, 0);
      result.push(name);
    } else {
      let count = used.get(name) + 1;
      let newName = `${name}(${count})`;

      while (used.has(newName)) {
        count++;
        newName = `${name}(${count})`;
      }

      used.set(name, k);
      used.set(newName, 0);
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
