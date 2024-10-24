# Search Algorithms Cheatsheet

[Back to index](/README.md)

## Search Algorithms Summary Table

| Algorithm                                                      _Code </>_                                                | Time Complexity Best - Worst | Space Complexity      |  Data Structure  | Pros                                          | Cons                                                  |
|--------------------------------------------------------------------------------------------------------------------------------|------------------------------|-----------------------|------------------|-----------------------------------------------|-------------------------------------------------------|
| [**Linear Search**](#1-linear-search)                          [</> :arrow_heading_down:](./linearSearch.md#code-example)      | $O(1)$       - $O(n)$        | $O(1)$                | Array            | Simple, works on unsorted data                | Inefficient for large datasets                        |
| [**Binary Search**](#2-binary-search)                          [</> :arrow_heading_down:](./binarySearch.md#code-example)      | $O(1)$       - $O(\log\ n)$   | $O(1)$ or $O(\log\ n)$ | Array (Sorted)   | Efficient for sorted data                     | Requires data to be sorted                            |
| [**Jump Search**](#3-jump-search)                              [</> :arrow_heading_down:](./jumpSearch.md#code-example)        | $O(\sqrt n)$ - $O(\sqrt n)$  | $O(1)$                | Array (Sorted)   | Faster than linear search for larger datasets | Less efficient than binary search on the same dataset |
| [**Exponential Search**](#4-exponential-search)                [</> :arrow_heading_down:](./exponentialSearch.md#code-example) | $O(1)$       - $O(\log\ n)$   | $O(\log\ n)$           | Array (Sorted)   | Fast for elements near the start of array     | Requires sorted data                                  |
| [**Interpolation Search**](#5-interpolation-search)                                                                            | $O(1)$       - $O(n)$        | $O(1)$                | Array (Sorted)   | Efficient with uniformly distributed data     | Performs poorly with non-uniform data                 |
| [**DFS (Depth-First Search)**](#6-depth-first-search-dfs)                                                                      | $O(V + E)$   - $O(V + E)$    | $O(V)$                | Graph            | Memory efficient, finds deeper solutions      | Can get stuck in deep branches                        |
| [**BFS (Breadth-First Search)**](#7-breadth-first-search-bfs)                                                                  | $O(V + E)$   - $O(V + E)$    | $O(V)$                | Graph            | Finds shortest path in unweighted graphs      | High memory usage for wide graphs                     |
| [**A\* Search**](#8-a-search)                                                                                                  | $O(E)$       - $O(E)$        | $O(V)$                | Graph            | Efficient with good heuristics                | Heavily depends on the quality of the heuristic       |
| [**UCS (Uniform-Cost Search)**](#9-uniform-cost-search)                                                                        | $O(V + E)$   - $O(V + E)$    | $O(V)$                | Graph            | Guarantees shortest path in weighted graphs   | Can be slow in large graphs                           |
| [**Greedy Best-First Search**](#10-greedy-best-first-search)                                                                   | $O(E)$       - $O(E)$        | $O(V)$               |                  | Faster in some cases                          | Not optimal, may lead to suboptimal solutions         |

---

- **V**: Number of vertices (nodes)
- **E**: Number of edges
- **n**: Number of elements in the dataset


[:top:](#search-algorithms-summary-table)

## 1. **Linear Search**

[Code Example :arrow_heading_down:](./linearSearch.md#code-example)

- **Description**: Searches each element of a list sequentially until a match is found.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(n)$
- **Space Complexity**: $O(1)$
- **Pros**: Simple, works on unsorted data.
- **Cons**: Inefficient for large datasets.

[:top:](#search-algorithms-summary-table)

## 2. **Binary Search**

[Code Example :arrow_heading_down:](./binarySearch.md#code-example)

- **Description**: Efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(\log\ n)$
- **Space Complexity**: $O(1)$ (Iterative) or $O(\log\ n)$ (Recursive)
- **Pros**: Very efficient for large, sorted datasets.
- **Cons**: Requires data to be sorted.

[:top:](#search-algorithms-summary-table)

## 3. **Jump Search**

[Code Example :arrow_heading_down:](./jumpSearch.md#code-example)

- **Description**: Searches in sorted arrays by jumping ahead by a fixed step size and then performing a linear search in the block where the element is located.
- **Time Complexity**: 
  - Best: $O(\sqrt n)$
  - Worst: $O(\sqrt n)$
- **Space Complexity**: $O(1)$
- **Pros**: Optimized for larger datasets compared to linear search.
- **Cons**: Less efficient than binary search on the same dataset.

[:top:](#search-algorithms-summary-table)

## 4. **Exponential Search**

[Code Example :arrow_heading_down:](./exponentialSearch.md#code-example)

[Compare vs Binary Search :arrow_heading_down:](./exponentialSearch.md#compare-vs-binary-search)

- **Description**: Finds range where an element may exist, and then uses binary search to find the element within the range.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(\log\ n)$
- **Space Complexity**: $O(\log\ n)$
- **Pros**: Efficient when the element is near the start of the array.
- **Cons**: Requires sorted data.

[:top:](#search-algorithms-summary-table)

## 5. **Interpolation Search**

[Code Example :arrow_heading_down:](./interpolationSearch.md#code-example)

- **Description**: A search algorithm that assumes the elements are uniformly distributed and uses this information to probe the position.
- **Time Complexity**: 
  - Best: $O(1)$
  - Worst: $O(n)$
- **Space Complexity**: $O(1)$
- **Pros**: Efficient with uniformly distributed data.
- **Cons**: Can perform poorly on non-uniform data.

[:top:](#search-algorithms-summary-table)

## 6. **Depth-First Search (DFS)**
- **Description**: Explores as far as possible along a branch before backtracking.
- **Time Complexity**: $O(V + E)$, where V is the number of vertices and E is the number of edges.
- **Space Complexity**: $O(V)$
- **Pros**: Memory efficient for wide graphs, finds deeper solutions faster.
- **Cons**: Can get stuck in deep branches, may miss shallow solutions.

[:top:](#search-algorithms-summary-table)

## 7. **Breadth-First Search (BFS)**
- **Description**: Explores all nodes at the present depth before moving to nodes at the next depth level.
- **Time Complexity**: $O(V + E)$, where V is the number of vertices and E is the number of edges.
- **Space Complexity**: $O(V)$
- **Pros**: Finds shortest path in unweighted graphs, complete and optimal for finite graphs.
- **Cons**: High memory usage, especially for wide graphs.

[:top:](#search-algorithms-summary-table)

## 8. **A\* Search**
- **Description**: An informed search algorithm that uses a heuristic to find the shortest path.
- **Time Complexity**: $O(E)$, where E is the number of edges.
- **Space Complexity**: $O(V)$
- **Pros**: Finds optimal path efficiently with good heuristics.
- **Cons**: Depends heavily on the quality of the heuristic.

[:top:](#search-algorithms-summary-table)

## 9. **Uniform-Cost Search (UCS)**
- **Description**: A variant of BFS where the lowest cost node is expanded first.
- **Time Complexity**: $O(V + E)$
- **Space Complexity**: $O(V)$
- **Pros**: Guarantees the shortest path in weighted graphs.
- **Cons**: Can be slow in large graphs with high branching factors.

[:top:](#search-algorithms-summary-table)

## 10. **Greedy Best-First Search**
- **Description**: Expands the node that is closest to the goal (according to the heuristic).
- **Time Complexity**: $O(E)$, where E is the number of edges.
- **Space Complexity**: $O(V)$
- **Pros**: Faster than A* in some cases.
- **Cons**: Not optimal, may lead to suboptimal solutions.

[:top:](#search-algorithms-summary-table)

---

### Legend:
- **V**: Number of vertices (nodes)
- **E**: Number of edges
- **n**: Number of elements in the dataset

[:top:](#search-algorithms-summary-table)