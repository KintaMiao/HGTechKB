---
title: Python 基础知识字典
---
# Python 基础知识字典

## 目录
- [数据类型](#数据类型)
- [变量与赋值](#变量与赋值)
- [字符串](#字符串)
- [列表](#列表)
- [字典](#字典)
- [输入输出](#输入输出)
- [常见内置函数](#常见内置函数)
- [分支结构](#分支结构)
- [循环结构](#循环结构)
- [转移和中断结构](#转移和中断结构)
- [模块的导入](#模块的导入)
- [自定义函数](#自定义函数)

---

## 数据类型

### 基本数据类型

#### 整数 (int)
```python
# 整数
age = 25
negative_num = -10
big_num = 1000000

# 不同进制
binary = 0b1010      # 二进制，值为10
octal = 0o12         # 八进制，值为10
hexadecimal = 0xa    # 十六进制，值为10
```

#### 浮点数 (float)
```python
# 浮点数
price = 19.99
pi = 3.14159
scientific = 1.5e-4  # 科学计数法，值为0.00015
```

#### 字符串 (str)
```python
# 字符串
name = "Alice"
message = 'Hello World'
multiline = """这是一个
多行字符串"""
```

#### 布尔值 (bool)
```python
# 布尔值
is_student = True
is_working = False

# 布尔运算
result = True and False  # False
result = True or False   # True
result = not True        # False
```

#### 空值 (None)
```python
# None 表示空值
data = None
if data is None:
    print("数据为空")
```

### 类型检查和转换
```python
# 检查类型
print(type(42))        # <class 'int'>
print(isinstance(42, int))  # True

# 类型转换
num_str = "123"
num = int(num_str)     # 字符串转整数
float_num = float(num) # 整数转浮点数
str_num = str(num)     # 数字转字符串
```

---

## 变量与赋值

### 变量命名规则
```python
# 正确的变量名
user_name = "Alice"
age2 = 25
_private_var = "hidden"
MAX_SIZE = 100

# 错误的变量名（会报错）
# 2age = 25        # 不能以数字开头
# user-name = ""   # 不能包含连字符
# class = "A"      # 不能使用关键字
```

### 赋值操作
```python
# 基本赋值
x = 10
y = x  # y 的值为 10

# 多重赋值
a, b, c = 1, 2, 3
x = y = z = 0  # 同时赋值

# 交换变量
a, b = b, a

# 增强赋值
x += 5   # 等同于 x = x + 5
x -= 3   # 等同于 x = x - 3
x *= 2   # 等同于 x = x * 2
x /= 4   # 等同于 x = x / 4
```

---

## 字符串

### 字符串创建
```python
# 不同的引号
single = 'Hello'
double = "World"
triple_single = '''多行
字符串'''
triple_double = """另一种
多行字符串"""

# 原始字符串（忽略转义字符）
path = r"C:\Users\name\Documents"
```

### 字符串格式化
```python
name = "Alice"
age = 25

# f-string（推荐）
message = f"我叫{name}，今年{age}岁"

# format 方法
message = "我叫{}，今年{}岁".format(name, age)
message = "我叫{name}，今年{age}岁".format(name=name, age=age)

# % 格式化（旧式）
message = "我叫%s，今年%d岁" % (name, age)
```

### 常用字符串方法
```python
text = "  Hello World  "

# 大小写转换
print(text.upper())      # "  HELLO WORLD  "
print(text.lower())      # "  hello world  "
print(text.title())      # "  Hello World  "
print(text.capitalize()) # "  hello world  "

# 去除空白
print(text.strip())      # "Hello World"
print(text.lstrip())     # "Hello World  "
print(text.rstrip())     # "  Hello World"

# 查找和替换
print(text.find("World"))     # 8
print(text.replace("World", "Python"))  # "  Hello Python  "

# 分割和连接
words = "apple,banana,orange".split(",")  # ['apple', 'banana', 'orange']
joined = "-".join(words)  # "apple-banana-orange"

# 检查字符串
print("Hello".startswith("He"))  # True
print("World".endswith("ld"))    # True
print("123".isdigit())           # True
print("abc".isalpha())           # True
```

---

## 列表

### 列表创建和访问
```python
# 创建列表
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty_list = []

# 访问元素
print(fruits[0])    # "apple" (第一个元素)
print(fruits[-1])   # "orange" (最后一个元素)
print(fruits[1:3])  # ["banana", "orange"] (切片)

# 列表长度
print(len(fruits))  # 3
```

### 列表修改
```python
fruits = ["apple", "banana", "orange"]

# 修改元素
fruits[0] = "grape"  # ["grape", "banana", "orange"]

# 添加元素
fruits.append("kiwi")           # 末尾添加
fruits.insert(1, "mango")       # 指定位置插入
fruits.extend(["pear", "plum"]) # 添加多个元素

# 删除元素
fruits.remove("banana")  # 删除指定值
del fruits[0]           # 删除指定索引
popped = fruits.pop()   # 删除并返回最后一个元素
fruits.clear()          # 清空列表
```

### 常用列表方法
```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# 排序
numbers.sort()          # 原地排序
sorted_nums = sorted(numbers)  # 返回新的排序列表

# 反转
numbers.reverse()       # 原地反转
reversed_nums = numbers[::-1]  # 返回新的反转列表

# 查找
print(numbers.index(4))    # 返回元素的索引
print(numbers.count(1))    # 统计元素出现次数
print(4 in numbers)        # 检查元素是否存在

# 列表推导式
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
evens = [x for x in range(20) if x % 2 == 0]  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

---

## 字典

### 字典创建和访问
```python
# 创建字典
student = {"name": "Alice", "age": 20, "grade": "A"}
empty_dict = {}
dict_from_pairs = dict([("a", 1), ("b", 2)])

# 访问元素
print(student["name"])        # "Alice"
print(student.get("age"))     # 20
print(student.get("height", "未知"))  # "未知" (默认值)

# 获取所有键、值、键值对
print(student.keys())         # dict_keys(['name', 'age', 'grade'])
print(student.values())       # dict_values(['Alice', 20, 'A'])
print(student.items())        # dict_items([('name', 'Alice'), ('age', 20), ('grade', 'A')])
```

### 字典修改
```python
student = {"name": "Alice", "age": 20}

# 添加/修改元素
student["grade"] = "A"        # 添加新键值对
student["age"] = 21           # 修改现有值

# 更新字典
student.update({"height": 165, "weight": 50})
student.update([("city", "Beijing")])

# 删除元素
del student["weight"]         # 删除指定键
popped_value = student.pop("height")  # 删除并返回值
student.clear()               # 清空字典
```

### 字典操作
```python
student = {"name": "Alice", "age": 20, "grade": "A"}

# 检查键是否存在
if "name" in student:
    print("姓名存在")

# 字典推导式
squares_dict = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# 遍历字典
for key in student:
    print(f"{key}: {student[key]}")

for key, value in student.items():
    print(f"{key}: {value}")
```

---

## 输入输出

### 基本输入输出
```python
# 输出
print("Hello, World!")
print("姓名:", "Alice", "年龄:", 20)  # 多个参数
print("Hello", end=" ")  # 不换行
print("World")

# 格式化输出
name = "Alice"
age = 20
print(f"我叫{name}，今年{age}岁")

# 输入
name = input("请输入您的姓名: ")
age = int(input("请输入您的年龄: "))  # 转换为整数
```

### 文件操作
```python
# 写入文件
with open("data.txt", "w", encoding="utf-8") as file:
    file.write("Hello, World!\n")
    file.write("这是第二行\n")

# 读取文件
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()        # 读取全部内容
    print(content)

# 逐行读取
with open("data.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())      # 去除换行符

# 读取所有行到列表
with open("data.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
```

---

## 常见内置函数

### 数学函数
```python
# 基本数学函数
print(abs(-5))          # 5 (绝对值)
print(max(1, 5, 3))     # 5 (最大值)
print(min(1, 5, 3))     # 1 (最小值)
print(sum([1, 2, 3, 4])) # 10 (求和)
print(round(3.14159, 2)) # 3.14 (四舍五入)

# 幂运算
print(pow(2, 3))        # 8 (2的3次方)
print(2 ** 3)           # 8 (同上)
```

### 类型和长度函数
```python
# 类型相关
print(type(42))         # <class 'int'>
print(isinstance(42, int))  # True
print(len("Hello"))     # 5 (长度)
print(len([1, 2, 3]))   # 3

# 转换函数
print(int("123"))       # 123
print(float("3.14"))    # 3.14
print(str(123))         # "123"
print(list("abc"))      # ['a', 'b', 'c']
print(tuple([1, 2, 3])) # (1, 2, 3)
```

### 序列函数
```python
# range 函数
print(list(range(5)))        # [0, 1, 2, 3, 4]
print(list(range(1, 6)))     # [1, 2, 3, 4, 5]
print(list(range(0, 10, 2))) # [0, 2, 4, 6, 8]

# enumerate 函数
fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# zip 函数
names = ["Alice", "Bob", "Charlie"]
ages = [20, 25, 30]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")

# sorted 函数
numbers = [3, 1, 4, 1, 5]
print(sorted(numbers))           # [1, 1, 3, 4, 5]
print(sorted(numbers, reverse=True))  # [5, 4, 3, 1, 1]
```

### 过滤和映射函数
```python
# filter 函数
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4, 6, 8, 10]

# map 函数
squares = list(map(lambda x: x**2, numbers))  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# any 和 all 函数
print(any([True, False, False]))  # True (至少一个为真)
print(all([True, True, False]))   # False (不是全部为真)
```

---

## 分支结构

### if 语句
```python
age = 18

# 基本 if 语句
if age >= 18:
    print("你已经成年了")

# if-else 语句
if age >= 18:
    print("你已经成年了")
else:
    print("你还未成年")

# if-elif-else 语句
if age < 13:
    print("儿童")
elif age < 18:
    print("青少年")
elif age < 60:
    print("成年人")
else:
    print("老年人")
```

### 条件表达式
```python
# 三元运算符
age = 20
status = "成年" if age >= 18 else "未成年"

# 复合条件
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

# 逻辑运算符
age = 25
has_license = True

if age >= 18 and has_license:
    print("可以开车")

if age < 16 or age > 65:
    print("特殊年龄段")

if not has_license:
    print("需要考驾照")
```

### 条件判断技巧
```python
# 检查空值
data = []
if data:  # 空列表为 False
    print("有数据")
else:
    print("没有数据")

# 检查多个值
grade = "A"
if grade in ["A", "B", "C"]:
    print("及格")

# 链式比较
score = 85
if 80 <= score < 90:
    print("良好")
```

---

## 循环结构

### for 循环
```python
# 遍历列表
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# 遍历字符串
for char in "Hello":
    print(char)

# 使用 range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# 带索引的遍历
fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# 遍历字典
student = {"name": "Alice", "age": 20, "grade": "A"}
for key in student:
    print(f"{key}: {student[key]}")

for key, value in student.items():
    print(f"{key}: {value}")
```

### while 循环
```python
# 基本 while 循环
count = 0
while count < 5:
    print(count)
    count += 1

# 条件循环
user_input = ""
while user_input != "quit":
    user_input = input("输入命令 (quit 退出): ")
    print(f"你输入了: {user_input}")

# 无限循环（需要用 break 退出）
while True:
    command = input("输入命令: ")
    if command == "exit":
        break
    print(f"执行命令: {command}")
```

### 嵌套循环
```python
# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j}", end="\t")
    print()  # 换行

# 二维列表遍历
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()
```

---

## 转移和中断结构

### break 语句
```python
# 在 for 循环中使用 break
for i in range(10):
    if i == 5:
        break  # 跳出循环
    print(i)  # 输出 0, 1, 2, 3, 4

# 在 while 循环中使用 break
count = 0
while True:
    if count >= 5:
        break
    print(count)
    count += 1

# 在嵌套循环中使用 break
for i in range(3):
    for j in range(3):
        if j == 1:
            break  # 只跳出内层循环
        print(f"i={i}, j={j}")
```

### continue 语句
```python
# 跳过偶数
for i in range(10):
    if i % 2 == 0:
        continue  # 跳过本次循环
    print(i)  # 输出 1, 3, 5, 7, 9

# 在 while 循环中使用 continue
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:
        continue
    print(count)  # 输出奇数

# 处理列表中的特殊值
numbers = [1, 2, 0, 4, -1, 6]
for num in numbers:
    if num <= 0:
        continue  # 跳过非正数
    print(f"正数: {num}")
```

### pass 语句
```python
# 占位符，什么都不做
for i in range(5):
    if i == 2:
        pass  # 暂时不处理
    else:
        print(i)

# 在函数定义中使用
def future_function():
    pass  # 稍后实现

# 在类定义中使用
class FutureClass:
    pass  # 稍后实现

# 在异常处理中使用
try:
    risky_operation()
except SpecificError:
    pass  # 忽略特定错误
```

### else 子句
```python
# for-else
for i in range(5):
    if i == 10:  # 永远不会满足
        break
    print(i)
else:
    print("循环正常结束")  # 会执行

# while-else
count = 0
while count < 3:
    print(count)
    count += 1
else:
    print("while 循环正常结束")  # 会执行

# 查找示例
numbers = [1, 3, 5, 7, 9]
target = 4
for num in numbers:
    if num == target:
        print(f"找到了 {target}")
        break
else:
    print(f"没有找到 {target}")  # 会执行
```

---

## 模块的导入

### 基本导入
```python
# 导入整个模块
import math
print(math.pi)        # 3.141592653589793
print(math.sqrt(16))  # 4.0

# 导入特定函数
from math import pi, sqrt
print(pi)        # 3.141592653589793
print(sqrt(16))  # 4.0

# 导入所有内容（不推荐）
from math import *
print(sin(pi/2))  # 1.0
```

### 别名导入
```python
# 模块别名
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 函数别名
from math import sqrt as square_root
result = square_root(25)  # 5.0

# 长模块名的别名
import very_long_module_name as vlmn
```

### 常用标准库模块
```python
# 随机数模块
import random
print(random.randint(1, 10))      # 1-10之间的随机整数
print(random.choice(['a', 'b', 'c']))  # 随机选择
random.shuffle([1, 2, 3, 4, 5])   # 随机打乱列表

# 时间模块
import time
import datetime

print(time.time())                # 时间戳
time.sleep(1)                     # 暂停1秒

now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# 操作系统模块
import os
print(os.getcwd())                # 当前工作目录
os.listdir('.')                   # 列出目录内容

# JSON 模块
import json
data = {"name": "Alice", "age": 20}
json_str = json.dumps(data)       # 转换为JSON字符串
parsed_data = json.loads(json_str) # 解析JSON字符串
```

### 自定义模块
```python
# 创建模块文件 mymodule.py
# mymodule.py 内容:
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

class Calculator:
    def add(self, a, b):
        return a + b

# 在其他文件中使用
import mymodule
print(mymodule.greet("Alice"))
print(mymodule.PI)

calc = mymodule.Calculator()
print(calc.add(2, 3))

# 或者
from mymodule import greet, PI, Calculator
print(greet("Bob"))
```

---

## 自定义函数

### 基本函数定义
```python
# 简单函数
def greet():
    print("Hello, World!")

greet()  # 调用函数

# 带参数的函数
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")

# 带返回值的函数
def add(a, b):
    return a + b

result = add(3, 5)  # result = 8
```

### 函数参数
```python
# 默认参数
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))              # "Hello, Alice!"
print(greet("Bob", "Hi"))          # "Hi, Bob!"

# 关键字参数
def introduce(name, age, city):
    return f"我叫{name}，{age}岁，来自{city}"

print(introduce("Alice", 20, "北京"))
print(introduce(age=25, name="Bob", city="上海"))

# 可变参数
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15

# 关键字可变参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=20, city="北京")

# 混合参数
def complex_function(required, default="default", *args, **kwargs):
    print(f"必需参数: {required}")
    print(f"默认参数: {default}")
    print(f"可变参数: {args}")
    print(f"关键字参数: {kwargs}")

complex_function("必需值", "自定义默认", 1, 2, 3, name="Alice", age=20)
```

### 函数作用域
```python
# 全局变量和局部变量
global_var = "我是全局变量"

def test_scope():
    local_var = "我是局部变量"
    print(global_var)  # 可以访问全局变量
    print(local_var)   # 可以访问局部变量

test_scope()
# print(local_var)  # 错误：无法访问局部变量

# 修改全局变量
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)  # 1

# nonlocal 关键字
def outer():
    x = 10

    def inner():
        nonlocal x
        x += 1
        return x

    return inner

func = outer()
print(func())  # 11
print(func())  # 12
```

### 高级函数特性
```python
# 函数作为参数
def apply_operation(func, a, b):
    return func(a, b)

def multiply(x, y):
    return x * y

result = apply_operation(multiply, 3, 4)  # 12

# Lambda 函数
square = lambda x: x ** 2
print(square(5))  # 25

# 在高阶函数中使用 lambda
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))  # [1, 4, 9, 16, 25]
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# 函数装饰器（简单示例）
def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"函数 {func.__name__} 执行时间: {end - start:.4f} 秒")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(1)
    return "完成"

slow_function()  # 会显示执行时间
```
