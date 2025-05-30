---
title: 二分查找（对分查找）
---

# 二分查找（对分查找）

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
