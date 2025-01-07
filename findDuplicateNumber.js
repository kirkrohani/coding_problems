function findDuplicate(nums) {
  let fast = nums[0];
  let slow = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow == fast) {
      break;
    }
  }

  slow = nums[0];

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
}

const nums = [1, 6, 2, 3, 6, 4, 5];
console.log('dupe: ', findDuplicate(nums));
