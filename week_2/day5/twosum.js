/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        const map=new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i],i);
        }
        for (let j = 0; j < nums.length; j++) {
            compliment=target-nums[j];
            if(map.has(compliment)&& map.get(compliment)!= j ){
                return [map.get(compliment),j];
            }
        }       
    }