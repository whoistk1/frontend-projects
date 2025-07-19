def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """

    hashmap = {}
    index = 0

    for i in nums:
        value = target - i

        if value in hashmap:
           return hashmap[value], index
        else:
            hashmap[i] = index
            index += 1

            print ("hashmap: ", hashmap)

    


nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))