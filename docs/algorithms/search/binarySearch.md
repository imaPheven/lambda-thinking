[Back to: Search Algorithms :arrow_heading_up:](./index.md#search-algorithms-cheatsheet)

# Binary Search

- **Description**: Efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(\log n)$
- **Space Complexity**: $O(1)$ (Iterative) or $O(\log n)$ (Recursive)
- **Pros**: Very efficient for large, sorted datasets.
- **Cons**: Requires data to be sorted.


## Code Example:

[Back to: Search Algorithms - Binary Search :arrow_heading_up:](./index.md#2-binary-search)

``` Javascript
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
```
