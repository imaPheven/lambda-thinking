[Back to: Search Algorithms :arrow_heading_up:](./index.md#search-algorithms-cheatsheet)

## Exponential Search

- **Description**: Finds range where an element may exist, and then uses binary search to find the element within the range.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(\log n)$
- **Space Complexity**: $O(\log n)$
- **Pros**: Efficient when the element is near the start of the array.
- **Cons**: Requires sorted data.


### Code Example:

[Back to: Search Algorithms - Exponential Search :arrow_heading_up:](./index.md#4-exponential-search)

``` javascript
// Helper function to perform binary search
function binarySearch(arr, left, right, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if target is at mid
        if (arr[mid] === target) {
            return mid;
        }

        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        } 
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }
    
    // Return -1 if target is not found
    return -1;
}

// Exponential search function
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
    return binarySearch(arr, Math.floor(i / 2), Math.min(i, n - 1), target);
}

// Example usage
let arr = [1, 2, 3, 4, 10, 20, 40, 50, 80, 100];
let target = 10;

let result = exponentialSearch(arr, target);
console.log(result !== -1 ? `Element found at index ${result}` : "Element not found");
```

### Explanation:
1. **Binary Search**: This helper function performs a binary search on a given sub-array.
2. **Exponential Search**: This function searches for a target by first finding an exponential range where the target might be and then applying binary search within that range.
