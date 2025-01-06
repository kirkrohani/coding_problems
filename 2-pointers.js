function findSumOfThree(nums, target) {
  let sortedNums = nums.sort((a, b) => {
    return a - b;
  });
  // console.log(sortedNums);

  let low,
    high,
    sum = null;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    low = i + 1;
    high = sortedNums.length - 1;
    // console.log(low, high);
    while (low !== high) {
      sum = sortedNums[i] + sortedNums[low] + sortedNums[high];
      // console.log('sum: ', sum);
      if (sum === target) {
        return true;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
  }
  return false;
}

const x = [-1, 2, 1, -4, 5, -3];
const t = 0;
console.log(findSumOfThree(x, t));
