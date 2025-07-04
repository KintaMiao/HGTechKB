---
title: 选择排序
---

# 选择排序

## 算法定义

选择排序（Selection Sort）是一种简单直观的排序算法。它的工作原理是：首先在未排序序列中找到最小（或最大）元素，存放到排序序列的起始位置，然后再从剩余未排序元素中继续寻找最小（或最大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

选择排序的主要特点是每次都选择剩余元素中的最值，因此得名"选择排序"。

## 算法思想

选择排序的基本思想可以概括为：
1. **选择**：从待排序的数据元素中选出最小（或最大）的一个元素
2. **交换**：将选出的元素与第一个元素交换位置
3. **缩小范围**：在剩余的元素中重复上述过程

这个过程会将数组分为两部分：
- **已排序部分**：位于数组前面，已经按顺序排列
- **未排序部分**：位于数组后面，还需要继续排序

## 运算过程

以升序排列为例，选择排序的详细步骤：

1. **第一轮**：在整个数组中找到最小元素，与第一个位置的元素交换
2. **第二轮**：在剩余的n-1个元素中找到最小元素，与第二个位置的元素交换
3. **第三轮**：在剩余的n-2个元素中找到最小元素，与第三个位置的元素交换
4. **重复**：继续这个过程，直到只剩下一个元素

### 图解示例

假设有数组 [64, 25, 12, 22, 11]：

```
初始状态: [64, 25, 12, 22, 11]
         ↑
       未排序部分

第1轮: 找到最小值11，与位置0交换
[11, 25, 12, 22, 64]
 ↑   ↑
已排序  未排序部分

第2轮: 在[25, 12, 22, 64]中找到最小值12，与位置1交换
[11, 12, 25, 22, 64]
 ↑   ↑   ↑
已排序    未排序部分

第3轮: 在[25, 22, 64]中找到最小值22，与位置2交换
[11, 12, 22, 25, 64]
 ↑   ↑   ↑   ↑
已排序      未排序部分

第4轮: 在[25, 64]中找到最小值25，与位置3交换（无需交换）
[11, 12, 22, 25, 64]
 ↑   ↑   ↑   ↑   ↑
    全部已排序
```

## 示例Python程序

```python
def selection_sort(arr):
    """
    选择排序函数
    参数:
        arr: 待排序的列表
    返回:
        排序后的列表
    """
    n = len(arr)
    
    # 遍历数组的每个位置
    for i in range(n):
        # 假设当前位置就是最小值的位置
        min_index = i
        
        # 在剩余未排序部分中寻找真正的最小值
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        
        # 将找到的最小值与当前位置交换
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
            
        # 可选：打印每轮排序后的结果
        print(f"第{i+1}轮排序后: {arr}")
    
    return arr

# 示例使用
def selection_sort_demo():
    """选择排序演示"""
    data = [64, 25, 12, 22, 11]
    print(f"原始数组: {data}")
    print("排序过程:")
    
    sorted_data = selection_sort(data.copy())
    print(f"最终结果: {sorted_data}")

# 运行演示
selection_sort_demo()
```

## 程序解释

1. **外层循环**：`for i in range(n)` 控制当前要填充的位置，从0到n-1
2. **初始化最小值索引**：`min_index = i` 假设当前位置就是最小值位置
3. **内层循环**：`for j in range(i + 1, n)` 在剩余未排序部分中寻找最小值
4. **更新最小值索引**：如果找到更小的元素，更新 `min_index`
5. **交换元素**：将找到的最小值与当前位置交换
6. **重复过程**：继续下一轮选择和交换

## 算法分析

### 时间复杂度
- **最好情况**：O(n²) - 即使数组已经有序，仍需要进行所有比较
- **最坏情况**：O(n²) - 数组完全逆序时的情况
- **平均情况**：O(n²) - 无论输入如何，比较次数都是固定的

**比较次数计算**：
- 第1轮：n-1次比较
- 第2轮：n-2次比较
- ...
- 第n-1轮：1次比较
- 总计：(n-1) + (n-2) + ... + 1 = n(n-1)/2 = O(n²)

### 空间复杂度
- **O(1)**：选择排序是原地排序算法，只需要常数级别的额外空间

### 交换次数
- **最多n-1次交换**：每轮最多交换一次
- 相比冒泡排序，选择排序的交换次数更少

## 优缺点分析

### 优点
1. **算法简单**：思路清晰，容易理解和实现
2. **原地排序**：不需要额外的存储空间
3. **交换次数少**：最多只需要n-1次交换，适合交换代价较高的场景
4. **稳定的性能**：无论输入如何，时间复杂度都是O(n²)

### 缺点
1. **效率较低**：O(n²)的时间复杂度在大数据集上表现不佳
2. **不稳定**：相等元素的相对位置可能会改变
3. **不适应性**：无法利用数据的部分有序性来提高效率

## 与其他排序算法的比较

| 特性 | 选择排序 | 冒泡排序 | 插入排序 |
|------|---------|---------|---------|
| 时间复杂度 | O(n²) | O(n²) | O(n²) |
| 空间复杂度 | O(1) | O(1) | O(1) |
| 稳定性 | 不稳定 | 稳定 | 稳定 |
| 交换次数 | O(n) | O(n²) | O(n²) |
| 适应性 | 无 | 有 | 有 |

## 应用场景

选择排序适用于以下场景：
1. **小规模数据**：当数据量较小时，算法的简单性比效率更重要
2. **交换代价高**：当交换操作的代价很高时，选择排序的交换次数少的优势明显
3. **教学目的**：作为排序算法的入门教学，帮助理解排序的基本思想
4. **内存受限**：需要原地排序且内存空间有限的场景

## 练习题

1. **基础练习**：实现选择排序的降序版本
2. **优化练习**：实现双向选择排序（同时找最大值和最小值）
3. **应用练习**：使用选择排序对学生成绩进行排序
4. **分析练习**：比较选择排序在不同数据分布下的表现

通过学习选择排序，你将理解排序算法的基本思想，为学习更高效的排序算法打下基础。
