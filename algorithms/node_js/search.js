/**
 * Performs a linear search on an array to find the target value.
 *
 * @param {Array} arr - The array to search through.
 * @param {*} target - The value to search for in the array.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i;  // Return the index of the found element
      }
  }
  return -1;  // Return -1 if the element is not found
}

/**
 * Performs Jump Search on a sorted array to find the target element.
 * Jump Search works by dividing the array into blocks of size √n and searching
 * through those blocks before performing a linear search within the identified block.
 * 
 * @param {number[]} arr - The sorted array to search through.
 * @param {number} target - The element to search for in the array.
 * @returns {number} - The index of the target element in the array, or -1 if not found.
 */
function jumpSearch(arr, target) {
  let length = arr.length;
  let step = Math.floor(Math.sqrt(length));
  let prev = 0;

  // Jumping through the array
  while (arr[Math.min(step, length) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(length));
    if (prev >= length) {
      return -1; // target not found
    }
  }

  // Linear search within the block
  while (arr[prev] < target) {
    prev++;
    if (prev == Math.min(step, length)) {
      return -1; // target not found
    }
  }

  // If element is found
  if (arr[prev] == target) {
    return prev;
  }

  return -1; // target not found
}

/**
 * Performs binary search on a sorted array or a subarray if left and right bounds are provided.
 * 
 * @param {Array} arr - The sorted array to search in.
 * @param {number} target - The target value to search for.
 * @param {number} [left=0] - The optional starting index of the subarray.
 * @param {number} [right=arr.length - 1] - The optional ending index of the subarray.
 * @returns {number} - The index of the target if found, otherwise -1.
 */
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (arr[middle] === target) {
          return middle; // Target found, return its index
      } else if (arr[middle] < target) {
          left = middle + 1; // Target is in the right half
      } else {
          right = middle - 1; // Target is in the left half
      }
  }

  return -1; // Target not found
}

/**
 * Performs exponential search on a sorted array to find the target value.
 * It first finds the range where the target might be and then applies binary search.
 * 
 * @param {Array} arr - The sorted array to search in.
 * @param {number} target - The target value to search for.
 * @returns {number} - The index of the target if found, otherwise -1.
 */
function exponentialSearch(arr, target) {
  const n = arr.length;

  // If the target is at the first position
  if (arr[0] === target) {
      return 0;
  }

  // Find range for binary search by repeated doubling
  let i = 1;
  while (i < n && arr[i] <= target) {
      i *= 2;
  }

  // Perform binary search in the found range
  return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

module.exports = {
  linearSearch,
  jumpSearch,
  binarySearch,
  exponentialSearch
}