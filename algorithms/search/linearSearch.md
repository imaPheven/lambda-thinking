[Back to: Search Algorithms](./index.md#search-algorithms-cheatsheet)

# Linear Search

- **Description**: Searches each element of a list sequentially until a match is found.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(n)$
- **Space Complexity**: $O(1)$
- **Pros**: Simple, works on unsorted data.
- **Cons**: Inefficient for large datasets.

## Code Example:
[Back to: Search Algorithms](./index.md#1-linear-search)

``` Javascript
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

// Example usage:
const numbers = [10, 15, 30, 45, 50];
const target = 30;
const result = linearSearch(numbers, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found');
}
```