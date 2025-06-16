---
title: 顺序查找
---
# 顺序查找 (Sequential Search)

## 概念
顺序查找，也称为线性查找 (Linear Search)，是最简单的一种查找算法。它从数据结构（如列表、数组）的第一个元素开始，逐个将元素与目标值进行比较，直到找到目标值或遍历完所有元素为止。

## 算法步骤
1. 从数据结构的第一个元素开始。
2. 将当前元素与目标值进行比较。
3. 如果当前元素等于目标值，则查找成功，返回当前元素的位置（索引）或相关信息。
4. 如果当前元素不等于目标值，则移动到下一个元素。
5. 重复步骤 2-4，直到找到目标值或已检查完所有元素。
6. 如果遍历完所有元素仍未找到目标值，则查找失败，返回一个表示未找到的特殊值（如 -1 或 None）。

## 伪代码
```
function SequentialSearch(list, targetValue)
  for each element in list:
    if element equals targetValue then
      return index of element
  return notFound // 或者 -1, null 等
```

## Python 实现示例

```python
def sequential_search(arr, target):
    for i in range(len(arr)):  # 从头开始逐个比对
        if arr[i] == target:   # 找到目标值
            return i
    return -1  # 未找到返回 -1

numbers = [4, 2, 7, 1, 9, 5, 3]
print(sequential_search(numbers, 5))  # 输出: 5
```

## 时间复杂度
- **最坏情况时间复杂度**: O(n) - 当目标元素是列表中的最后一个元素，或者目标元素不在列表中时，需要比较 n 次（n 为列表长度）。
- **最好情况时间复杂度**: O(1) - 当目标元素是列表中的第一个元素时，只需要比较 1 次。
- **平均情况时间复杂度**: O(n) - 假设目标元素在列表中均匀分布，平均需要比较 n/2 次。

## 空间复杂度
O(1) - 顺序查找只需要常数级别的额外空间来存储临时变量（如循环计数器）。

## 优缺点
**优点**：
- **简单易懂**：算法逻辑简单，易于实现和理解。
- **适用性广**：对数据没有特定要求，无论数据是否有序，都可以使用顺序查找。
- **适用于链表**：对于链式存储结构，顺序查找是主要的查找方式之一，因为链表不支持快速随机访问。

**缺点**：
- **效率较低**：当数据量很大时，查找效率较低，尤其是当目标元素位于列表末尾或不存在时。
- **不适合大规模数据**：对于大规模数据集，O(n) 的时间复杂度通常是不可接受的。

## 顺序查找的变种和优化

### 1. 查找所有匹配项

```python
def sequential_search_all(arr, target):
    """查找所有匹配项的位置"""
    positions = []
    for i in range(len(arr)):
        if arr[i] == target:
            positions.append(i)
    return positions

# 示例使用
numbers = [1, 3, 5, 3, 7, 3, 9]
positions = sequential_search_all(numbers, 3)
print(f"元素3在数组中的所有位置: {positions}")  # 输出: [1, 3, 5]
```

### 2. 带计数的查找

```python
def sequential_search_with_count(arr, target):
    """查找元素并返回出现次数"""
    count = 0
    first_position = -1

    for i in range(len(arr)):
        if arr[i] == target:
            if first_position == -1:
                first_position = i
            count += 1

    return first_position, count

# 示例使用
numbers = [1, 3, 5, 3, 7, 3, 9]
position, count = sequential_search_with_count(numbers, 3)
print(f"元素3首次出现位置: {position}, 总共出现: {count}次")
```

### 3. 哨兵查找（优化版本）

```python
def sentinel_search(arr, target):
    """
    哨兵查找：在数组末尾添加目标元素作为哨兵
    可以减少循环中的边界检查
    """
    n = len(arr)
    if n == 0:
        return -1

    # 保存原来的最后一个元素
    last = arr[n - 1]

    # 将目标值作为哨兵放在最后
    arr[n - 1] = target

    i = 0
    while arr[i] != target:
        i += 1

    # 恢复原来的最后一个元素
    arr[n - 1] = last

    # 如果在最后一个位置找到，且原来的值就是目标值
    if i == n - 1 and last == target:
        return i
    # 如果在其他位置找到
    elif i < n - 1:
        return i
    # 没有找到
    else:
        return -1

# 示例使用
numbers = [4, 2, 7, 1, 9, 5, 3]
result = sentinel_search(numbers, 7)
print(f"哨兵查找结果: {result}")
```

### 4. 自组织查找

```python
def self_organizing_search(arr, target):
    """
    自组织查找：找到元素后将其移到前面
    对于频繁查找的元素可以提高效率
    """
    for i in range(len(arr)):
        if arr[i] == target:
            # 将找到的元素移到数组前面
            if i > 0:
                arr[0], arr[i] = arr[i], arr[0]
            return 0  # 返回新位置
    return -1

# 示例使用
numbers = [4, 2, 7, 1, 9, 5, 3]
print(f"原数组: {numbers}")
result = self_organizing_search(numbers, 7)
print(f"查找7后的数组: {numbers}")
print(f"元素7的新位置: {result}")
```

## 不同数据类型的顺序查找

### 1. 字符串查找

```python
def search_in_strings(string_list, target):
    """在字符串列表中查找"""
    for i, string in enumerate(string_list):
        if string == target:
            return i
    return -1

def search_substring(string_list, substring):
    """查找包含子字符串的字符串"""
    results = []
    for i, string in enumerate(string_list):
        if substring in string:
            results.append((i, string))
    return results

# 示例使用
words = ["apple", "banana", "cherry", "date", "elderberry"]
print(f"查找'cherry': {search_in_strings(words, 'cherry')}")
print(f"包含'er'的字符串: {search_substring(words, 'er')}")
```

### 2. 对象查找

```python
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def __str__(self):
        return f"Student({self.name}, {self.age}, {self.grade})"

def search_student_by_name(students, name):
    """按姓名查找学生"""
    for i, student in enumerate(students):
        if student.name == name:
            return i, student
    return -1, None

def search_students_by_grade(students, grade):
    """查找指定年级的所有学生"""
    results = []
    for i, student in enumerate(students):
        if student.grade == grade:
            results.append((i, student))
    return results

# 示例使用
students = [
    Student("Alice", 20, "A"),
    Student("Bob", 19, "B"),
    Student("Charlie", 21, "A"),
    Student("Diana", 20, "C")
]

index, student = search_student_by_name(students, "Bob")
print(f"找到学生: {student}")

grade_a_students = search_students_by_grade(students, "A")
print(f"A年级学生: {[str(s[1]) for s in grade_a_students]}")
```

### 3. 条件查找

```python
def search_by_condition(arr, condition_func):
    """根据条件函数查找元素"""
    results = []
    for i, item in enumerate(arr):
        if condition_func(item):
            results.append((i, item))
    return results

def find_first_by_condition(arr, condition_func):
    """查找第一个满足条件的元素"""
    for i, item in enumerate(arr):
        if condition_func(item):
            return i, item
    return -1, None

# 示例使用
numbers = [1, 15, 23, 8, 42, 7, 19]

# 查找所有偶数
even_numbers = search_by_condition(numbers, lambda x: x % 2 == 0)
print(f"偶数: {even_numbers}")

# 查找第一个大于20的数
index, value = find_first_by_condition(numbers, lambda x: x > 20)
print(f"第一个大于20的数: 位置{index}, 值{value}")
```

## 性能分析和比较

```python
import time
import random

def performance_analysis():
    """分析不同查找方法的性能"""

    # 生成测试数据
    sizes = [1000, 5000, 10000, 50000]

    for size in sizes:
        data = list(range(size))
        random.shuffle(data)

        # 查找最后一个元素（最坏情况）
        target = data[-1]

        # 测试基础顺序查找
        start = time.time()
        sequential_search(data, target)
        basic_time = time.time() - start

        # 测试哨兵查找
        start = time.time()
        sentinel_search(data.copy(), target)
        sentinel_time = time.time() - start

        print(f"数据规模: {size}")
        print(f"  基础顺序查找: {basic_time:.6f}秒")
        print(f"  哨兵查找: {sentinel_time:.6f}秒")
        print(f"  性能提升: {basic_time/sentinel_time:.2f}倍")
        print()

def compare_with_builtin():
    """与Python内置方法比较"""
    data = list(range(10000))
    random.shuffle(data)
    target = data[-1]

    # 自实现的顺序查找
    start = time.time()
    result1 = sequential_search(data, target)
    custom_time = time.time() - start

    # Python内置的index方法
    start = time.time()
    try:
        result2 = data.index(target)
    except ValueError:
        result2 = -1
    builtin_time = time.time() - start

    print(f"自实现顺序查找: {custom_time:.6f}秒, 结果: {result1}")
    print(f"内置index方法: {builtin_time:.6f}秒, 结果: {result2}")
    print(f"性能差距: {custom_time/builtin_time:.2f}倍")

# 运行性能分析
performance_analysis()
compare_with_builtin()
```

## 实际应用场景

### 1. 日志文件分析

```python
def search_log_entries(log_lines, keyword):
    """在日志文件中搜索包含关键词的行"""
    matching_lines = []
    for i, line in enumerate(log_lines):
        if keyword.lower() in line.lower():
            matching_lines.append((i + 1, line.strip()))  # 行号从1开始
    return matching_lines

# 示例使用
log_data = [
    "2024-01-01 10:00:00 INFO User login successful",
    "2024-01-01 10:05:00 ERROR Database connection failed",
    "2024-01-01 10:10:00 INFO User logout",
    "2024-01-01 10:15:00 WARNING Low disk space",
    "2024-01-01 10:20:00 ERROR Authentication failed"
]

error_lines = search_log_entries(log_data, "ERROR")
print("包含ERROR的日志行:")
for line_num, content in error_lines:
    print(f"  第{line_num}行: {content}")
```

### 2. 库存管理

```python
class Product:
    def __init__(self, id, name, price, quantity):
        self.id = id
        self.name = name
        self.price = price
        self.quantity = quantity

    def __str__(self):
        return f"Product({self.id}, {self.name}, ${self.price}, qty:{self.quantity})"

def search_product_by_id(inventory, product_id):
    """按产品ID查找商品"""
    for product in inventory:
        if product.id == product_id:
            return product
    return None

def search_low_stock_products(inventory, threshold):
    """查找库存不足的商品"""
    low_stock = []
    for product in inventory:
        if product.quantity < threshold:
            low_stock.append(product)
    return low_stock

# 示例使用
inventory = [
    Product("P001", "Laptop", 999.99, 5),
    Product("P002", "Mouse", 29.99, 2),
    Product("P003", "Keyboard", 79.99, 8),
    Product("P004", "Monitor", 299.99, 1)
]

product = search_product_by_id(inventory, "P002")
print(f"找到商品: {product}")

low_stock = search_low_stock_products(inventory, 3)
print("库存不足的商品:")
for product in low_stock:
    print(f"  {product}")
```

## 练习题

### 基础练习
1. **查找最大值位置**：在数组中找到最大值的位置
2. **查找第二大值**：找到数组中第二大的值
3. **统计元素出现次数**：统计指定元素在数组中出现的次数
4. **查找缺失数字**：在1到n的序列中找到缺失的数字

### 进阶练习
5. **查找峰值元素**：找到比相邻元素都大的元素
6. **查找重复元素**：找到数组中第一个重复出现的元素
7. **范围查找**：找到在指定范围内的所有元素
8. **模糊匹配**：实现支持通配符的字符串查找

### 练习题参考答案

```python
# 1. 查找最大值位置
def find_max_position(arr):
    if not arr:
        return -1
    max_pos = 0
    for i in range(1, len(arr)):
        if arr[i] > arr[max_pos]:
            max_pos = i
    return max_pos

# 2. 查找第二大值
def find_second_largest(arr):
    if len(arr) < 2:
        return None

    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num

    return second if second != float('-inf') else None

# 3. 统计元素出现次数
def count_occurrences(arr, target):
    count = 0
    for element in arr:
        if element == target:
            count += 1
    return count

# 4. 查找缺失数字
def find_missing_number(arr, n):
    """在1到n的序列中找缺失的数字"""
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum

# 测试练习题
test_array = [3, 7, 1, 9, 4, 6, 2]
print("练习题测试:")
print(f"最大值位置: {find_max_position(test_array)}")
print(f"第二大值: {find_second_largest(test_array)}")
print(f"元素3出现次数: {count_occurrences(test_array, 3)}")
print(f"缺失数字: {find_missing_number([1, 2, 4, 5], 5)}")
```

通过学习顺序查找及其各种变种，你将掌握查找算法的基础思想，为学习更高效的查找算法打下坚实基础。顺序查找虽然简单，但在很多实际场景中仍然是最合适的选择。
