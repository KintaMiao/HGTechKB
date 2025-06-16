---
title: 迭代算法
---
迭代算法是一种通过重复执行一系列操作来解决问题的算法。它通常涉及使用循环结构（如 for 循环或 while 循环）来逐步逼近最终结果或处理数据集中的每个元素。在每次迭代中，算法会更新一个或多个变量的状态，直到满足某个终止条件。

## 特点
- **状态更新**：迭代算法的核心在于循环过程中状态变量的持续更新。
- **终止条件**：必须有一个明确的终止条件，以防止无限循环。
- **逐步逼近**：通过一系列重复的步骤，从初始状态逐步达到最终解。
- **显式控制**：迭代过程由程序员显式控制循环的初始化、条件判断和状态更新。

## 应用场景
迭代算法广泛应用于各种计算问题，例如：
- **数值计算**：如求解方程的近似根（牛顿迭代法）、数值积分。
- **数据处理**：遍历数组、列表、集合等数据结构中的元素进行处理。
- **搜索算法**：如顺序查找。
- **排序算法**：如冒泡排序、选择排序、插入排序等，其核心操作通常是迭代的。
- **动态规划**：某些动态规划问题的解法也依赖于迭代计算。

## 与递归算法的比较
| 特性         | 迭代算法                                 | 递归算法                                     |
|--------------|------------------------------------------|----------------------------------------------|
| **基本思想**   | 通过循环重复执行代码块                     | 函数调用自身来解决更小规模的子问题             |
| **状态管理**   | 通常使用局部变量显式管理状态               | 通过函数调用栈隐式管理状态                   |
| **终止条件**   | 循环的终止条件                           | 递归的基线条件 (Base Case)                   |
| **代码结构**   | 通常更长，但可能更直接易懂（对于某些问题） | 通常更简洁，更接近数学定义（对于某些问题）     |
| **性能开销**   | 函数调用开销较小，通常效率较高             | 函数调用开销较大（栈帧创建和销毁），可能导致栈溢出 |
| **适用性**     | 适合解决那些可以被分解为重复步骤的问题     | 适合解决那些具有自相似结构的问题             |

选择迭代还是递归，通常取决于问题的性质、代码的清晰度以及性能要求。许多递归算法都可以用迭代的方式实现，反之亦然，但转换的复杂性会有所不同。

## 经典迭代算法实例

### 1. 阶乘计算（迭代版本）

```python
def factorial_iterative(n):
    """迭代计算阶乘"""
    if n < 0:
        return None  # 负数没有阶乘

    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# 示例使用
print(factorial_iterative(5))  # 输出: 120
print(factorial_iterative(0))  # 输出: 1
```

### 2. 斐波那契数列（迭代版本）

```python
def fibonacci_iterative(n):
    """迭代计算斐波那契数列"""
    if n <= 1:
        return n

    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    return b

def fibonacci_sequence(n):
    """生成前n个斐波那契数"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    return sequence

# 示例使用
print(f"第10个斐波那契数: {fibonacci_iterative(10)}")
print(f"前10个斐波那契数: {fibonacci_sequence(10)}")
```

### 3. 最大公约数（欧几里得算法迭代版本）

```python
def gcd_iterative(a, b):
    """迭代计算最大公约数"""
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    """计算最小公倍数"""
    return abs(a * b) // gcd_iterative(a, b)

# 示例使用
print(f"gcd(48, 18) = {gcd_iterative(48, 18)}")
print(f"lcm(48, 18) = {lcm(48, 18)}")
```

### 4. 数组操作

```python
def find_max_iterative(arr):
    """迭代查找数组最大值"""
    if not arr:
        return None

    max_val = arr[0]
    for i in range(1, len(arr)):
        if arr[i] > max_val:
            max_val = arr[i]
    return max_val

def reverse_array_iterative(arr):
    """迭代反转数组"""
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

def array_sum_iterative(arr):
    """迭代计算数组和"""
    total = 0
    for element in arr:
        total += element
    return total

# 示例使用
numbers = [3, 7, 1, 9, 4, 6, 2]
print(f"最大值: {find_max_iterative(numbers)}")
print(f"数组和: {array_sum_iterative(numbers)}")
print(f"反转后: {reverse_array_iterative(numbers.copy())}")
```

### 5. 字符串处理

```python
def reverse_string_iterative(s):
    """迭代反转字符串"""
    result = ""
    for i in range(len(s) - 1, -1, -1):
        result += s[i]
    return result

def is_palindrome_iterative(s):
    """迭代检查回文"""
    s = s.lower().replace(" ", "")  # 转小写并去除空格
    left, right = 0, len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

def count_characters(s):
    """统计字符频率"""
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    return char_count

# 示例使用
text = "hello world"
print(f"反转字符串: {reverse_string_iterative(text)}")
print(f"是否回文: {is_palindrome_iterative('A man a plan a canal Panama')}")
print(f"字符统计: {count_characters(text)}")
```

### 6. 数学计算

```python
def power_iterative(base, exponent):
    """迭代计算幂"""
    if exponent == 0:
        return 1

    result = 1
    for i in range(abs(exponent)):
        result *= base

    return result if exponent > 0 else 1 / result

def is_prime_iterative(n):
    """迭代判断素数"""
    if n < 2:
        return False

    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def prime_factors(n):
    """迭代求质因数分解"""
    factors = []
    d = 2
    while d * d <= n:
        while n % d == 0:
            factors.append(d)
            n //= d
        d += 1
    if n > 1:
        factors.append(n)
    return factors

# 示例使用
print(f"2^10 = {power_iterative(2, 10)}")
print(f"17是素数: {is_prime_iterative(17)}")
print(f"60的质因数: {prime_factors(60)}")
```

## 迭代算法的设计模式

### 1. 累加器模式

```python
def sum_of_squares(n):
    """计算1²+2²+...+n²"""
    total = 0
    for i in range(1, n + 1):
        total += i * i
    return total

def product_of_range(start, end):
    """计算范围内数字的乘积"""
    product = 1
    for i in range(start, end + 1):
        product *= i
    return product
```

### 2. 计数器模式

```python
def count_vowels(s):
    """统计元音字母数量"""
    vowels = "aeiouAEIOU"
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

def count_words(text):
    """统计单词数量"""
    words = text.split()
    return len(words)
```

### 3. 搜索模式

```python
def linear_search_all(arr, target):
    """查找所有匹配项的位置"""
    positions = []
    for i in range(len(arr)):
        if arr[i] == target:
            positions.append(i)
    return positions

def find_min_max(arr):
    """一次遍历找到最小值和最大值"""
    if not arr:
        return None, None

    min_val = max_val = arr[0]
    for i in range(1, len(arr)):
        if arr[i] < min_val:
            min_val = arr[i]
        elif arr[i] > max_val:
            max_val = arr[i]
    return min_val, max_val
```

### 4. 双指针模式

```python
def two_sum(arr, target):
    """在有序数组中找到两个数的和等于目标值"""
    left, right = 0, len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None

def remove_duplicates(arr):
    """原地移除有序数组中的重复元素"""
    if not arr:
        return 0

    write_index = 1
    for read_index in range(1, len(arr)):
        if arr[read_index] != arr[read_index - 1]:
            arr[write_index] = arr[read_index]
            write_index += 1
    return write_index
```

## 迭代算法优化技巧

### 1. 提前终止

```python
def contains_element(arr, target):
    """查找元素，找到后立即返回"""
    for element in arr:
        if element == target:
            return True
    return False

def all_positive(arr):
    """检查是否所有元素都为正数"""
    for num in arr:
        if num <= 0:
            return False
    return True
```

### 2. 批量处理

```python
def process_in_batches(data, batch_size):
    """分批处理数据"""
    results = []
    for i in range(0, len(data), batch_size):
        batch = data[i:i + batch_size]
        # 处理批次数据
        batch_result = sum(batch)  # 示例：计算批次和
        results.append(batch_result)
    return results
```

### 3. 缓存优化

```python
def fibonacci_with_cache(n):
    """使用缓存的迭代斐波那契"""
    if n <= 1:
        return n

    cache = [0, 1]
    for i in range(2, n + 1):
        cache.append(cache[i-1] + cache[i-2])
    return cache[n]
```

## 练习题

### 基础练习

1. **数字统计**：编写函数统计一个整数中各个数字的出现次数
2. **数组旋转**：将数组向右旋转k个位置
3. **完全平方数**：判断一个数是否为完全平方数
4. **数字反转**：反转一个整数（如123变成321）

### 中级练习

5. **合并有序数组**：将两个有序数组合并成一个有序数组
6. **寻找峰值**：在数组中找到峰值元素（比相邻元素都大）
7. **股票买卖**：计算买卖股票的最大利润
8. **雨水收集**：计算能收集多少雨水（经典算法题）

### 高级练习

9. **滑动窗口最大值**：在滑动窗口中找到最大值
10. **最长递增子序列**：找到最长的递增子序列长度
11. **字符串匹配**：实现KMP算法进行字符串匹配
12. **数组去重**：原地去除数组中的重复元素

### 练习题参考答案

```python
# 1. 数字统计
def count_digits(n):
    """统计整数中各数字出现次数"""
    n = abs(n)  # 处理负数
    count = {}
    if n == 0:
        return {0: 1}

    while n > 0:
        digit = n % 10
        count[digit] = count.get(digit, 0) + 1
        n //= 10
    return count

# 2. 数组旋转
def rotate_array(arr, k):
    """向右旋转数组k个位置"""
    n = len(arr)
    k = k % n  # 处理k大于数组长度的情况

    # 方法1：使用额外空间
    return arr[-k:] + arr[:-k]

def rotate_array_inplace(arr, k):
    """原地旋转数组"""
    n = len(arr)
    k = k % n

    # 三次反转法
    def reverse(start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1

    reverse(0, n - 1)      # 反转整个数组
    reverse(0, k - 1)      # 反转前k个元素
    reverse(k, n - 1)      # 反转后n-k个元素
    return arr

# 3. 完全平方数
def is_perfect_square(num):
    """判断是否为完全平方数"""
    if num < 0:
        return False

    i = 1
    while i * i <= num:
        if i * i == num:
            return True
        i += 1
    return False

# 4. 数字反转
def reverse_integer(x):
    """反转整数"""
    sign = -1 if x < 0 else 1
    x = abs(x)

    result = 0
    while x > 0:
        result = result * 10 + x % 10
        x //= 10

    return sign * result

# 5. 合并有序数组
def merge_sorted_arrays(arr1, arr2):
    """合并两个有序数组"""
    result = []
    i = j = 0

    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1

    # 添加剩余元素
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    return result

# 6. 寻找峰值
def find_peak_element(arr):
    """找到峰值元素的索引"""
    n = len(arr)
    if n == 1:
        return 0

    for i in range(n):
        left_ok = (i == 0) or (arr[i] > arr[i-1])
        right_ok = (i == n-1) or (arr[i] > arr[i+1])
        if left_ok and right_ok:
            return i
    return -1

# 测试练习题
print("练习题测试:")
print(f"数字统计 12321: {count_digits(12321)}")
print(f"数组旋转 [1,2,3,4,5] 右移2位: {rotate_array([1,2,3,4,5], 2)}")
print(f"16是完全平方数: {is_perfect_square(16)}")
print(f"反转整数 12345: {reverse_integer(12345)}")
print(f"合并数组 [1,3,5] 和 [2,4,6]: {merge_sorted_arrays([1,3,5], [2,4,6])}")
print(f"峰值元素位置 [1,2,3,1]: {find_peak_element([1,2,3,1])}")
```

## 性能比较：迭代 vs 递归

```python
import time
import sys

def performance_comparison():
    """比较迭代和递归的性能"""

    # 斐波那契数列比较
    def fib_recursive(n):
        if n <= 1:
            return n
        return fib_recursive(n-1) + fib_recursive(n-2)

    def fib_iterative(n):
        if n <= 1:
            return n
        a, b = 0, 1
        for _ in range(2, n+1):
            a, b = b, a + b
        return b

    n = 30

    # 测试递归版本
    start = time.time()
    result_rec = fib_recursive(n)
    time_rec = time.time() - start

    # 测试迭代版本
    start = time.time()
    result_iter = fib_iterative(n)
    time_iter = time.time() - start

    print(f"计算第{n}个斐波那契数:")
    print(f"递归版本: {result_rec}, 耗时: {time_rec:.6f}秒")
    print(f"迭代版本: {result_iter}, 耗时: {time_iter:.6f}秒")
    print(f"性能提升: {time_rec/time_iter:.2f}倍")

performance_comparison()
```

## 总结

迭代算法具有以下优势：
- **高效性**：通常比递归版本更快，内存使用更少
- **可控性**：循环次数明确，便于分析时间复杂度
- **稳定性**：不会出现栈溢出问题
- **直观性**：对于某些问题，迭代思路更直接

选择迭代还是递归时，需要考虑：
- **问题特性**：树形结构问题更适合递归，线性问题更适合迭代
- **性能要求**：对性能敏感的场景优先选择迭代
- **代码可读性**：选择更容易理解和维护的方式
- **数据规模**：大数据量时迭代更安全

通过大量练习和实践，你将能够熟练运用迭代算法解决各种计算问题。
