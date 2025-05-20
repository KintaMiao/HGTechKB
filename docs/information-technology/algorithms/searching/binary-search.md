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
    left = 0  # 左边界初始为0
    right = len(arr) - 1  # 右边界初始为数组最后一个元素的索引

    while left <= right:  # 当左边界小于等于右边界时继续查找
        # 计算中间位置
        # 使用 (left + right) // 2 可能导致整数溢出，下面的写法更安全
        mid = left + (right - left) // 2

        # 如果中间元素正好是目标值，返回其索引
        if arr[mid] == target:
            return mid

        # 如果目标值小于中间元素，在左半部分查找
        elif arr[mid] > target:
            right = mid - 1

        # 如果目标值大于中间元素，在右半部分查找
        else:
            left = mid + 1

    # 如果循环结束仍未找到目标值，返回-1表示未找到
    return -1

# 递归实现二分查找（可选）
def binary_search_recursive(arr, target, left, right):
    """
    递归实现的二分查找函数
    参数:
        arr: 已排序的列表（升序）
        target: 要查找的目标值
        left: 左边界
        right: 右边界
    返回:
        如果找到目标值，返回其索引；否则返回-1
    """
    # 基本情况：如果左边界大于右边界，表示未找到目标值
    if left > right:
        return -1

    # 计算中间位置
    mid = left + (right - left) // 2

    # 如果中间元素正好是目标值，返回其索引
    if arr[mid] == target:
        return mid

    # 如果目标值小于中间元素，在左半部分递归查找
    elif arr[mid] > target:
        return binary_search_recursive(arr, target, left, mid - 1)

    # 如果目标值大于中间元素，在右半部分递归查找
    else:
        return binary_search_recursive(arr, target, mid + 1, right)

# 测试代码
if __name__ == "__main__":
    # 已排序的测试数组
    test_array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

    # 测试迭代版本的二分查找
    print("迭代版本的二分查找:")
    print(f"查找元素7，索引为: {binary_search(test_array, 7)}")
    print(f"查找元素10，索引为: {binary_search(test_array, 10)}")

    # 测试递归版本的二分查找
    print("\n递归版本的二分查找:")
    print(f"查找元素15，索引为: {binary_search_recursive(test_array, 15, 0, len(test_array) - 1)}")
    print(f"查找元素20，索引为: {binary_search_recursive(test_array, 20, 0, len(test_array) - 1)}")
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

3. **测试代码**：
   - 创建一个已排序的测试数组。
   - 分别测试迭代版本和递归版本的二分查找，包括成功查找和失败查找的情况。

二分查找的时间复杂度为O(log n)，其中n是数组的长度。这使得二分查找比线性查找（时间复杂度为O(n)）更加高效，特别是对于大型数据集。但是，二分查找要求数组必须是有序的，如果数组是无序的，需要先进行排序，这可能会增加额外的时间复杂度。
