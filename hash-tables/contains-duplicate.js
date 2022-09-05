var containsDuplicate = function(nums) {
    const map = new Map();
    if (!nums || !nums.length || nums.length === 1) {
        return false;
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i]);
            count++;
            map.set(nums[i], count);
        } else {
            map.set(nums[i], 0);
        }
    }

    map.forEach((value) => {
        if (value > 0) {
            return true;
        }
    });

    return false;
};

containsDuplicate([1, 2, 3, 1]);
