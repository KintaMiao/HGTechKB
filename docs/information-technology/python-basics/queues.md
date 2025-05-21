# Python Queues

A queue is a linear data structure that follows the **FIFO (First-In, First-Out)** principle. This means that the first element added to the queue will be the first one to be removed. Queues are commonly used in computer science for managing tasks, handling requests, and in algorithms like Breadth-First Search (BFS).

## 1. Introduction to Queues

### Concept (FIFO)
The FIFO principle is the defining characteristic of a queue. New elements are added to one end (often called the **rear** or **tail**), and elements are removed from the other end (often called the **front** or **head**).

### Real-World Analogies
Think of a queue like:
*   A line of people waiting for a checkout counter at a supermarket. The first person to join the line is the first person to be served.
*   Cars waiting at a traffic light.
*   A print queue where print jobs are processed in the order they were submitted.

### Basic Queue Operations
Standard operations for a queue include (understanding these operations is fundamental to analyzing an algorithm's [efficiency](../../algorithms/efficiency.md)):
*   **Enqueue:** Adds an item to the rear of the queue.
*   **Dequeue:** Removes and returns the item from the front of the queue.
*   **Peek (or Front):** Returns the item at the front of the queue without removing it.
*   **isEmpty:** Checks if the queue is empty.
*   **isFull:** (Less common for dynamically-sized queues) Checks if the queue is full, typically relevant for fixed-size queue implementations.

## 2. Queue Implementations in Python

Python offers several ways to implement queues. The most common and efficient methods involve using `collections.deque` or Python lists (with some caveats). For multi-threading scenarios, the `queue.Queue` class is preferred.

### Using `collections.deque`
The `collections.deque` (double-ended queue) object from Python's `collections` module is the recommended and most Pythonic way to implement a general-purpose FIFO queue for single-threaded applications. It is specifically designed for fast, O(1) (constant time) appends and pops from both ends, which makes it highly efficient for both enqueue and dequeue operations.

*   **Enqueue:** Use `append()` to add an item to the right (rear) of the deque. This is an O(1) operation.
*   **Dequeue:** Use `popleft()` to remove and return an item from the left (front) of the deque. This is an O(1) operation.
*   **Peek/Front:** Access the element at index `0` (e.g., `my_deque[0]`). This is O(1).
*   **isEmpty:** Check if the deque is empty using `len(my_deque) == 0` (see also [Common Built-in Functions](./dictionary.md#common-built-in-functions)) or more Pythonically `not my_deque`.

**Python Code Example:**

```python
from collections import deque

# Initialize a new deque
my_queue = deque()

# Enqueue items
my_queue.append("Alice")
my_queue.append("Bob")
my_queue.append("Charlie")
print(f"Queue after enqueuing: {my_queue}") # Output: deque(['Alice', 'Bob', 'Charlie'])

# Peek at the front item
if my_queue: # Check if not empty
    front_item = my_queue[0]
    print(f"Front item (peek): {front_item}") # Output: Alice
else:
    print("Queue is empty, cannot peek.")

# Dequeue items
item1 = my_queue.popleft()
print(f"Dequeued: {item1}") # Output: Alice
print(f"Queue after first dequeue: {my_queue}") # Output: deque(['Bob', 'Charlie'])

item2 = my_queue.popleft()
print(f"Dequeued: {item2}") # Output: Bob
print(f"Queue after second dequeue: {my_queue}") # Output: deque(['Charlie'])

# Check if empty
if not my_queue:
    print("Queue is now empty.")
else:
    print(f"Queue is not empty. Remaining: {my_queue}")

my_queue.popleft() # Dequeue Charlie
if not my_queue:
    print("Queue is now empty after dequeuing Charlie.") # Output: Queue is now empty...
```

### Using Python Lists (with performance considerations)
Python lists can also be used to simulate a queue, but they are not as efficient for this purpose as `collections.deque`, especially for dequeue operations.

*   **Enqueue:** Use `append()` to add an item to the end of the list. This operation is amortized O(1).
*   **Dequeue:** Use `pop(0)` to remove an item from the beginning of the list. **This operation is O(n)** (linear time complexity, as explained in [Algorithm Efficiency](../../algorithms/efficiency.md#on---linear-time)) because all subsequent elements in the list must be shifted one position to the left.
*   **Peek/Front:** Access the element at index `0` (e.g., `my_list[0]`). This is O(1).
*   **isEmpty:** Check if the list is empty using `len(my_list) == 0` (see also [Common Built-in Functions](./dictionary.md#common-built-in-functions)) or `not my_list`.

**Python Code Example:**

```python
# Initialize a list to use as a queue
my_list_queue = []

# Enqueue items
my_list_queue.append("Task 1")
my_list_queue.append("Task 2")
my_list_queue.append("Task 3")
print(f"List queue after enqueuing: {my_list_queue}") # Output: ['Task 1', 'Task 2', 'Task 3']

# Peek at the front item
if my_list_queue:
    front_item = my_list_queue[0]
    print(f"Front item (peek): {front_item}") # Output: Task 1
else:
    print("List queue is empty, cannot peek.")

# Dequeue items
item1 = my_list_queue.pop(0) # Inefficient operation (O(n))
print(f"Dequeued: {item1}") # Output: Task 1
print(f"List queue after first dequeue: {my_list_queue}") # Output: ['Task 2', 'Task 3']

item2 = my_list_queue.pop(0)
print(f"Dequeued: {item2}") # Output: Task 2
print(f"List queue after second dequeue: {my_list_queue}") # Output: ['Task 3']

# Check if empty
if not my_list_queue:
    print("List queue is now empty.")
else:
    print(f"List queue is not empty. Remaining: {my_list_queue}")
```

**Performance Notes for Lists as Queues:**
*   Using `list.pop(0)` for dequeue operations can lead to poor performance for large queues due to its O(n) time complexity.
*   Lists might be acceptable for very small queues or when performance is not a critical concern and simplicity is prioritized.
*   For most general-purpose queue needs, `collections.deque` is the superior choice due to its O(1) efficiency for both enqueue and dequeue.

### Using `queue.Queue` (for Multi-threading)
The `queue` module provides the `Queue` class, which is specifically designed for safe communication between multiple threads (multi-producer, multi-consumer queues). It handles all necessary locking semantics.

*   **Enqueue:** Use `put(item)` to add an item to the queue. This method can block if the queue has a maximum size and is full.
*   **Dequeue:** Use `get()` to remove and return an item from the queue. This method can block if the queue is empty.
*   **Other operations:** `qsize()`, `empty()`, `full()`, `task_done()`, `join()`.

**Brief Mention:**
While `queue.Queue` can be used as a general queue, its primary purpose is for concurrent execution environments. If you are not working with threads, `collections.deque` is generally more appropriate and often faster for single-threaded scenarios due to the absence of locking overhead.

```python
import queue

# For thread-safe operations (example is single-threaded for simplicity)
thread_safe_queue = queue.Queue(maxsize=5) # Optional: set a max size

# Enqueue
thread_safe_queue.put("Job A")
thread_safe_queue.put("Job B")
print(f"Thread-safe queue size: {thread_safe_queue.qsize()}")

# Dequeue
job = thread_safe_queue.get()
print(f"Got job: {job}")
print(f"Thread-safe queue size after get: {thread_safe_queue.qsize()}")

# This type of queue is mainly for preventing race conditions in multi-threaded programs.
```

In summary, `collections.deque` is the go-to for efficient FIFO queue implementation in Python for single-threaded applications, while lists can be used for simplicity with small queues, and `queue.Queue` is designed for multi-threaded contexts.
