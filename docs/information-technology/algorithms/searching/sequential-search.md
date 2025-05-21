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
  """
  在列表 arr 中顺序查找 target。
  如果找到，返回 target 在 arr 中的索引；否则返回 -1。
  """
  for i in range(len(arr)):
    if arr[i] == target:
      return i  # 找到目标，返回索引
  return -1     # 未找到目标

# 示例
my_list = [4, 2, 7, 1, 9, 5, 3]
target_value = 5
result_index = sequential_search(my_list, target_value)

if result_index != -1:
  print(f"元素 {target_value} 在列表中的索引为: {result_index}")
else:
  print(f"元素 {target_value} 未在列表中找到。")

target_value_not_found = 8
result_index_not_found = sequential_search(my_list, target_value_not_found)

if result_index_not_found != -1:
  print(f"元素 {target_value_not_found} 在列表中的索引为: {result_index_not_found}")
else:
  print(f"元素 {target_value_not_found} 未在列表中找到。")
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
