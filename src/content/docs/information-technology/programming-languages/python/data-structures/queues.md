---
title: queues
---
# 队列 (Queue)

## 概念
队列是一种线性数据结构，遵循**先进先出 (FIFO - First-In, First-Out)** 的原则。这意味着最早进入队列的元素将最先被移除。可以将其想象成现实生活中的排队队伍，先到的人先接受服务。

队列的基本操作包括：
-   **入队 (Enqueue)**：在队列的尾部添加一个元素。
-   **出队 (Dequeue)**：从队列的头部移除一个元素。
-   **查看队首元素 (Peek/Front)**：获取队列头部的元素，但不移除它。
-   **判断队列是否为空 (isEmpty)**：检查队列中是否没有任何元素。
-   **获取队列大小 (Size)**：获取队列中元素的数量。

## Python 实现
Python 中有多种方式可以实现队列：

### 1. 使用 `collections.deque` (推荐)
`collections.deque` (双端队列) 是专门为在两端快速添加和弹出元素而设计的，因此非常适合实现队列和栈。

```python
from collections import deque

# 创建一个空队列
my_queue = deque()

# 入队 (在右端添加)
my_queue.append('A')
my_queue.append('B')
my_queue.append('C')
print(f"Queue after enqueues: {my_queue}") # deque(['A', 'B', 'C'])

# 出队 (从左端移除)
if my_queue: # 检查队列是否为空
    front_element = my_queue.popleft()
    print(f"Dequeued element: {front_element}") # 'A'
    print(f"Queue after dequeue: {my_queue}")   # deque(['B', 'C'])
else:
    print("Queue is empty, cannot dequeue.")

# 查看队首元素
if my_queue:
    peek_element = my_queue[0]
    print(f"Front element (peek): {peek_element}") # 'B'
else:
    print("Queue is empty, cannot peek.")

# 判断队列是否为空
is_empty = not my_queue # 或者 len(my_queue) == 0
print(f"Is queue empty? {is_empty}") # False

# 获取队列大小
queue_size = len(my_queue)
print(f"Queue size: {queue_size}") # 2

# 继续出队直到队列为空
while my_queue:
    print(f"Dequeued: {my_queue.popleft()}")

print(f"Queue after all dequeues: {my_queue}") # deque([])
print(f"Is queue empty now? {not my_queue}")    # True
```

**`deque` 的优点**：
-   `append()` 和 `popleft()` 操作的时间复杂度都是 O(1)，非常高效。
-   线程安全（对于单个操作）。

### 2. 使用列表 (List) (效率较低)
虽然可以使用 Python 的列表来实现队列，但这通常不是最高效的方法，因为在列表的开头插入或删除元素（对应出队操作）的时间复杂度是 O(n)，其中 n 是列表的长度。这是因为列表中的所有后续元素都需要移动。

```python
# 创建一个空列表作为队列
list_queue = []

# 入队 (在列表末尾添加 - O(1) on average)
list_queue.append(10)
list_queue.append(20)
list_queue.append(30)
print(f"List queue after enqueues: {list_queue}") # [10, 20, 30]

# 出队 (从列表开头移除 - O(n))
if list_queue:
    front_element = list_queue.pop(0)
    print(f"Dequeued element: {front_element}") # 10
    print(f"List queue after dequeue: {list_queue}")   # [20, 30]
else:
    print("List queue is empty.")

# 查看队首元素
if list_queue:
    peek_element = list_queue[0]
    print(f"Front element (peek): {peek_element}") # 20
else:
    print("List queue is empty.")

# 判断队列是否为空
is_empty = not list_queue
print(f"Is list queue empty? {is_empty}") # False

# 获取队列大小
queue_size = len(list_queue)
print(f"List queue size: {queue_size}") # 2
```
对于频繁的出队操作，使用列表实现的队列性能会比较差。

### 3. 使用 `queue.Queue` (用于多线程)
Python 的 `queue` 模块提供了一个 `Queue` 类，它是线程安全的，主要用于在多线程环境中生产者和消费者之间传递数据。

```python
import queue

# 创建一个线程安全的队列
thread_safe_queue = queue.Queue()
# q = queue.Queue(maxsize=5) # 可以指定最大容量，如果队列满了，put会阻塞

# 入队
thread_safe_queue.put('Task 1')
thread_safe_queue.put('Task 2')
thread_safe_queue.put('Task 3')
print(f"Thread-safe queue size: {thread_safe_queue.qsize()}")

# 出队
if not thread_safe_queue.empty():
    item = thread_safe_queue.get() # 如果队列为空，get()会阻塞直到有元素
    print(f"Dequeued item: {item}") # 'Task 1'
    # thread_safe_queue.task_done() # 用于生产者-消费者模式，通知任务已完成
else:
    print("Thread-safe queue is empty.")

# 查看队首元素 (Queue 对象没有直接的 peek 方法，需要先 get 再 put回去，或者不消费)
# 通常在多线程场景下，不建议这样做，因为它不是原子操作。
# 如果确实需要，可以这样做（但不推荐用于并发场景的常规操作）：
# if not thread_safe_queue.empty():
#     peek_item = thread_safe_queue.queue[0] # 访问内部 deque
#     print(f"Peek item: {peek_item}")

# 判断队列是否为空
print(f"Is thread-safe queue empty? {thread_safe_queue.empty()}")

# 获取队列大小
print(f"Thread-safe queue size: {thread_safe_queue.qsize()}")

# 清空队列
while not thread_safe_queue.empty():
    thread_safe_queue.get_nowait() # get_nowait() 如果为空立即抛出 Empty 异常

print(f"Thread-safe queue empty after clearing? {thread_safe_queue.empty()}")
```
`queue.Queue` 适用于并发编程，如果只是在单线程中使用队列数据结构，`collections.deque` 是更好的选择。

## 基本操作总结 (以 `collections.deque` 为例)

-   **入队 (Enqueue)**: `my_queue.append(item)`
-   **出队 (Dequeue)**: `item = my_queue.popleft()` (需要先检查队列是否为空)
-   **查看队首元素 (Peek)**: `front_item = my_queue[0]` (需要先检查队列是否为空)
-   **判断队列是否为空**: `is_empty = not my_queue` 或 `is_empty = len(my_queue) == 0`
-   **获取队列大小**: `size = len(my_queue)`

## 应用场景
队列在计算机科学中有广泛的应用，例如：

-   **任务调度**：操作系统中的进程调度，打印机任务队列。
-   **广度优先搜索 (BFS)**：图和树的遍历算法。
-   **数据缓冲**：在数据生产者和消费者速率不同时，用作缓冲区，如网络数据包的接收和处理。
-   **消息队列**：在分布式系统中用于组件间的异步通信。
-   **模拟现实世界中的排队系统**。

选择合适的队列实现取决于具体需求，对于通用单线程场景，`collections.deque` 因其性能和易用性而成为首选。
