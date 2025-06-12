---
title: 冒泡排序
---

# 冒泡排序

## 算法定义

冒泡排序（Bubble Sort）是一种简单的排序算法，它重复地遍历要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。遍历数列的工作是重复地进行直到没有再需要交换为止，此时该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端，就像水中的气泡最终会上浮到水面一样。

## 运算过程

冒泡排序的基本思想是：
1. 比较相邻的元素。如果第一个比第二个大（升序排列），就交换它们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 重复步骤1~3，直到没有任何一对数字需要比较。

## 示例Python程序

```python
def bubble_sort(arr):
    n = len(arr)  # 列表长度
    for i in range(n):  # 控制排序轮数
        swapped = False  # 标记本轮是否发生交换
        for j in range(0, n - i - 1):  # 相邻元素两两比较
            if arr[j] > arr[j + 1]:  # 如果顺序错误则交换
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:  # 若未发生交换说明已排好序
            break
    return arr

data = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(data))
```

## 程序解释

1. **函数定义**：`bubble_sort`函数接收一个列表作为参数，并返回排序后的列表。

2. **外层循环**：通过`for i in range(n)`创建一个循环，最多执行n次（n为列表长度）。每一次外层循环完成后，当前最大的元素会被放到正确的位置。

3. **优化标志**：设置`swapped`变量作为优化标志。如果在某一轮比较中没有发生交换，说明列表已经有序，可以提前结束排序过程。

4. **内层循环**：通过`for j in range(0, n - i - 1)`创建内层循环，用于比较相邻元素。注意循环范围是`0`到`n - i - 1`，因为每完成一轮外层循环，最后的`i`个元素已经排好序了。

5. **元素比较与交换**：如果当前元素大于下一个元素，则交换它们的位置，并将`swapped`标志设为`True`。

6. **提前结束**：如果在某一轮比较中没有发生交换（`swapped`为`False`），说明列表已经有序，使用`break`提前结束排序。

7. **示例**：创建一个列表并调用`bubble_sort`函数输出排序结果。

冒泡排序的时间复杂度为O(n²)，其中n是列表的长度。虽然这个算法不是最高效的排序算法，但它概念简单，易于实现，适合用于教学目的和小规模数据的排序。

## 算法分析

### 时间复杂度
- **最好情况**：O(n) - 数组已经有序，只需要一轮比较，没有交换
- **最坏情况**：O(n²) - 数组完全逆序，需要进行最多的比较和交换
- **平均情况**：O(n²) - 随机数据的期望比较次数

**详细分析**：
- 比较次数：(n-1) + (n-2) + ... + 1 = n(n-1)/2
- 交换次数：最坏情况下与比较次数相同

### 空间复杂度
- **O(1)**：冒泡排序是原地排序算法，只需要常数级别的额外空间

### 稳定性
- **稳定**：相等元素的相对位置不会改变

## 冒泡排序的变种和优化

### 1. 基础版本（已展示）

### 2. 双向冒泡排序（鸡尾酒排序）

```python
def cocktail_sort(arr):
    """
    双向冒泡排序（鸡尾酒排序）
    交替从两个方向进行冒泡
    """
    n = len(arr)
    left, right = 0, n - 1

    while left < right:
        # 从左到右冒泡，将最大值移到右端
        for i in range(left, right):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
        right -= 1

        # 从右到左冒泡，将最小值移到左端
        for i in range(right, left, -1):
            if arr[i] < arr[i - 1]:
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
        left += 1

    return arr

# 示例使用
data = [64, 34, 25, 12, 22, 11, 90]
print(f"鸡尾酒排序结果: {cocktail_sort(data.copy())}")
```

### 3. 记录最后交换位置的优化

```python
def bubble_sort_optimized(arr):
    """
    记录最后交换位置的优化版本
    可以减少不必要的比较
    """
    n = len(arr)

    while n > 1:
        new_n = 0  # 记录最后一次交换的位置
        for i in range(1, n):
            if arr[i - 1] > arr[i]:
                arr[i - 1], arr[i] = arr[i], arr[i - 1]
                new_n = i  # 更新最后交换位置
        n = new_n  # 下次只需要检查到这个位置

    return arr

# 示例使用
data = [64, 34, 25, 12, 22, 11, 90]
print(f"优化冒泡排序结果: {bubble_sort_optimized(data.copy())}")
```

### 4. 带统计信息的冒泡排序

```python
def bubble_sort_with_stats(arr):
    """
    带统计信息的冒泡排序
    记录比较次数和交换次数
    """
    n = len(arr)
    comparisons = 0
    swaps = 0

    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            comparisons += 1
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swaps += 1
                swapped = True

        if not swapped:
            break

    return arr, comparisons, swaps

# 示例使用
data = [64, 34, 25, 12, 22, 11, 90]
sorted_data, comp_count, swap_count = bubble_sort_with_stats(data.copy())
print(f"排序结果: {sorted_data}")
print(f"比较次数: {comp_count}")
print(f"交换次数: {swap_count}")
```

## 可视化演示

```python
def bubble_sort_visual(arr):
    """
    可视化冒泡排序过程
    """
    n = len(arr)
    print(f"初始数组: {arr}")
    print("-" * 50)

    for i in range(n):
        print(f"第 {i + 1} 轮:")
        swapped = False

        for j in range(0, n - i - 1):
            print(f"  比较 {arr[j]} 和 {arr[j + 1]}", end="")

            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
                print(f" -> 交换")
            else:
                print(f" -> 不交换")

            print(f"    当前数组: {arr}")

        print(f"  第 {i + 1} 轮结束: {arr}")
        print(f"  最大元素 {arr[n - i - 1]} 已就位")

        if not swapped:
            print("  没有发生交换，排序完成！")
            break
        print()

    return arr

# 运行可视化演示
data = [64, 34, 25, 12]
bubble_sort_visual(data)
```

## 性能测试

```python
import time
import random

def performance_test():
    """测试冒泡排序在不同数据规模下的性能"""
    sizes = [100, 500, 1000, 2000]

    for size in sizes:
        # 生成随机数据
        data = [random.randint(1, 1000) for _ in range(size)]

        # 测试基础冒泡排序
        start_time = time.time()
        bubble_sort(data.copy())
        basic_time = time.time() - start_time

        # 测试优化冒泡排序
        start_time = time.time()
        bubble_sort_optimized(data.copy())
        optimized_time = time.time() - start_time

        # 测试鸡尾酒排序
        start_time = time.time()
        cocktail_sort(data.copy())
        cocktail_time = time.time() - start_time

        print(f"数据规模: {size}")
        print(f"  基础冒泡排序: {basic_time:.6f}秒")
        print(f"  优化冒泡排序: {optimized_time:.6f}秒")
        print(f"  鸡尾酒排序: {cocktail_time:.6f}秒")
        print()

# 运行性能测试
performance_test()
```

## 与其他排序算法的比较

```python
def compare_sorting_algorithms():
    """比较不同排序算法的性能"""
    import time

    # 生成测试数据
    data = [random.randint(1, 100) for _ in range(1000)]

    # 冒泡排序
    start = time.time()
    bubble_sort(data.copy())
    bubble_time = time.time() - start

    # Python内置排序
    start = time.time()
    sorted(data)
    builtin_time = time.time() - start

    print(f"冒泡排序耗时: {bubble_time:.6f}秒")
    print(f"内置排序耗时: {builtin_time:.6f}秒")
    print(f"性能差距: {bubble_time / builtin_time:.2f}倍")

compare_sorting_algorithms()
```

## 应用场景和限制

### 适用场景
1. **教学演示**：帮助理解排序的基本概念
2. **小规模数据**：当数据量很小时（n < 20）
3. **几乎有序的数据**：优化版本在这种情况下表现较好
4. **内存极度受限**：只需要O(1)额外空间

### 限制
1. **效率低下**：O(n²)时间复杂度不适合大数据
2. **比较次数多**：即使在最好情况下也需要O(n)比较
3. **不适合生产环境**：实际应用中很少使用

## 练习题

### 基础练习
1. **降序冒泡排序**：修改算法实现降序排序
2. **字符串排序**：使用冒泡排序对字符串数组排序
3. **部分排序**：只对数组的前k个元素进行排序

### 进阶练习
4. **自定义比较**：实现可以接受比较函数的冒泡排序
5. **稳定性验证**：验证冒泡排序的稳定性
6. **最优停止**：实现能够检测到数组已排序并提前停止的版本

### 练习题参考答案

```python
# 1. 降序冒泡排序
def bubble_sort_descending(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] < arr[j + 1]:  # 改变比较条件
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 2. 字符串排序
def bubble_sort_strings(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:  # 字符串比较
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 3. 部分排序
def bubble_sort_partial(arr, k):
    n = len(arr)
    for i in range(min(k, n)):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 测试练习题
print("练习题测试:")
print(f"降序排序: {bubble_sort_descending([3, 1, 4, 1, 5])}")
print(f"字符串排序: {bubble_sort_strings(['banana', 'apple', 'cherry'])}")
print(f"部分排序(前3个): {bubble_sort_partial([5, 2, 8, 1, 9], 3)}")
```

通过学习冒泡排序及其变种，你将深入理解排序算法的基本原理，为学习更高效的排序算法打下坚实基础。
