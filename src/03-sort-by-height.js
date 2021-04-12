/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }

  const sorted = newArr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    if (arr[i] !== -1) {
      result.splice(i, 0, sorted[temp]);
      temp++;
    }
  }
  console.log(result);
}

module.exports = sortByHeight;
