# SELECTION SORT & INSERTION SORT PROJECT

## INSERTION SORT 

Insertion sort is a sorting algorithm that works similarly as we sort  playing cards in our hands in a card game. The array is splited into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part one by one.


Sort the array [22,27,16,2,18,6] with insertion sort algorithm.

1. The first element in the array is assumed to be sorted. Take the second element and store it separately in key.

Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.

- Step 1:

key = 27,
[22,27,16,2,18,6]

2. Now, the first two elements are sorted.

Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.

- Step 2:

key = 16,
[16,22,27,2,18,6]

3. Similarly, place every unsorted element at its correct position.

- Step 3:

key = 2,
[2,16,22,27,18,6]

- Step 4:

key = 18,
[2,16,18,22,27,6]

- Step 5:

key = 6,
[2,6,16,18,22,27]

**Sorted Array:**
[2,6,16,18,22,27]

**Number of comparisons:** n(n - 1) nearly equals to $n^2$.

**Time complexity:**
- **Average case complexity;** O($n^2$)

- **Best case complexity;** O($n$)

**Space Complexity:** O(1)

## SELECTION SORT 

The selection sort algorithm sorts the array by finding minimum element of the array and places it at the beginning. The first part of the array will be a sorted array as the action repeated and the remaining part of the array will be an unsorted array. 

Sort the array [22,27,16,2,18,6] with selection sort algorithm.

1. Set the first element as minimum.

2. Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.

Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element.

3. After each iteration, minimum is placed in the front of the unsorted list.

4. For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.

- Step 1:
 Find the minimum element in 
[22,27,16,2,18,6]
and place it at beginning: 
[2,27,16,22,18,6]

- Step 2:
 Find the minimum element in 
[22,27,16,2,18,6]
and place it at beginning of the unsorted part: 
[2,27,16,22,18,6]

- Step 3:
Find the minimum element in 
[2,27,16,22,18,6]
and place it at beginning of the unsorted part: 
[2,6,16,22,18,27]

- Step 4:
Find the minimum element in 
[2,6,16,22,18,27]
and place it at beginning of the unsorted part: 
[2,6,16,18,22,27]

**Sorted Array:**
[2,6,16,18,22,27]


**Number of comparisons:**  (n - 1) + (n - 2) + (n - 3) + ..... + 1 = n(n - 1) / 2 nearly equals to $n^2$.

**Time complexity:** O($n^2$)

**Space Complexity:** O(1)

Since number 18 is locatedin the middle,  after sorting the array, number 18 considered as average case.


First 4 step of the sorting array [7,3,5,8,2,9,4,15,6] with selection sort algorithm.

- Step 1:
[2,3,5,8,7,9,4,15,6]

- Step 2:
[2,3,5,8,7,9,4,15,6]

- Step 3:
[2,3,4,8,7,9,5,15,6]

- Step 4:
[2,3,4,5,7,9,8,15,6]