[Back to: Search Algorithms :arrow_heading_up:](./index.md#search-algorithms-cheatsheet)

# Interpolation Search

- **Description**: A search algorithm that assumes the elements are uniformly distributed and uses this information to probe the position.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(n)$
- **Space Complexity**: $O(1)$
- **Pros**: Efficient with uniformly distributed data.
- **Cons**: Can perform poorly on non-uniform data.


## Code Example:

[Back to: Search Algorithms - Interpolation Search :arrow_heading_up:](./index.md#5-interpolation-search)

``` Javascript
/**
 * Performs an interpolation search on a sorted array.
 * 
 * Interpolation search is an improvement over binary search for instances where the values
 * in a sorted array are uniformly distributed. It uses the position formula to estimate
 * the location of the target element in the array.
 *
 * @param {number[]} arr - The sorted array of numbers.
 * @param {number} target - The target number to search for.
 * @return {number} The index of the target element in the array, or -1 if not found.
 */
function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // If the array is uniform, interpolation formula is used to estimate the position
        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        // Check if we found the target at the estimated position
        if (arr[pos] === target) {
            return pos;
        }

        // If the target is larger, search the right subarray
        if (arr[pos] < target) {
            low = pos + 1;
        } 
        // If the target is smaller, search the left subarray
        else {
            high = pos - 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}

/**
 * Helper function to test the interpolation search.
 * 
 * Tests the interpolationSearch function on a sample array and target values.
 */
function testInterpolationSearch() {
    const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const target = 70;

    const result = interpolationSearch(array, target);
    
    if (result !== -1) {
        console.log(`Element found at index ${result}`);
    } else {
        console.log("Element not found in the array.");
    }
}

// Run the test
testInterpolationSearch();

```
