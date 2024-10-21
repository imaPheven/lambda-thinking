[Back to: Search Algorithms :arrow_heading_up:](./index.md#search-algorithms-cheatsheet)

# Jump Search

- **Description**: Searches in sorted arrays by jumping ahead by a fixed step size and then performing a linear search in the block where the element is located.
- **Time Complexity**: 
  - Best: $O(\sqrt n)$
  - Worst: $O(\sqrt n)$
- **Space Complexity**: $O(1)$
- **Pros**: Optimized for larger datasets compared to linear search.
- **Cons**: Less efficient than binary search on the same dataset.


## Code Example:

[Back to: Search Algorithms - Jump Search :arrow_heading_up:](./index.md#3-jump-search)

``` Javascript
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

// Example usage:
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 11;

/**
 * Executes the jumpSearch function and logs the result.
 */
let index = jumpSearch(arr, target);

if (index !== -1) {
  console.log(`Element found at index: ${index}`);
} else {
  console.log('Element not found in the array.');
}
```
