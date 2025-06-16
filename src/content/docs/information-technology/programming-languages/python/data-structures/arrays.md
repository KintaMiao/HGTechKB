# 数组 (Array)

在 Python 中，虽然没有像 C++ 或 Java 那样内置的、固定大小的原始数组类型，但其内置的 `list` 类型提供了非常灵活和强大的功能，可以被视为动态数组。此外，`array` 模块提供了更接近传统数组的类型，而 `NumPy` 库则是处理数值数组（尤其是大规模多维数组）的事实标准。

本节主要讨论如何使用 Python 的 `list` 来理解和实现数组的概念，以及 `array` 模块的基本使用。

## 概念与特征

数组是一种线性数据结构，它将相同类型的元素存储在连续的内存位置。数组的主要特征包括：

-   **相同类型元素**：传统意义上的数组通常存储相同数据类型的元素（Python 的 `list` 比较灵活，可以存储不同类型的元素，但 `array` 模块的数组要求类型一致）。
-   **连续内存**：元素在内存中是连续存储的，这使得通过索引访问元素非常高效。
-   **固定大小（传统数组）**：传统数组在创建时通常需要指定大小，且大小一般不可变。Python 的 `list` 是动态的，可以随意添加或删除元素。
-   **索引访问**：每个元素都有一个唯一的数字索引，通常从 0 开始，可以通过索引直接访问元素。

## 一维数组

一维数组是最简单的数组形式，可以看作是一系列元素的线性序列。

### 定义与创建

**使用 Python `list`**:
```python
# 创建一个空列表 (模拟空数组)
arr_list_empty = []

# 创建包含初始元素的列表
arr_list = [1, 2, 3, 4, 5]
print(f"List as array: {arr_list}")

# 创建指定长度并用默认值填充的列表 (例如，5个0)
arr_list_zeros = [0] * 5
print(f"List with zeros: {arr_list_zeros}")
```

**使用 `array` 模块** (存储基本 C 样式数据类型，如整数、浮点数):
```python
import array

# 创建一个整数数组 ('i' 表示有符号整数)
arr_int = array.array('i', [10, 20, 30, 40, 50])
print(f"Integer array: {arr_int}")

# 创建一个浮点数数组 ('d' 表示双精度浮点数)
arr_float = array.array('d', [1.5, 2.5, 3.5])
print(f"Float array: {arr_float}")

# 查看类型码
print(f"Type code of arr_int: {arr_int.typecode}")
# 查看元素大小（字节）
print(f"Item size of arr_int: {arr_int.itemsize}")
```
常见的类型码包括：`'b'` (有符号字符), `'B'` (无符号字符), `'h'` (短整型), `'H'` (无符号短整型), `'i'` (整型), `'I'` (无符号整型), `'l'` (长整型), `'L'` (无符号长整型), `'f'` (单精度浮点), `'d'` (双精度浮点)。

### 访问元素
通过索引访问元素，索引从 0 开始。
```python
my_list = [10, 20, 30, 40, 50]

first_element = my_list[0]  # 10
second_element = my_list[1] # 20
last_element = my_list[-1]  # 50 (负数索引从末尾开始)

print(f"First: {first_element}, Second: {second_element}, Last: {last_element}")

# 对于 array 模块的数组也是一样
import array
arr = array.array('i', [1, 2, 3])
print(f"Element at index 1: {arr[1]}") # 2
```

### 修改元素
通过索引可以直接修改元素的值。
```python
my_list = [10, 20, 30]
my_list[1] = 25 # 将索引为1的元素从20修改为25
print(f"Modified list: {my_list}") # [10, 25, 30]

import array
arr = array.array('i', [1, 2, 3])
arr[0] = 100
print(f"Modified array: {arr}") # array('i', [100, 2, 3])
```

### 常见操作（主要针对 `list`）
-   **遍历 (Traversing)**:
    ```python
    my_list = [1, 2, 3, 4, 5]
    for item in my_list:
        print(item)

    for i in range(len(my_list)):
        print(f"Index {i}: {my_list[i]}")
    ```
-   **查找 (Searching)**: `in` 操作符，`index()` 方法
    ```python
    my_list = [10, 20, 30, 40, 30]
    if 30 in my_list:
        print("30 is in the list")

    try:
        first_occurrence_index = my_list.index(30)
        print(f"First occurrence of 30 is at index: {first_occurrence_index}") # 2
    except ValueError:
        print("Element not found")
    ```
-   **插入 (Inserting)**: `append()`, `insert()`
    ```python
    my_list = [1, 2, 3]
    my_list.append(4)       # 在末尾添加元素: [1, 2, 3, 4]
    print(f"After append: {my_list}")
    my_list.insert(1, 1.5)  # 在索引1处插入元素: [1, 1.5, 2, 3, 4]
    print(f"After insert: {my_list}")
    ```
-   **删除 (Deleting)**: `pop()`, `remove()`, `del` 关键字
    ```python
    my_list = [1, 1.5, 2, 3, 4, 3]
    last_item = my_list.pop() # 删除并返回末尾元素: 4. my_list is now [1, 1.5, 2, 3, 3]
    print(f"Popped item: {last_item}, List after pop: {my_list}")

    item_at_index_1 = my_list.pop(1) # 删除并返回索引1处的元素: 1.5. my_list is now [1, 2, 3, 3]
    print(f"Popped item at index 1: {item_at_index_1}, List after pop(1): {my_list}")

    my_list.remove(3) # 删除第一个值为3的元素: my_list is now [1, 2, 3]
    print(f"After remove(3): {my_list}")

    del my_list[0]    # 删除索引0处的元素: my_list is now [2, 3]
    print(f"After del my_list[0]: {my_list}")
    ```

## 二维数组

二维数组可以看作是数组的数组，通常用来表示表格或矩阵结构。

### 定义与创建 (使用 `list` of `list`)
```python
# 创建一个 3x3 的二维列表 (矩阵)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(f"2D Matrix: {matrix}")

# 创建一个 M x N 的二维列表，并用0填充
M = 2 # 行数
N = 3 # 列数
matrix_zeros = [[0 for _ in range(N)] for _ in range(M)]
# [[0, 0, 0], [0, 0, 0]]
print(f"{M}x{N} matrix of zeros: {matrix_zeros}")
```

### 访问元素
通过两个索引访问元素：`matrix[row_index][column_index]`。
```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
element_0_1 = matrix[0][1] # 第0行第1列的元素: 2
element_2_2 = matrix[2][2] # 第2行第2列的元素: 9
print(f"Element at [0][1]: {element_0_1}")
print(f"Element at [2][2]: {element_2_2}")
```

### 修改元素
```python
matrix = [[1, 2, 3], [4, 5, 6]]
matrix[0][0] = 100
print(f"Modified matrix: {matrix}") # [[100, 2, 3], [4, 5, 6]]
```

### 常见操作
-   **遍历**:
    ```python
    matrix = [[1, 2], [3, 4]]
    for row in matrix:
        for element in row:
            print(element, end=" ") # 1 2 3 4 
        print() # 换行

    rows = len(matrix)
    cols = len(matrix[0]) if rows > 0 else 0
    for i in range(rows):
        for j in range(cols):
            print(f"Element at [{i}][{j}]: {matrix[i][j]}")
    ```

## 使用数组模拟链表 (Linked List)

虽然 Python 有更适合实现链表的方式（例如使用类和对象），但有时在特定限制下（如某些算法竞赛平台或教学目的），可能会要求使用数组（通常是静态数组或列表）来模拟链表的行为。这种技术通常被称为“静态链表”。

### 概念
静态链表使用数组的元素来存储链表的节点。每个数组元素通常包含两部分：
1.  **数据域 (data)**：存储节点的值。
2.  **指针域 (cursor/next_index)**：存储下一个节点在数组中的索引。

还需要一个变量来存储头节点的索引，以及一个变量来管理未使用的（空闲的）数组元素的索引列表。

### 节点表示
可以为每个节点创建一个包含数据和下一个节点索引的结构。在 Python 中，可以使用元组、列表或字典来表示数组中的一个“节点”。

例如，使用一个二维列表，其中 `nodes[i][0]` 是数据，`nodes[i][1]` 是下一个节点的索引。
或者使用两个平行的列表：一个存数据 `data_array`，一个存下一个节点的索引 `next_array`。

### 示例：使用两个列表模拟
```python
# 假设数组最大容量
MAX_SIZE = 10

data = [None] * MAX_SIZE  # 存储节点数据
next_ptr = [None] * MAX_SIZE # 存储下一个节点的索引

head = -1  # 链表头指针，-1表示空链表
free_list_head = 0 # 空闲链表头指针

# 初始化空闲链表 (所有节点都可用)
for i in range(MAX_SIZE - 1):
    next_ptr[i] = i + 1
next_ptr[MAX_SIZE - 1] = -1 # 空闲链表末尾

def allocate_node():
    """从空闲链表中分配一个节点"""
    global free_list_head
    if free_list_head == -1:
        raise MemoryError("Static list is full")
    new_node_index = free_list_head
    free_list_head = next_ptr[free_list_head]
    return new_node_index

def free_node(index):
    """释放一个节点到空闲链表"""
    global free_list_head
    next_ptr[index] = free_list_head
    free_list_head = index
    data[index] = None # 清理数据 (可选)

def insert_at_beginning(value):
    """在链表头部插入节点"""
    global head
    new_node_idx = allocate_node()
    data[new_node_idx] = value
    next_ptr[new_node_idx] = head
    head = new_node_idx

def print_linked_list():
    """打印链表内容"""
    current = head
    elements = []
    while current != -1:
        elements.append(data[current])
        current = next_ptr[current]
    print("Linked List:", elements)

# 使用示例
insert_at_beginning(10)
insert_at_beginning(20)
insert_at_beginning(30)
print_linked_list() # Linked List: [30, 20, 10]

# 假设要删除头部节点 (30)
if head != -1:
    node_to_free = head
    head = next_ptr[head]
    free_node(node_to_free)

print_linked_list() # Linked List: [20, 10]

print(f"Data array: {data}")
print(f"Next pointers: {next_ptr}")
print(f"Free list head: {free_list_head}")
```

### 插入操作
在静态链表中插入元素需要从空闲链表中获取一个可用节点的索引，然后更新相关节点的指针域。

### 删除操作
删除元素时，需要将被删除节点的索引归还到空闲链表中，并调整其前驱节点的指针域。

### 遍历操作
从头节点开始，沿着指针域逐个访问节点，直到遇到表示链表末尾的特殊索引（如 -1）。

使用数组模拟链表比 Python 的原生类实现链表要复杂得多，并且失去了 Python 动态性的很多优势。它主要用于理解底层数据结构原理或满足特定环境要求。

对于大多数 Python 应用，直接使用 `list` 作为动态数组，或使用自定义类实现链表是更常见和 Pythonic 的做法。如果需要高性能的数值计算，`NumPy` 数组是首选。
