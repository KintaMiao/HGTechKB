---
title: stacks
---
# 栈 (Stack)

## 概念
栈是一种线性数据结构，遵循**后进先出 (LIFO - Last-In, First-Out)** 的原则。这意味着最后进入栈的元素将最先被移除。可以将其想象成一叠盘子，最后放上去的盘子最先被取走。

栈的基本操作包括：
-   **入栈 (Push)**：在栈的顶部添加一个元素。
-   **出栈 (Pop)**：从栈的顶部移除一个元素，并返回该元素。
-   **查看栈顶元素 (Peek/Top)**：获取栈顶部的元素，但不移除它。
-   **判断栈是否为空 (isEmpty)**：检查栈中是否没有任何元素。
-   **获取栈的大小 (Size)**：获取栈中元素的数量。

## Python 实现
Python 中有多种方式可以实现栈：

### 1. 使用列表 (List) (常用且简单)
Python 的列表类型具有 `append()` 方法（在末尾添加元素，相当于入栈）和 `pop()` 方法（默认移除并返回末尾元素，相当于出栈），这两个操作的平均时间复杂度都是 O(1)。因此，列表是实现栈的一种非常自然和简单的方式。

```python
# 创建一个空列表作为栈
my_stack = []

# 入栈 (在列表末尾添加)
my_stack.append(10)
my_stack.append(20)
my_stack.append(30)
print(f"Stack after pushes: {my_stack}") # [10, 20, 30]

# 出栈 (从列表末尾移除)
if my_stack: # 检查栈是否为空
    top_element = my_stack.pop()
    print(f"Popped element: {top_element}") # 30
    print(f"Stack after pop: {my_stack}")    # [10, 20]
else:
    print("Stack is empty, cannot pop.")

# 查看栈顶元素
if my_stack:
    peek_element = my_stack[-1] # 访问最后一个元素
    print(f"Top element (peek): {peek_element}") # 20
else:
    print("Stack is empty, cannot peek.")

# 判断栈是否为空
is_empty = not my_stack # 或者 len(my_stack) == 0
print(f"Is stack empty? {is_empty}") # False

# 获取栈的大小
stack_size = len(my_stack)
print(f"Stack size: {stack_size}") # 2

# 继续出栈直到栈为空
while my_stack:
    print(f"Popped: {my_stack.pop()}")

print(f"Stack after all pops: {my_stack}") # []
print(f"Is stack empty now? {not my_stack}") # True
```

### 2. 使用 `collections.deque`
`collections.deque` (双端队列) 也可以高效地用作栈。它提供了 `append()` (在右端添加，相当于入栈) 和 `pop()` (从右端移除，相当于出栈) 方法，这两个操作的时间复杂度都是 O(1)。

```python
from collections import deque

# 创建一个空 deque 作为栈
deque_stack = deque()

# 入栈
deque_stack.append('X')
deque_stack.append('Y')
deque_stack.append('Z')
print(f"Deque stack after pushes: {deque_stack}") # deque(['X', 'Y', 'Z'])

# 出栈
if deque_stack:
    top_element = deque_stack.pop()
    print(f"Popped element: {top_element}") # 'Z'
    print(f"Deque stack after pop: {deque_stack}")   # deque(['X', 'Y'])
else:
    print("Deque stack is empty.")

# 查看栈顶元素
if deque_stack:
    peek_element = deque_stack[-1] # 访问最后一个元素
    print(f"Top element (peek): {peek_element}") # 'Y'
else:
    print("Deque stack is empty.")

# 判断栈是否为空
is_empty = not deque_stack
print(f"Is deque stack empty? {is_empty}") # False

# 获取栈的大小
stack_size = len(deque_stack)
print(f"Deque stack size: {stack_size}") # 2
```
对于单线程应用，使用列表或 `collections.deque` 实现栈在性能上差异不大，列表可能因其普遍性和简单性而更常见。

### 3. 使用 `queue.LifoQueue` (用于多线程)
Python 的 `queue` 模块提供了一个 `LifoQueue` 类（Last-In, First-Out Queue），它是线程安全的，专门为实现栈而设计，主要用于多线程环境。

```python
import queue

# 创建一个线程安全的 LIFO 队列 (栈)
lifo_stack = queue.LifoQueue()
# lifo_q = queue.LifoQueue(maxsize=3) # 可以指定最大容量

# 入栈
lifo_stack.put(100)
lifo_stack.put(200)
lifo_stack.put(300)
print(f"LifoQueue size: {lifo_stack.qsize()}")

# 出栈
if not lifo_stack.empty():
    item = lifo_stack.get() # 如果栈为空，get()会阻塞
    print(f"Popped item from LifoQueue: {item}") # 300
    # lifo_stack.task_done() # 如果用于生产者-消费者模式
else:
    print("LifoQueue is empty.")

# 查看栈顶元素 (LifoQueue 没有直接的 peek 方法)
# 与 Queue 类似，不推荐在并发场景下直接访问内部结构来 peek。

# 判断栈是否为空
print(f"Is LifoQueue empty? {lifo_stack.empty()}")

# 获取栈的大小
print(f"LifoQueue size: {lifo_stack.qsize()}")
```
`queue.LifoQueue` 适用于并发编程。如果只是在单线程中使用栈数据结构，使用列表或 `collections.deque` 更为简洁高效。

## 基本操作总结 (以列表实现为例)

-   **入栈 (Push)**: `my_stack.append(item)`
-   **出栈 (Pop)**: `item = my_stack.pop()` (需要先检查栈是否为空)
-   **查看栈顶元素 (Peek)**: `top_item = my_stack[-1]` (需要先检查栈是否为空)
-   **判断栈是否为空**: `is_empty = not my_stack` 或 `is_empty = len(my_stack) == 0`
-   **获取栈的大小**: `size = len(my_stack)`

## 应用场景
栈在计算机科学中有许多重要的应用，包括：

-   **函数调用管理**：编程语言使用调用栈 (Call Stack) 来跟踪函数调用的顺序、局部变量和返回地址。
-   **表达式求值**：如中缀表达式转后缀表达式（逆波兰表示法），以及后缀表达式的求值。
-   **语法分析**：编译器使用栈进行语法分析。
-   **深度优先搜索 (DFS)**：图和树的遍历算法中，递归版本的 DFS 隐式使用调用栈，迭代版本的 DFS 可以显式使用栈。
-   **回溯算法 (Backtracking)**：在解决迷宫、N皇后等问题时，栈可以用来保存路径或状态。
-   **撤销/重做 (Undo/Redo) 功能**：编辑器或应用程序中的撤销操作通常使用栈来实现。
-   **括号匹配检查**：检查表达式中的括号是否正确配对。

由于其 LIFO 的特性，栈非常适合处理那些需要“后处理”或“逆序处理”的任务。
