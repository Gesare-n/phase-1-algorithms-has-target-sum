function hasTargetSum(nums, target) {
    let seenNumbers = new Set();
  
    for (let num of nums) {
      let diff = target - num;
  
      if (seenNumbers.has(diff)) {
        return true;
      }
  
      seenNumbers.add(num);
    }
  
    return false;
  }
  