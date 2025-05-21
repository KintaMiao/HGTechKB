# Python Stacks

A stack is a fundamental linear data structure that follows the **LIFO (Last-In, First-Out)** principle. This means that the last element added to the stack will be the first one to be removed. Stacks are widely used in computer science for tasks like managing function calls (the [call stack, crucial for recursion](../../algorithms/recursion.md#disadvantages)), parsing expressions, and implementing algorithms like Depth-First Search (DFS).

## 1. Introduction to Stacks

### Concept (LIFO)
The LIFO principle is the defining characteristic of a stack. Elements are added to the "top" of the stack, and elements are removed from the "top" as well. The most recently added item is always the next one to be removed.

### Real-World Analogies
Common analogies for a stack include:
*   A stack of plates: You add new plates to the top, and when you take a plate, you also take it from the top.
*   A pile of books: You place new books on top and remove books from the top.
*   The "Undo" functionality in software: The last action performed is the first one to be undone.

### Basic Stack Operations
The primary operations for a stack are:
*   **Push:** Adds an item to the top of the stack.
*   **Pop:** Removes and returns the item from the top of the stack.
*   **Peek (or Top):** Returns the item at the top of the stack without removing it.
*   **isEmpty:** Checks if the stack is empty.
*   **isFull:** (Less common for dynamically-sized stacks) Checks if the stack is full, typically relevant for fixed-size stack implementations.

## 2. Stack Implementations in Python

Python provides several convenient ways to implement stacks. The most common approach uses Python's built-in lists. `collections.deque` can also be used, and for multi-threading scenarios, `queue.LifoQueue` is available.

### Using Python Lists
Python lists are dynamic arrays and can naturally model a stack. The end of the list can be treated as the top of the stack.

*   **Push:** Use the `append()` method to add an item to the top of the stack (end of the list). This is an O(1) operation on average (amortized constant time).
*   **Pop:** Use the `pop()` method without an index to remove and return the item from the top of the stack (end of the list). This is an O(1) operation.
*   **Peek/Top:** Access the last element using negative indexing (`my_list[-1]`). This is an O(1) operation.
*   **isEmpty:** Check if the list is empty using `len(my_list) == 0` (see also [Common Built-in Functions](./dictionary.md#common-built-in-functions)) or more Pythonically `not my_list`.

**Python Code Example:**

```python
# Initialize an empty list to use as a stack
my_stack = []

# Push items
my_stack.append("Book A")
my_stack.append("Book B")
my_stack.append("Book C")
print(f"Stack after pushing: {my_stack}") # Output: ['Book A', 'Book B', 'Book C']

# Peek at the top item
if my_stack: # Check if not empty
    top_item = my_stack[-1]
    print(f"Top item (peek): {top_item}") # Output: Book C
else:
    print("Stack is empty, cannot peek.")

# Pop items
item1 = my_stack.pop()
print(f"Popped: {item1}") # Output: Book C
print(f"Stack after first pop: {my_stack}") # Output: ['Book A', 'Book B']

item2 = my_stack.pop()
print(f"Popped: {item2}") # Output: Book B
print(f"Stack after second pop: {my_stack}") # Output: ['Book A']

# Check if empty
if not my_stack:
    print("Stack is now empty.")
else:
    print(f"Stack is not empty. Remaining: {my_stack}")

my_stack.pop() # Pop Book A
if not my_stack:
    print("Stack is now empty after popping Book A.") # Output: Stack is now empty...
```
Using a Python list is the most common and idiomatic way to implement a simple stack for single-threaded applications due to its simplicity and efficient O(1) operations for push and pop at one end.

### Using `collections.deque`
While Python lists are generally sufficient for stack operations, `collections.deque` (double-ended queue) can also be used. It provides O(1) time complexity for appends and pops from both ends. For stack behavior, you'd use operations on one end (typically the right end).

*   **Push:** Use `append()` to add an item to the right side (top) of the deque.
*   **Pop:** Use `pop()` to remove and return an item from the right side (top) of the deque.
*   **Peek/Top:** Access the last element using negative indexing (`my_deque[-1]`).
*   **isEmpty:** Check if the deque is empty using `len(my_deque) == 0` (see also [Common Built-in Functions](./dictionary.md#common-built-in-functions)) or `not my_deque`.

**Python Code Example:**

```python
from collections import deque

# Initialize a new deque
deque_stack = deque()

# Push items
deque_stack.append("Task X")
deque_stack.append("Task Y")
deque_stack.append("Task Z")
print(f"Deque stack after pushing: {deque_stack}") # Output: deque(['Task X', 'Task Y', 'Task Z'])

# Peek
if deque_stack:
    top_item = deque_stack[-1]
    print(f"Top item (peek): {top_item}") # Output: Task Z

# Pop items
item_z = deque_stack.pop()
print(f"Popped: {item_z}") # Output: Task Z
print(f"Deque stack after pop: {deque_stack}") # Output: deque(['Task X', 'Task Y'])

# Check if empty
if not deque_stack:
    print("Deque stack is empty.")
```
**When to use `deque` for a stack?**
For typical LIFO stack operations, Python lists are often simpler and perform just as well. `collections.deque` might be chosen if:
*   You need efficient (O(1)) appends and pops from *both* ends of the sequence for other purposes, in addition to using it as a stack.
*   You are working with very large stacks where `deque`'s specific memory allocation strategy might offer benefits (though this is rare for simple stack usage).

### Using `queue.LifoQueue` (for Multi-threading)
The `queue` module provides `LifoQueue`, which is a LIFO queue (stack) designed for thread-safe communication. It's particularly useful when multiple threads need to add or remove items from the stack concurrently, as it handles the necessary locking.

*   **Push:** Use `put(item)` to add an item to the stack.
*   **Pop:** Use `get()` to remove and return an item from the stack.
*   **Other operations:** `qsize()`, `empty()`, `full()`.

**Brief Mention:**
If you are not dealing with threads, `list` or `collections.deque` are generally preferred due to lower overhead (no locking mechanisms).

```python
import queue

# For thread-safe LIFO operations (example is single-threaded for simplicity)
lifo_stack = queue.LifoQueue(maxsize=3) # Optional: set a max size

# Push items
lifo_stack.put("Action 1")
lifo_stack.put("Action 2")
print(f"LifoQueue size: {lifo_stack.qsize()}") # Output: 2

# Pop item
action = lifo_stack.get()
print(f"Got action: {action}") # Output: Action 2
print(f"LifoQueue size after get: {lifo_stack.qsize()}") # Output: 1

# This type of queue is mainly for preventing race conditions in multi-threaded programs.
```

In summary, Python lists provide a very natural and efficient way to implement stacks for most common use cases. `collections.deque` offers an alternative with similar performance for stack operations, and `queue.LifoQueue` is the specialized tool for thread-safe stack implementations.
