---
title: strings
---
# 字符串 (String)

在 Python 中，字符串是不可变的序列，用于表示文本数据。它们由一系列字符组成，可以使用单引号 (`'...'`)、双引号 (`"..."`) 或三引号 (`'''...'''` 或 `"""..."""`) 来创建。

## 概念
-   **不可变性 (Immutability)**：一旦字符串被创建，它的内容就不能被修改。任何看起来修改字符串的操作（如拼接、替换）实际上都会创建一个新的字符串对象。
-   **序列类型 (Sequence Type)**：字符串是序列，意味着它们支持索引、切片以及其他序列操作（如 `len()`、迭代）。
-   **Unicode 支持**：Python 3.x 的字符串默认使用 Unicode 编码，可以表示世界上几乎所有的字符。

## 创建字符串
```python
# 使用单引号
str1 = 'Hello, Python!'
print(str1)

# 使用双引号
str2 = "Hello, World!"
print(str2)

# 使用三引号 (可以跨越多行，常用于文档字符串或多行文本)
str3 = '''This is a
multi-line
string.'''
print(str3)

str4 = """Another
multi-line
string."""
print(str4)

# 空字符串
empty_str = ""
print(f"Empty string: '{empty_str}', length: {len(empty_str)}")

# 字符串中包含引号
str_with_quotes1 = "He said, 'Hello!'"
str_with_quotes2 = 'She replied, "Hi!"'
print(str_with_quotes1)
print(str_with_quotes2)
```

## 字符串索引与切片

由于字符串是序列，可以通过索引访问单个字符，通过切片获取子字符串。

-   **索引 (Indexing)**：从 0 开始，负数索引从末尾开始 (-1 是最后一个字符)。
    ```python
    s = "Python"
    print(f"s[0]: {s[0]}")   # P
    print(f"s[3]: {s[3]}")   # h
    print(f"s[-1]: {s[-1]}")  # n (最后一个字符)
    print(f"s[-2]: {s[-2]}") # o (倒数第二个字符)
    # s[6] # 会引发 IndexError，因为索引超出范围
    ```

-   **切片 (Slicing)**：`s[start:end:step]`
    -   `start`：起始索引（包含）。如果省略，默认为 0。
    -   `end`：结束索引（不包含）。如果省略，默认为字符串长度。
    -   `step`：步长。如果省略，默认为 1。
    ```python
    s = "Hello, World!"
    print(f"s[0:5]: {s[0:5]}")     # "Hello"
    print(f"s[:5]: {s[:5]}")      # "Hello" (从开头到索引4)
    print(f"s[7:]: {s[7:]}")      # "World!" (从索引7到末尾)
    print(f"s[7:12]: {s[7:12]}")   # "World"
    print(f"s[:]: {s[:]}")        # "Hello, World!" (复制整个字符串)
    print(f"s[::2]: {s[::2]}")     # "HloWrd" (每隔一个字符取一个)
    print(f"s[::-1]: {s[::-1]}")   # "!dlroW ,olleH" (反转字符串)
    print(f"s[-6:-1]: {s[-6:-1]}") # "World"
    ```

## 常用字符串方法
字符串对象有许多内置方法用于执行常见操作。由于字符串是不可变的，这些方法通常返回一个新的字符串，而不是修改原始字符串。

-   **`len(s)`** (内置函数): 返回字符串的长度。
    ```python
    s = "Python"
    print(f"Length of '{s}': {len(s)}") # 6
    ```

-   **`s.find(substring, start, end)`**: 查找子字符串 `substring` 在 `s` 中首次出现的位置。如果找到，返回其起始索引；否则返回 -1。
    -   `start` 和 `end` 参数可选，用于指定搜索范围。
    ```python
    s = "hello world, hello python"
    print(f"s.find('hello'): {s.find('hello')}")         # 0
    print(f"s.find('world'): {s.find('world')}")         # 6
    print(f"s.find('Python'): {s.find('Python')}")       # -1 (大小写敏感)
    print(f"s.find('hello', 1): {s.find('hello', 1)}")   # 13 (从索引1之后开始查找)
    ```
    -   `s.rfind(substring, start, end)`: 类似于 `find()`，但从右边开始查找。

-   **`s.index(substring, start, end)`**: 类似于 `find()`，但如果未找到子字符串，会引发 `ValueError` 异常。
    ```python
    s = "hello world"
    print(f"s.index('world'): {s.index('world')}") # 6
    # print(s.index('Python')) # 会引发 ValueError
    ```
    -   `s.rindex(substring, start, end)`: 类似于 `index()`，但从右边开始查找。

-   **`s.replace(old, new, count)`**: 返回一个新字符串，其中所有出现的子字符串 `old` 都被 `new` 替换。可选参数 `count` 指定最大替换次数。
    ```python
    s = "one two three two one"
    print(f"s.replace('two', '2'): {s.replace('two', '2')}")             # "one 2 three 2 one"
    print(f"s.replace(' ', '-'): {s.replace(' ', '-')}")               # "one-two-three-two-one"
    print(f"s.replace('two', '2', 1): {s.replace('two', '2', 1)}")       # "one 2 three two one" (只替换第一个)
    ```

-   **`s.split(separator, maxsplit)`**: 根据 `separator` 分割字符串，返回一个子字符串列表。如果 `separator` 未指定或为 `None`，则默认按空白字符（空格、制表符、换行符等）分割，并丢弃空字符串。
    -   `maxsplit` 可选，指定最大分割次数。
    ```python
    s = "apple,banana,cherry"
    print(f"s.split(','): {s.split(',')}") # ['apple', 'banana', 'cherry']

    s2 = "hello world python"
    print(f"s2.split(): {s2.split()}")     # ['hello', 'world', 'python']

    s3 = "one two three four"
    print(f"s3.split(' ', 2): {s3.split(' ', 2)}") # ['one', 'two', 'three four']
    ```

-   **`separator.join(iterable)`**: 将 `iterable` (如列表、元组) 中的字符串元素用 `separator` 连接起来，形成一个新的字符串。
    ```python
    my_list = ['apple', 'banana', 'cherry']
    print(f"','.join(my_list): {','.join(my_list)}") # "apple,banana,cherry"
    print(f"' '.join(my_list): {' '.join(my_list)}") # "apple banana cherry"

    my_tuple = ('Hello', 'World')
    print(f"'-'.join(my_tuple): {'-'.join(my_tuple)}") # "Hello-World"
    ```

-   **`s.upper()` / `s.lower()`**: 返回字符串的大写/小写版本。
    ```python
    s = "Hello World"
    print(f"s.upper(): {s.upper()}") # "HELLO WORLD"
    print(f"s.lower(): {s.lower()}") # "hello world"
    ```

-   **`s.capitalize()`**: 返回字符串的副本，其第一个字符大写，其余字符小写。
    ```python
    s = "python programming"
    print(f"s.capitalize(): {s.capitalize()}") # "Python programming"
    ```

-   **`s.title()`**: 返回字符串的标题化版本，即每个单词的首字母大写，其余字母小写。
    ```python
    s = "hello world wide web"
    print(f"s.title(): {s.title()}") # "Hello World Wide Web"
    ```

-   **`s.strip(chars)` / `s.lstrip(chars)` / `s.rstrip(chars)`**: 返回去除字符串开头和/或结尾处指定字符（默认为空白字符）的副本。
    -   `strip()`: 去除两端
    -   `lstrip()`: 去除左端 (开头)
    -   `rstrip()`: 去除右端 (结尾)
    ```python
    s = "   hello world   "
    print(f"'{s.strip()}'")      # "'hello world'"
    print(f"'{s.lstrip()}'")     # "'hello world   '"
    print(f"'{s.rstrip()}'")     # "'   hello world'"

    s2 = "***hello***world***"
    print(f"s2.strip('*'): {s2.strip('*')}") # "hello***world"
    ```

-   **`s.startswith(prefix, start, end)` / `s.endswith(suffix, start, end)`**: 检查字符串是否以指定的前缀/后缀开头/结尾。返回 `True` 或 `False`。
    ```python
    s = "filename.txt"
    print(f"s.startswith('file'): {s.startswith('file')}") # True
    print(f"s.endswith('.txt'): {s.endswith('.txt')}")     # True
    print(f"s.startswith('name', 4): {s.startswith('name', 4)}") # True (从索引4开始检查)
    ```

-   **`s.isdigit()` / `s.isalpha()` / `s.isalnum()` / `s.islower()` / `s.isupper()` / `s.isspace()`**: 检查字符串的特性。
    -   `isdigit()`: 如果所有字符都是数字且至少有一个字符，则为 True。
    -   `isalpha()`: 如果所有字符都是字母且至少有一个字符，则为 True。
    -   `isalnum()`: 如果所有字符都是字母或数字且至少有一个字符，则为 True。
    -   `islower()`: 如果所有字母字符都是小写且至少有一个字母字符，则为 True。
    -   `isupper()`: 如果所有字母字符都是大写且至少有一个字母字符，则为 True。
    -   `isspace()`: 如果所有字符都是空白字符且至少有一个字符，则为 True。
    ```python
    print(f"'123'.isdigit(): {'123'.isdigit()}")       # True
    print(f"'abc'.isalpha(): {'abc'.isalpha()}")       # True
    print(f"'ab1'.isalnum(): {'ab1'.isalnum()}")       # True
    print(f"'python'.islower(): {'python'.islower()}")   # True
    print(f"'PYTHON'.isupper(): {'PYTHON'.isupper()}")   # True
    print(f"'   '.isspace(): {'   '.isspace()}")       # True
    print(f"'Hello'.isalpha(): {'Hello'.isalpha()}")   # True
    print(f"'Hello '.isalpha(): {'Hello '.isalpha()}") # False
    ```

## 字符串格式化
Python 提供了多种格式化字符串的方法，用于将变量的值嵌入到字符串中。

-   **% 操作符 (旧式)**:
    ```python
    name = "Alice"
    age = 30
    formatted_str = "Name: %s, Age: %d" % (name, age)
    print(formatted_str) # "Name: Alice, Age: 30"
    # %s for string, %d for integer, %f for float
    ```
    这种方式在现代 Python 代码中已不推荐使用。

-   **`str.format()` 方法 (推荐)**:
    ```python
    name = "Bob"
    age = 25
    # 通过位置
    formatted_str1 = "Name: {}, Age: {}".format(name, age)
    print(formatted_str1) # "Name: Bob, Age: 25"

    # 通过索引
    formatted_str2 = "Name: {0}, Age: {1}. {0} is {1} years old.".format(name, age)
    print(formatted_str2) # "Name: Bob, Age: 25. Bob is 25 years old."

    # 通过关键字参数
    formatted_str3 = "Name: {n}, Age: {a}".format(n=name, a=age)
    print(formatted_str3) # "Name: Bob, Age: 25"

    # 格式说明符 (例如，浮点数精度)
    pi = 3.14159265
    print("Pi: {:.2f}".format(pi)) # "Pi: 3.14"
    ```

-   **f-strings (格式化字符串字面值 - Python 3.6+，强烈推荐)**:
    f-strings 提供了一种简洁且可读性强的方式来在字符串中嵌入表达式。
    ```python
    name = "Charlie"
    age = 40
    formatted_str = f"Name: {name}, Age: {age}"
    print(formatted_str) # "Name: Charlie, Age: 40"

    # 可以在 {} 中直接使用表达式
    print(f"Next year, {name} will be {age + 1} years old.")
    # "Next year, Charlie will be 41 years old."

    # 格式说明符
    price = 19.99
    quantity = 3
    print(f"Total: ${price * quantity:.2f}") # "Total: $59.97"

    # 调用函数
    def get_greeting(person_name):
        return f"Hello, {person_name}!"
    print(f"{get_greeting(name)}") # "Hello, Charlie!"
    ```
    f-strings 通常是进行字符串格式化的首选方法，因为它们更易读、更简洁，并且通常比 `str.format()` 更快。

字符串是 Python 编程中非常基础且重要的数据类型，熟练掌握其操作对于编写高效和可读的 Python 代码至关重要。
