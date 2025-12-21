var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
            return [i, map.get(target - nums[i])];
        }

        map.set(nums[i], i);
        
        if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
            return [i, map.get(target - nums[i])];
        }
    }

    return [];
};


console.log(twoSum([3, 3], 6));
