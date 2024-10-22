# Heap Sort

[Back to index](/README.md)

## Summary
Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. It organizes the elements into a max heap (or min heap) and then repeatedly extracts the largest (or smallest) element, placing it in the correct sorted position. The algorithm works in-place and has a time complexity of **O(n log n)**.

---

## Step-by-Step Breakdown

1. **Build a Max Heap**:
   - Rearrange the input array into a max heap so that the largest value is at the root (top).

2. **Extract the Largest Element**:
   - Swap the root (largest element) with the last element in the heap.
   - Decrease the size of the heap by one, effectively placing the largest element at the end of the array in its sorted position.

3. **Heapify the Remaining Elements**:
   - Restore the heap property for the remaining unsorted portion of the array by "heapifying" the new root (i.e., moving the new root down the tree to the correct position).

4. **Repeat**:
   - Continue extracting the largest element and heapifying until the entire array is sorted.

---

## Explanation of Concepts

### Complete Binary Tree
A **binary heap** is structured as a **complete binary tree**, which means:
- Every level of the tree is fully filled except possibly for the last level.
- The nodes at the last level are filled from left to right without gaps.

### Heap Property
The **heap property** ensures the correct ordering in the binary heap:
- In a **Max Heap**, every parent node has a value greater than or equal to its children. This ensures the largest element is always at the root.
- In a **Min Heap**, every parent node has a value less than or equal to its children, so the smallest element is at the root.

### Heapify
**Heapify** is the process of adjusting a binary heap to maintain the heap property:
- When the root (or another node) violates the heap property after a swap, heapify restores the order by "trickling down" the root to its correct position in the heap.

---

## Example: Sorting `[10, 5, 3, 4, 1]` Using Heap Sort

### 1. Build a Max Heap
The input array `[10, 5, 3, 4, 1]` is already in a state where the largest element (10) is at the root. So no rearrangement is needed.

### 2. Binary Heap Form
The max heap representation of the array `[10, 5, 3, 4, 1]` as a binary tree looks like this:

```
        10
       /  \
      5    3
     / \
    4   1
```

- 10 is the root (largest element), and every parent node is greater than its children.

### 3. Array Form
In array form, the binary heap is stored as: `[10, 5, 3, 4, 1]`.

---

### Sorting the Heap

1. **Step 1: Swap and Heapify**
   - Swap the root (10) with the last element (1): `[1, 5, 3, 4, 10]`
   - Heapify the reduced heap `[1, 5, 3, 4]`:
     ```
            5
           / \
          4   3
         /
        1
     ```
   - Updated array: `[5, 4, 3, 1, 10]`.

2. **Step 2: Swap and Heapify**
   - Swap the root (5) with the last element of the reduced heap (1): `[1, 4, 3, 5, 10]`
   - Heapify the reduced heap `[1, 4, 3]`:
     ```
            4
           / \
          1   3
     ```
   - Updated array: `[4, 1, 3, 5, 10]`.

3. **Step 3: Swap and Heapify**
   - Swap the root (4) with the last element (3): `[3, 1, 4, 5, 10]`
   - Heapify the reduced heap `[3, 1]`:
     ```
            3
           /
          1
     ```
   - Updated array: `[3, 1, 4, 5, 10]`.

4. **Step 4: Final Swap**
   - Swap the root (3) with the last element (1): `[1, 3, 4, 5, 10]`.
   - Now the array is fully sorted.

---

## Final Sorted Array
`[1, 3, 4, 5, 10]`

[Back to top](#heap-sort)
