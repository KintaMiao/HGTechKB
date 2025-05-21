# Python Lists: Simulating Arrays and Linked Lists

In Python, the built-in `list` type is a versatile and powerful data structure that is commonly used to represent arrays. While Python doesn't have a fixed-size array type in its core language like C or Java, Python lists provide dynamic array functionality. This page also briefly explores how lists can be used to simulate concepts from linked lists.

See also the [Python Basics Dictionary](./dictionary.md) for a quick overview of other Python concepts.

## 1. Introduction to Python Lists (as Arrays)

Python's `list` serves as a **dynamic array**. This means it can grow or shrink in size as needed, and you don't have to declare a fixed size when you create it.

**Key Characteristics of Python Lists:**

*   **Mutable:** You can change the content of a list after it's created (e.g., add, remove, or modify elements).
*   **Ordered:** The elements in a list maintain a specific order, and this order is preserved. You can access elements by their position (index).
*   **Heterogeneous (though often used homogeneously):** A single Python list can store elements of different data types (e.g., integers, strings, other lists). However, when using lists to simulate arrays, it's common practice to store elements of the same type for consistency and predictability, similar to traditional arrays.
*   **Dynamic Sizing:** Lists automatically resize themselves when elements are added or removed.

## 2. One-Dimensional Arrays (Lists)

A one-dimensional (1D) list is the simplest form, representing a linear sequence of elements.

### Creating Lists

```python
# Creating an empty list
empty_list = []
print(f"Empty list: {empty_list}")

# Creating a list with initial elements
numbers = [1, 2, 3, 4, 5]
print(f"List of numbers: {numbers}")

fruits = ["apple", "banana", "cherry"]
print(f"List of strings: {fruits}")

mixed_list = [1, "hello", 3.14, True]
print(f"Mixed type list: {mixed_list}")

# Using the list() constructor
from_tuple = list((10, 20, 30)) # From a tuple
print(f"List from tuple: {from_tuple}")
```

### Accessing Elements

*   **Indexing:** Access individual elements using their zero-based index.
*   **Slicing:** Access a sub-list using `start:stop:step` notation.

```python
numbers = [10, 20, 30, 40, 50]

# Indexing
print(f"First element: {numbers[0]}")  # Output: 10
print(f"Third element: {numbers[2]}")  # Output: 30
print(f"Last element: {numbers[-1]}") # Output: 50

# Slicing
print(f"Elements from index 1 to 3 (exclusive): {numbers[1:3]}") # Output: [20, 30]
print(f"Elements from start to index 2 (exclusive): {numbers[:2]}")  # Output: [10, 20]
print(f"Elements from index 2 to end: {numbers[2:]}")      # Output: [30, 40, 50]
print(f"Every second element: {numbers[::2]}")             # Output: [10, 30, 50]
print(f"Reverse the list (slicing): {numbers[::-1]}")         # Output: [50, 40, 30, 20, 10]
```

### Modifying Elements

You can change elements by assigning a new value to a specific index.

```python
fruits = ["apple", "banana", "cherry"]
print(f"Original fruits: {fruits}")

fruits[1] = "blueberry" # Modify the element at index 1
print(f"Modified fruits: {fruits}") # Output: ['apple', 'blueberry', 'cherry']
```

### Common Operations

*   **`append(element)`:** Adds an element to the end of the list.
*   **`insert(index, element)`:** Inserts an element at a specific index.
*   **`remove(element)`:** Removes the first occurrence of a specified element. Raises ValueError if the element is not found.
*   **`pop(index=-1)`:** Removes and returns the element at a specific index (default is the last element).
*   **`len(list)`:** Returns the number of elements in the list (see also [Common Built-in Functions](./dictionary.md#common-built-in-functions)).
*   **Iteration:** Looping through the elements of a list (see [Looping Structures in Python Basics Dictionary](./dictionary.md#looping-structures-iteration)).

```python
my_list = [1, 2, 3]
print(f"Initial list: {my_list}")

# append()
my_list.append(4)
print(f"After append(4): {my_list}") # Output: [1, 2, 3, 4]

# insert()
my_list.insert(1, "new") # Insert "new" at index 1
print(f"After insert(1, 'new'): {my_list}") # Output: [1, 'new', 2, 3, 4]

# remove()
my_list.remove(3)
print(f"After remove(3): {my_list}") # Output: [1, 'new', 2, 4]

# pop()
popped_element = my_list.pop() # Removes and returns the last element (4)
print(f"After pop(): {my_list}, Popped element: {popped_element}") # Output: [1, 'new', 2]

popped_at_index = my_list.pop(0) # Removes and returns element at index 0 (1)
print(f"After pop(0): {my_list}, Popped element: {popped_at_index}") # Output: ['new', 2]

# len()
print(f"Length of list: {len(my_list)}") # Output: 2

# Iteration
print("Iterating through the list:")
for item in my_list:
  print(item)
# Output:
# new
# 2
```

## 3. Two-Dimensional Arrays (Lists of Lists)

A two-dimensional (2D) array can be represented in Python using a list of lists. Each inner list represents a row, and the elements within the inner lists are the columns.

### Concept and Representation

Imagine a grid or a table. A 2D list `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]` would represent:

```
1  2  3  (row 0)
4  5  6  (row 1)
7  8  9  (row 2)
```

### Creating 2D Lists

```python
# Direct creation
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(f"2D Matrix: {matrix}")

# Using nested list comprehensions (e.g., for a 3x3 matrix of zeros)
rows, cols = 3, 3
zero_matrix = [[0 for _ in range(cols)] for _ in range(rows)]
print(f"3x3 Zero Matrix: {zero_matrix}")
# For more on list creation and manipulation, refer to the [Python Basics Dictionary](./dictionary.md#list-operations).
```

### Accessing and Modifying Elements

You use two indices: `matrix[row_index][column_index]`.

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Accessing
print(f"Element at row 0, col 1: {matrix[0][1]}")  # Output: 2
print(f"Element at row 2, col 0: {matrix[2][0]}")  # Output: 7

# Modifying
matrix[1][1] = 55 # Change element at row 1, col 1
print(f"Modified matrix: {matrix}")
# Output: [[1, 2, 3], [4, 55, 6], [7, 8, 9]]
```

### Iterating Through 2D Lists

You typically use nested loops.

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print("Iterating through rows and columns:")
# Iterate by rows
for row_index in range(len(matrix)):
    # Iterate by columns within the current row
    for col_index in range(len(matrix[row_index])):
        print(f"Element at matrix[{row_index}][{col_index}]: {matrix[row_index][col_index]}")

print("\nIterating directly through row lists and elements:")
for row in matrix:        # row is now one of the inner lists
    for element in row: # element is an item from the inner list
        print(element, end=" ")
    print() # Newline after each row
# Output:
# 1 2 3 
# 4 5 6 
# 7 8 9 
```

## 4. Simulating Linked Lists

### Concept of Linked Lists

A **linked list** is a linear data structure where elements are not stored at contiguous memory locations. Instead, elements are stored in **nodes**. Each node typically contains:
1.  **Data:** The actual value of the element.
2.  **Next Pointer/Reference:** A reference to the next node in the sequence. The last node's "next" pointer usually points to `None` (or `null`).

Variations include doubly linked lists (with a pointer to the previous node as well) and circular linked lists.

### Python Lists vs. Classic Linked List Performance

Python's `list` (dynamic array) has different performance characteristics than a classic linked list implemented with nodes and pointers:

*   **Accessing Elements:**
    *   Python List: `O(1)` (direct access by index).
    *   Linked List: `O(n)` (must traverse from the head).
*   **Insertion/Deletion at the Beginning:**
    *   Python List: `O(n)` (all subsequent elements need to be shifted).
    *   Linked List: `O(1)` (update head pointer).
*   **Insertion/Deletion at the End (Amortized for Python List):**
    *   Python List (append): Amortized `O(1)`. Occasionally `O(n)` if resizing is needed.
    *   Linked List: `O(1)` if tail pointer is maintained, otherwise `O(n)` to traverse to the end.
*   **Insertion/Deletion in the Middle:**
    *   Python List: `O(n)` (shifting elements).
    *   Linked List: `O(1)` *after reaching the node* (which takes `O(n)` to find).

Python lists are generally more memory-efficient for storing elements due to contiguity (less overhead per element than separate node objects). However, for scenarios requiring frequent insertions or deletions at arbitrary positions where the position is already known (or can be found quickly), linked lists can be more efficient in terms of operation time (excluding search time).

### Simple Node Class and Manual Linking

Here's how you can define a simple node and manually create a small linked sequence. This is a conceptual simulation; Python doesn't use explicit pointers like C/C++.

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None # Reference to the next node

    def __repr__(self): # For cleaner printing
        return f"Node({self.data})"

# Create nodes
node1 = Node("A")
node2 = Node("B")
node3 = Node("C")

# Link them
node1.next = node2
node2.next = node3

# Traversing the simulated linked list
print("Traversing simulated linked list:")
current = node1
while current:
    print(current.data, end=" -> ")
    current = current.next
print("None")
# Output: A -> B -> C -> None

# A Python list could store these nodes:
linked_list_nodes = [node1, node2, node3]
print(f"\nPython list storing nodes: {linked_list_nodes}")
# The list itself doesn't represent the "links", the 'next' attribute in each node does.
```

### Simulating Linked Lists with Array Indices (Less Common for true LL behavior)

Another way to "simulate" linked lists using arrays (though less common for achieving true linked list performance benefits) is to store indices. For example, each element in an array could be a tuple `(data, next_index)`. This is more akin to how adjacency lists for graphs are sometimes implemented with arrays.

```python
# Example: Simulating A -> B -> C using list indices
# Each element: (data, index_of_next_element_or_-1_if_none)
# This is a more complex and less Pythonic way to simulate basic linked lists
# compared to using node objects.

sim_list = [("A", 1), ("B", 2), ("C", -1)] # -1 indicates end
head_index = 0

print("\nTraversing list simulated with indices:")
current_index = head_index
while current_index != -1:
    data, next_idx = sim_list[current_index]
    print(data, end=" -> ")
    current_index = next_idx
print("None")
# Output: A -> B -> C -> None
```

For most Pythonic use cases requiring dynamic collections, the built-in `list` is sufficient and optimized. If the specific performance characteristics of a linked list (e.g., `O(1)` insertions/deletions at known positions) are paramount, using a custom `Node` class or `collections.deque` (see also [Queues using collections.deque](./queues.md#using-collectionsdeque) for efficient appends/pops from both ends) might be considered. However, for "simulating" arrays, Python lists are the direct and natural choice.
