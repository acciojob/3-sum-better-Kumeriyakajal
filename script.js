function threeSum(arr, target) {
// write your code here
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = arr[0] + arr[1] + arr[2]; // Initialize closest sum to the sum of first three elements

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer to the element after S[i]
    let right = arr.length - 1; // Pointer to the last element

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right]; // Calculate the current sum

      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum; // Update the closest sum if the current sum is closer to the target
      }

      if (currentSum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;
