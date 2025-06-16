---
title: 二分查找（对分查找）
---
## 算法定义

二分查找（Binary Search），也称为对分查找或折半查找，是一种在有序数组中查找特定元素的高效搜索算法。二分查找的基本思想是将目标值与数组的中间元素进行比较，如果目标值等于中间元素，则找到目标值；如果目标值小于中间元素，则在数组的左半部分继续查找；如果目标值大于中间元素，则在数组的右半部分继续查找。这个过程不断重复，直到找到目标值或确定目标值不存在于数组中。

## 运算过程

二分查找的基本步骤如下：
1. 确定数组的中间位置 mid = (left + right) / 2
2. 将目标值 target 与中间元素 array[mid] 进行比较：
   - 如果 target = array[mid]，则找到目标值，返回 mid
   - 如果 target < array[mid]，则在左半部分继续查找，即 right = mid - 1
   - 如果 target > array[mid]，则在右半部分继续查找，即 left = mid + 1
3. 重复步骤1和2，直到找到目标值或 left > right（表示目标值不存在于数组中）

## 示例Python程序

```python
def binary_search(arr, target):
    """
    二分查找函数
    参数:
        arr: 已排序的列表（升序）
        target: 要查找的目标值
    返回:
        如果找到目标值，返回其索引；否则返回-1
    """
    left, right = 0, len(arr) - 1  # 搜索范围
    while left <= right:
        mid = left + (right - left) // 2  # 计算中间位置
        if arr[mid] == target:  # 找到目标值
            return mid
        if arr[mid] > target:   # 目标在左半部分
            right = mid - 1
        else:                   # 目标在右半部分
            left = mid + 1
    return -1

# 递归实现二分查找（可选）
def binary_search_recursive(arr, target, left, right):
    if left > right:  # 递归终止条件
        return -1
    mid = left + (right - left) // 2
    if arr[mid] == target:
        return mid
    if arr[mid] > target:
        return binary_search_recursive(arr, target, left, mid - 1)
    return binary_search_recursive(arr, target, mid + 1, right)

numbers = [1, 3, 5, 7, 9, 11]
print(binary_search(numbers, 7))  # 输出: 3
```

## 程序解释

1. **迭代实现**：
   - 函数`binary_search`接收两个参数：已排序的数组`arr`和要查找的目标值`target`。
   - 初始化左边界`left`为0，右边界`right`为数组最后一个元素的索引。
   - 使用`while`循环，当`left <= right`时继续查找。
   - 计算中间位置`mid`，使用`left + (right - left) // 2`的方式避免整数溢出。
   - 比较中间元素`arr[mid]`与目标值`target`：
     - 如果相等，返回中间位置`mid`。
     - 如果目标值小于中间元素，在左半部分查找，更新右边界`right = mid - 1`。
     - 如果目标值大于中间元素，在右半部分查找，更新左边界`left = mid + 1`。
   - 如果循环结束仍未找到目标值，返回-1表示未找到。

2. **递归实现**：
   - 函数`binary_search_recursive`接收四个参数：已排序的数组`arr`、要查找的目标值`target`、左边界`left`和右边界`right`。
   - 基本情况：如果左边界大于右边界，表示未找到目标值，返回-1。
   - 计算中间位置`mid`。
   - 比较中间元素`arr[mid]`与目标值`target`：
     - 如果相等，返回中间位置`mid`。
     - 如果目标值小于中间元素，在左半部分递归查找。
     - 如果目标值大于中间元素，在右半部分递归查找。

3. **示例**：给定一个已排序的数组，调用函数即可得到目标元素的索引。

二分查找的时间复杂度为O(log n)，其中n是数组的长度。这使得二分查找比线性查找（时间复杂度为O(n)）更加高效，特别是对于大型数据集。但是，二分查找要求数组必须是有序的，如果数组是无序的，需要先进行排序，这可能会增加额外的时间复杂度。

## 算法分析

### 时间复杂度
- **最好情况**：O(1) - 目标元素恰好在数组中间
- **最坏情况**：O(log n) - 需要进行log₂n次比较
- **平均情况**：O(log n) - 期望比较次数约为log₂n

### 空间复杂度
- **迭代版本**：O(1) - 只需要常数级别的额外空间
- **递归版本**：O(log n) - 递归调用栈的深度

### 稳定性
二分查找本身不涉及元素交换，但如果用于查找相等元素，返回的可能不是第一个出现的位置。

## 二分查找的变种

### 1. 查找第一个出现的位置

```python
def binary_search_first(arr, target):
    """查找目标值第一次出现的位置"""
    left, right = 0, len(arr) - 1
    result = -1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            result = mid
            right = mid - 1  # 继续在左半部分查找
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result

# 示例使用
numbers = [1, 2, 2, 2, 3, 4, 5]
print(f"2第一次出现的位置: {binary_search_first(numbers, 2)}")  # 输出: 1
```

### 2. 查找最后一个出现的位置

```python
def binary_search_last(arr, target):
    """查找目标值最后一次出现的位置"""
    left, right = 0, len(arr) - 1
    result = -1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            result = mid
            left = mid + 1  # 继续在右半部分查找
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result

# 示例使用
numbers = [1, 2, 2, 2, 3, 4, 5]
print(f"2最后一次出现的位置: {binary_search_last(numbers, 2)}")  # 输出: 3
```

### 3. 查找插入位置

```python
def binary_search_insert_position(arr, target):
    """查找目标值应该插入的位置（保持数组有序）"""
    left, right = 0, len(arr)

    while left < right:
        mid = left + (right - left) // 2

        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid

    return left

# 示例使用
numbers = [1, 3, 5, 7, 9]
print(f"6应该插入的位置: {binary_search_insert_position(numbers, 6)}")  # 输出: 3
print(f"0应该插入的位置: {binary_search_insert_position(numbers, 0)}")  # 输出: 0
```

### 4. 查找范围

```python
def binary_search_range(arr, target):
    """查找目标值在数组中的范围[first, last]"""
    first = binary_search_first(arr, target)
    if first == -1:
        return [-1, -1]

    last = binary_search_last(arr, target)
    return [first, last]

# 示例使用
numbers = [1, 2, 2, 2, 3, 4, 5]
range_result = binary_search_range(numbers, 2)
print(f"2在数组中的范围: {range_result}")  # 输出: [1, 3]
```

### 5. 查找最接近的值

```python
def binary_search_closest(arr, target):
    """查找最接近目标值的元素"""
    if not arr:
        return -1

    left, right = 0, len(arr) - 1

    while left < right:
        mid = left + (right - left) // 2

        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid

    # 检查left和left-1位置的元素，返回更接近的那个
    if left > 0:
        if abs(arr[left - 1] - target) <= abs(arr[left] - target):
            return left - 1

    return left

# 示例使用
numbers = [1, 3, 5, 7, 9, 11]
closest_index = binary_search_closest(numbers, 6)
print(f"最接近6的元素: {numbers[closest_index]} (位置{closest_index})")
```

## 二分查找的应用

### 1. 在旋转数组中查找

```python
def search_in_rotated_array(arr, target):
    """在旋转有序数组中查找目标值"""
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid

        # 判断哪一半是有序的
        if arr[left] <= arr[mid]:  # 左半部分有序
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # 右半部分有序
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1

# 示例使用
rotated = [4, 5, 6, 7, 0, 1, 2]
result = search_in_rotated_array(rotated, 0)
print(f"在旋转数组中查找0: 位置{result}")
```

### 2. 查找峰值元素

```python
def find_peak_element(arr):
    """查找峰值元素（比相邻元素都大）"""
    left, right = 0, len(arr) - 1

    while left < right:
        mid = left + (right - left) // 2

        if arr[mid] > arr[mid + 1]:
            right = mid  # 峰值在左半部分（包括mid）
        else:
            left = mid + 1  # 峰值在右半部分

    return left

# 示例使用
numbers = [1, 2, 3, 1]
peak_index = find_peak_element(numbers)
print(f"峰值元素: {numbers[peak_index]} (位置{peak_index})")
```

### 3. 查找平方根

```python
def binary_search_sqrt(x, precision=6):
    """使用二分查找计算平方根"""
    if x < 0:
        return None
    if x < 1:
        left, right = 0, 1
    else:
        left, right = 0, x

    epsilon = 10 ** (-precision)

    while right - left > epsilon:
        mid = (left + right) / 2
        square = mid * mid

        if square < x:
            left = mid
        else:
            right = mid

    return (left + right) / 2

# 示例使用
sqrt_result = binary_search_sqrt(25)
print(f"25的平方根: {sqrt_result:.6f}")
```

## 性能比较和分析

```python
import time
import random

def performance_comparison():
    """比较二分查找和顺序查找的性能"""
    sizes = [1000, 10000, 100000, 1000000]

    for size in sizes:
        # 生成有序数组
        arr = list(range(size))
        target = random.randint(0, size - 1)

        # 测试二分查找
        start = time.time()
        binary_result = binary_search(arr, target)
        binary_time = time.time() - start

        # 测试顺序查找
        start = time.time()
        sequential_result = arr.index(target) if target in arr else -1
        sequential_time = time.time() - start

        print(f"数据规模: {size:,}")
        print(f"  二分查找: {binary_time:.8f}秒")
        print(f"  顺序查找: {sequential_time:.8f}秒")
        if binary_time > 0:
            print(f"  性能提升: {sequential_time/binary_time:.2f}倍")
        print()

def search_complexity_demo():
    """演示查找复杂度"""
    sizes = [10, 100, 1000, 10000, 100000]

    print("理论比较次数:")
    print("数组大小\t顺序查找(最坏)\t二分查找(最坏)")
    print("-" * 50)

    for size in sizes:
        sequential_worst = size
        binary_worst = int(size.bit_length())  # log2(size)向上取整

        print(f"{size:,}\t\t{sequential_worst:,}\t\t{binary_worst}")

# 运行性能比较
performance_comparison()
search_complexity_demo()
```

## 二分查找的边界条件处理

```python
def robust_binary_search(arr, target):
    """处理各种边界条件的二分查找"""
    # 处理空数组
    if not arr:
        return -1

    # 处理单元素数组
    if len(arr) == 1:
        return 0 if arr[0] == target else -1

    # 处理目标值超出范围
    if target < arr[0] or target > arr[-1]:
        return -1

    left, right = 0, len(arr) - 1

    while left <= right:
        # 防止整数溢出的中点计算
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

def binary_search_with_validation(arr, target):
    """带输入验证的二分查找"""
    # 验证输入
    if not isinstance(arr, list):
        raise TypeError("数组必须是列表类型")

    if not arr:
        return -1

    # 验证数组是否有序
    for i in range(1, len(arr)):
        if arr[i] < arr[i-1]:
            raise ValueError("数组必须是有序的")

    return robust_binary_search(arr, target)

# 示例使用
try:
    result = binary_search_with_validation([1, 3, 5, 7, 9], 5)
    print(f"查找结果: {result}")
except (TypeError, ValueError) as e:
    print(f"错误: {e}")
```

## 练习题

### 基础练习
1. **查找元素个数**：在有序数组中统计目标元素的个数
2. **查找缺失元素**：在连续整数序列中找到缺失的数字
3. **查找最小值**：在旋转有序数组中找到最小值
4. **判断完全平方数**：使用二分查找判断一个数是否为完全平方数

### 进阶练习
5. **查找第K小元素**：在两个有序数组中找到第K小的元素
6. **搜索二维矩阵**：在行列都有序的二维矩阵中查找元素
7. **查找重复数字**：在包含重复数字的数组中找到重复的数字
8. **寻找两个数组的中位数**：找到两个有序数组合并后的中位数

### 练习题参考答案

```python
# 1. 查找元素个数
def count_target_elements(arr, target):
    """统计目标元素在有序数组中的个数"""
    first = binary_search_first(arr, target)
    if first == -1:
        return 0
    last = binary_search_last(arr, target)
    return last - first + 1

# 2. 查找缺失元素
def find_missing_element(arr):
    """在连续整数序列中找到缺失的数字"""
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        # 如果arr[mid] = mid，说明缺失的数字在右半部分
        if arr[mid] == mid:
            left = mid + 1
        else:
            right = mid - 1

    return left

# 3. 查找最小值
def find_min_in_rotated_array(arr):
    """在旋转有序数组中找到最小值"""
    left, right = 0, len(arr) - 1

    while left < right:
        mid = left + (right - left) // 2

        if arr[mid] > arr[right]:
            left = mid + 1
        else:
            right = mid

    return arr[left]

# 4. 判断完全平方数
def is_perfect_square_binary(num):
    """使用二分查找判断完全平方数"""
    if num < 0:
        return False

    left, right = 0, num

    while left <= right:
        mid = left + (right - left) // 2
        square = mid * mid

        if square == num:
            return True
        elif square < num:
            left = mid + 1
        else:
            right = mid - 1

    return False

# 测试练习题
print("练习题测试:")
test_array = [1, 2, 2, 2, 3, 4, 5]
print(f"元素2的个数: {count_target_elements(test_array, 2)}")

missing_array = [0, 1, 2, 4, 5, 6]  # 缺失3
print(f"缺失的元素: {find_missing_element(missing_array)}")

rotated_array = [4, 5, 6, 7, 0, 1, 2]
print(f"旋转数组的最小值: {find_min_in_rotated_array(rotated_array)}")

print(f"16是完全平方数: {is_perfect_square_binary(16)}")
print(f"15是完全平方数: {is_perfect_square_binary(15)}")
```

## 总结

二分查找是一个非常重要的算法，具有以下特点：

### 优势
- **高效性**：O(log n)时间复杂度，适合大数据集
- **简洁性**：算法逻辑清晰，代码简洁
- **可扩展性**：可以解决很多相关问题

### 限制
- **有序要求**：数组必须是有序的
- **随机访问**：需要支持随机访问的数据结构

### 应用场景
- 在有序数组中查找元素
- 查找插入位置
- 求解数学问题（如平方根）
- 优化搜索问题

掌握二分查找及其变种，将为你解决各种搜索和优化问题提供强大的工具。
