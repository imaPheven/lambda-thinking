[Back to: Search Algorithms :arrow_heading_up:](./index.md#search-algorithms-cheatsheet)

# Exponential Search

- **Description**: Finds range where an element may exist, and then uses binary search to find the element within the range.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(\log n)$
- **Space Complexity**: $O(\log n)$
- **Pros**: Efficient when the element is near the start of the array.
- **Cons**: Requires sorted data.

[Compare vs Binary Search :arrow_down:](#compare-vs-binary-search)

## Code Example:

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


## Compare vs Binary Search
Exponential Search has several advantages over directly using Binary Search, particularly when dealing with unbounded or large sorted arrays:

### 1. **Unbounded or Infinite Arrays**:
   - **Exponential Search** is useful for **unbounded arrays** (or data streams) where the size is unknown. It incrementally doubles the search range to find an appropriate range for the target. After finding this range, it applies Binary Search within the identified bounds.
   - **Binary Search**, on the other hand, requires the array size to be known in advance because it directly divides the array in halves. This makes it unsuitable for unbounded arrays.

### 2. **Faster Discovery of Target Range**:
   - **Exponential Search** quickly finds a range where the target might exist by doubling the indices. This gives it an advantage in **early-stage discovery** when the target is located closer to the beginning of the array.
   - **Binary Search** begins by assuming the search range is the entire array, which means it has no mechanism to start with a narrow search unless you already know where to begin.

### 3. **Efficiency in Small Target Ranges**:
   - When the target is expected to be located **closer to the beginning** of the array, Exponential Search can be faster because it quickly narrows down the possible search space before applying Binary Search.
   - **Binary Search** does not have this capability to adapt based on where the target may be located and will require `O(log n)` comparisons over the entire array length from the start.

### 4. **Complexity**:
   - **Exponential Search**: In the best case (if the target is near the beginning), Exponential Search can have a **time complexity of O(log i)**, where `i` is the index of the target element. This is particularly useful when the target is located early in the array, offering better performance than Binary Search.
   - **Binary Search**: The time complexity of Binary Search is always **O(log n)** where `n` is the length of the array, irrespective of where the target is located.

### Use Cases:
- **Exponential Search** is particularly advantageous when working with:
  - Unbounded arrays or streams.
  - Arrays where the target is more likely near the beginning.
  
- **Binary Search** remains efficient for scenarios where the size of the array is known and fixed. 

In summary, **Exponential Search** is more adaptive when the size of the array is unknown or when the target is expected to be closer to the start, while **Binary Search** is efficient for static, well-defined arrays.