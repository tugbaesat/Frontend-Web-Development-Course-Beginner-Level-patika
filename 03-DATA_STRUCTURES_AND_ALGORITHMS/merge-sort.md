# MERGE SORT PROJECT

The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.

In this sorting algorithm, a problem is divided into multiple sub-problems. Each sub-problem is solved individually. Finally, sub-problems are combined to form the final solution.

1. Divide the whole array iteratively into equal halves.

2. Compare the element for each list and then combine them into another list in a sorted manner.

- Step 1:
[16,21,11,8,12,22] 

- Step 2:
[16,21,11] [8,12,22] 

- Step 3:
[16,21] [11] [8,12] [22] 

- Step 4:
[16] [21] [11] [8] [12] [22] 

- Step 5:
[16,21] [11] [8,12] [22] 

- Step 6:
[11,16,21] [8,12,22] 

- Step 7:
[8,11,12,16,21,22] 

**Time Complexity**
Best Case Complexity: O(n*log n)

Worst Case Complexity: O(n*log n)

Average Case Complexity: O(n*log n)

**Space Complexity**
The space complexity: O(n).