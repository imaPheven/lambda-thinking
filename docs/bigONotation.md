[Main Index](/README.md)

# Big O Notation Cheat Sheet

Big O notation describes the time complexity of an algorithm, indicating how its runtime grows as the size of the input increases. Below are common complexities:

## Summary Table

| Notation      | Name                                                               | Description                                    | Example Algorithm       |
|-------------  |--------------------------------------------------------------------|------------------------------------------------|-------------------------|
| O(1)          | [Constant Time](#constant-time---o1)                               | Time remains the same regardless of input size                             | Array access            |
| O(log n)      | [Logarithmic Time](#logarithmic-time---olog-n)                     | Time grows logarithmically with input size                                 | Binary search           |
| O(n)          | [Linear Time](#linear-time---on)                                   | Time grows linearly with input size                                        | Traversing an array     |
| O(n log n)    | [Linearithmic Time](#logarithmic-time---olog-n)                    | Time grows faster than O(n) but slower than O(n^2)                         | Merge sort, quicksort   |
| O(n^2)        | [Quadratic Time](#quadratic-time---on2)                            | Time grows quadratically with input size                                   | Bubble sort             |
| O(n^3)        | [Cubic Time](#cubic-time---on3)                                    | Time grows cubically with input size                                       | Triple nested loops     |
| O(2^n)        | [Exponential Time](#exponential-time---o2n)                        | Time doubles with each additional input                                    | Recursive algorithms    |
| O(n!)         | [Factorial Time](#factorial-time---on)                             | Time grows factorially with input size                                     | Permutations            |
| O(n + k)      | [Linear Plus Constant Factor](#linear-plus-constant-time---on--k)  | Time depends on input size \( n \) plus a constant \( k \)                 | Counting Sort           |
| O(1) Amortized| [Amortized Constant Time](#amortized-time---o1-amortized)          | Rare operations take longer, but average is constant                       | Dynamic Arrays          |
| O(n^2 / 2)    | [Reduced Quadratic Time](#reduced-quadratic-time---on2--2)         | Similar to \( O(n^2) \), but processes half of comparisons                 | Finding pairs           |
| O(n + m)      | [Dependent on Two Inputs](#dependent-on-two-inputs---on--m)        | Time depends on two independent factors \( n \) and \( m \)                | Merging sorted arrays   |
| O(n log k)    | [Logarithmic Search/Insert](#logarithmic-time---olog-n)            | Time grows as the number of operations with \( \log(k) \) inserts/deletes  | Heaps, Priority Queues   |

When we say "runtime grows" in the context of time complexity, we are referring to how the time an algorithm takes to execute increases as the size of the input (denoted as \( n \)) increases. It does **not** mean that the algorithm goes faster; in fact, it typically means the opposite—**the algorithm gets slower** as the input size increases.

Here’s a breakdown:

- **If the runtime grows slowly (e.g., O(log n)):** The algorithm becomes **slightly slower** as the input size increases, but the increase in time is relatively small compared to the size of \( n \).
  
- **If the runtime grows quickly (e.g., O(n^2) or O(2^n)):** The algorithm becomes **much slower** as the input size increases, because the time required increases at a much faster rate as \( n \) grows.

In summary, "runtime grows" refers to how the **execution time** of an algorithm changes in relation to the size of the input, and larger input sizes usually lead to longer execution times.




## Constant Time - O(1)
- **Description**: The runtime is constant, no matter the size of the input.
- **Example**: Accessing an element in an array by index.
  
  ```javascript
  function getFirstElement(arr) {
    return arr[0]; // O(1)
  }
  ```

## Logarithmic Time - O(log n)
- **Description**: The runtime increases logarithmically as the input size grows. Common in divide-and-conquer algorithms.
- **Example**: Binary search in a sorted array.

  ```javascript
  function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid; // O(log n)
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
  ```

[:top:](#)

## Linear Time - O(n)
- **Description**: The runtime grows linearly with the size of the input.
- **Example**: Traversing an array.

  ```javascript
  function printElements(arr) {
    arr.forEach(el => console.log(el)); // O(n)
  }
  ```
[:top:](#)

## Linearithmic Time - O(n log n)
- **Description**: The runtime grows faster than linear time but slower than quadratic time. This is common in efficient sorting algorithms.
- **Example**: Merge sort or quicksort.

  ```javascript
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right); // O(n log n)
  }
  ```
[:top:](#)

## Quadratic Time - O(n^2)
- **Description**: The runtime grows quadratically with the size of the input. Common in algorithms with nested loops.
- **Example**: Bubble sort or insertion sort.

  ```javascript
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // O(n^2)
        }
      }
    }
    return arr;
  }
  ```

[:top:](#)

## Cubic Time - O(n^3)
- **Description**: The runtime grows cubically with the size of the input.
- **Example**: Common in algorithms with three nested loops.

  ```javascript
  function cubicAlgorithm(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
          // Do something O(n^3)
        }
      }
    }
  }
  ```

[:top:](#)

## Exponential Time - O(2^n)
- **Description**: The runtime doubles with each additional input. Common in brute-force solutions.
- **Example**: Solving the Traveling Salesman Problem using brute force.

  ```javascript
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); // O(2^n)
  }
  ```
[:top:](#)

## Factorial Time - O(n!)
- **Description**: The runtime grows factorially with the size of the input. Common in problems involving permutations.
- **Example**: Generating all permutations of a string.

  ```javascript
  function permutations(str) {
    if (str.length <= 1) return [str];
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let remaining = str.slice(0, i) + str.slice(i + 1);
      for (let perm of permutations(remaining)) {
        result.push(char + perm); // O(n!)
      }
    }
    return result;
  }
  ```

[:top:](#)


## Linear Plus Constant Time - O(n + k)
- **Description**: The runtime grows linearly with the size of input \( n \), plus a constant or other factor \( k \) related to the algorithm's specific requirements. Often seen in counting sorts or algorithms that depend on an additional input parameter.
- **Example**: Counting Sort, where \( k \) is the range of the input values.

  ```javascript
  function countingSort(arr, maxValue) {
    let count = new Array(maxValue + 1).fill(0);
    let output = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
    
    for (let i = 1; i <= maxValue; i++) {
      count[i] += count[i - 1];
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
      output[--count[arr[i]]] = arr[i];
    }
    
    return output; // O(n + k) where n is the size of input and k is the range
  }
  ```

[:top:](#)

## Amortized Time - O(1) (Amortized)
- **Description**: While some individual operations might take longer, the average time for operations in a sequence is constant. Common in data structures like dynamic arrays and hash tables where resizing or rehashing happens occasionally.
- **Example**: Inserting into a dynamic array.

  ```javascript
  class DynamicArray {
    constructor() {
      this.arr = [];
      this.capacity = 1;
      this.size = 0;
    }
  
    insert(value) {
      if (this.size === this.capacity) {
        this.resize();  // This can take O(n) time, but it's rare
      }
      this.arr[this.size++] = value;  // O(1) amortized
    }
  
    resize() {
      this.capacity *= 2;
      let newArr = new Array(this.capacity);
      for (let i = 0; i < this.size; i++) {
        newArr[i] = this.arr[i];
      }
      this.arr = newArr;
    }
  }
  ```

[:top:](#)

## Reduced Quadratic Time - O(n^2 / 2)
- **Description**: Similar to \( O(n^2) \), but the algorithm only processes half of the comparisons, such as when checking pairs in undirected graphs or combinations.
- **Example**: Finding all unique pairs in an array.

  ```javascript
  function findUniquePairs(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        pairs.push([arr[i], arr[j]]); // O(n^2 / 2)
      }
    }
    return pairs;
  }
  ```

[:top:](#)

## Pivot Choice in Quick Sort (O(n log n) Best, O(n^2) Worst)
- **Description**: Quick Sort's performance heavily depends on the choice of the pivot. A poor pivot (e.g., smallest or largest element) can lead to quadratic time complexity, while a good pivot (e.g., middle or random element) results in the average-case \( O(n \log n) \).
  
### 1. **First Element as Pivot**
   - **Description**: Choosing the first element as the pivot can result in the worst-case \( O(n^2) \) if the array is already sorted or in reverse.
  
  ```javascript
  function quickSortFirstPivot(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = arr.slice(1).filter(el => el < pivot);
    let right = arr.slice(1).filter(el => el >= pivot);
    return [...quickSortFirstPivot(left), pivot, ...quickSortFirstPivot(right)]; // Worst-case O(n^2)
  }
  ```

### 2. **Random Pivot**
   - **Description**: Choosing a random element as the pivot improves the chances of balanced partitions and typically leads to the average-case \( O(n \log n) \).

  ```javascript
  function quickSortRandomPivot(arr) {
    if (arr.length <= 1) return arr;
    let pivotIdx = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIdx];
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el >= pivot && el !== pivot);
    return [...quickSortRandomPivot(left), pivot, ...quickSortRandomPivot(right)]; // Average-case O(n log n)
  }
  ```

[:top:](#)

### 3. **Median of Three**
   - **Description**: The "median of three" method chooses the median of the first, middle, and last elements as the pivot, reducing the likelihood of worst-case scenarios.

  ```javascript
  function medianOfThree(arr) {
    const first = arr[0];
    const mid = arr[Math.floor(arr.length / 2)];
    const last = arr[arr.length - 1];
    if ((first <= mid && mid <= last) || (last <= mid && mid <= first)) return mid;
    if ((mid <= first && first <= last) || (last <= first && first <= mid)) return first;
    return last;
  }

  function quickSortMedianOfThree(arr) {
    if (arr.length <= 1) return arr;
    let pivot = medianOfThree(arr);
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el >= pivot && el !== pivot);
    return [...quickSortMedianOfThree(left), pivot, ...quickSortMedianOfThree(right)]; // Average-case O(n log n)
  }
  ```

## Dependent on Two Inputs - O(n + m)
- **Description**: The runtime depends on two independent factors, \( n \) and \( m \), typically seen when working with two datasets.
- **Example**: Merging two sorted arrays.

  ```javascript
  function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
      else merged.push(arr2[j++]);
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j)); // O(n + m)
  }
  ```

[:top:](#)

## O(n^k) - Polynomial Time
- **Description**: The runtime is proportional to the size of the input raised to a power \( k \). Common in combinatorial algorithms.
- **Example**: Nested loops running \( k \)-times, or matrix exponentiation.

  ```javascript
  function nestedLoops(n, k) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let m = 0; m < k; m++) {
          // O(n^k)
        }
      }
    }
  }
  ```

[:top:](#)

## O(n log k) - Efficient Search/Insert in Heaps
- **Description**: Seen in algorithms that work with heaps or priority queues, where insertion and deletion are \( O(\log k) \), and \( n \) elements must be processed.
- **Example**: Heap Sort or maintaining a priority queue.

  ```javascript
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      this.heap.push(val);
      this.heapifyUp(); // O(log k)
    }
  
    remove() {
      const root = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.heapifyDown(); // O(log k)
      }
      return root;
    }
  }

  // Example usage of a heap (O(n log k) for n elements with log(k) insertion)
  ```

[:top:](#)
