[Back to: Search Algorithms :arrow_heading_up:](./index.md#search-algorithms-cheatsheet)

## Binary Search

- **Description**: Efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(\log n)$
- **Space Complexity**: $O(1)$ (Iterative) or $O(\log n)$ (Recursive)
- **Pros**: Very efficient for large, sorted datasets.
- **Cons**: Requires data to be sorted.


### Code Example:

[Back to: Search Algorithms - Binary Search :arrow_heading_up:](./index.md#2-binary-search)

``` Javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

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

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearch(array, target);

if (result !== -1) {
    console.log(`Target found at index ${result}`);
} else {
    console.log("Target not found");
}
```
