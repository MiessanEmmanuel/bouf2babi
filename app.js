
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var twoSum = (nums, target) => {
    /* un map ajout */
    const listPair = new Map()

    for (let index = 0; index < nums.length; index++) {
        const difference = target - nums[index]
      
        if (listPair.has(difference)) {
            return [listPair.get(difference), index]
        }
        listPair.set(nums[index],index)
    }

    return []
}

const nums = [3,3]
const target = 6

const result = twoSum(nums, target)

console.log(result)
