# Python 基础知识字典

本文档面向选考技术学科的高中生，提供 Python 编程常见基础知识点和备考要点，便于快速查阅与考试复习。

## 学考常见考点速查
- 识别和使用基本数据类型
- 理解变量和赋值的写法
- 掌握条件语句、循环和函数的基本用法
- 熟悉常见内置函数
- 阅读并写出简单程序的运行结果

## 1. Python 中的常见数据类型
- **整型 (int)**: 例如 `10`, `-3`, `0b101` (二进制), `0o17` (八进制), `0xFF` (十六进制). Python 的整数支持任意精度。
- **浮点型 (float)**: 例如 `3.14`, `-0.5`, `1.2e3` (科学计数法).
- **复数 (complex)**: 例如 `3 + 4j`, `complex(3, 4)`.
- **字符串 (str)**: 例如 `'hello'`, `\"world\"`, `'''multi-line'''`. 字符串是不可变的 Unicode 字符序列。
- **布尔型 (bool)**: `True`, `False`. 它们是 `int` 的子类，`True` 对应 `1`，`False` 对应 `0`。
- **列表 (list)**: 例如 `[1, 'a', 3.0, True]`. 有序、可变序列。
- **元组 (tuple)**: 例如 `(1, 'a', 3.0, True)`. 有序、不可变序列。
- **字典 (dict)**: 例如 `{'name': 'Alice', 'age': 30}`. 无序（Python 3.6之前）或有序（Python 3.7+）的键值对集合，键必须唯一且不可变，值可变。
- **集合 (set)**: 例如 `{1, 2, 3, 'a'}`. 无序、不重复元素的集合，可变。
- **冻结集合 (frozenset)**: 例如 `frozenset({1, 2, 3})`. 无序、不重复元素的集合，不可变（因此可以作为字典的键）。
- **字节串 (bytes)**: 例如 `b'hello'`. 不可变的字节序列。
- **字节数组 (bytearray)**: 例如 `bytearray(b'world')`. 可变的字节序列。
- **NoneType**: 特殊类型，只有一个值 `None`，常用于表示缺失或空值。

### 考试提示
- 题目常考列表、字典和字符串的基本操作
- 区分可变与不可变类型
- 了解 `None` 表示空值

## 2. 变量与赋值
- 变量名规则：以字母或下划线开头，后跟字母、数字或下划线。区分大小写。避免使用 Python 关键字和内置函数名作为变量名。
- 赋值操作：使用 `=`
  ```python
  name = \"Python\"  # 字符串赋值
  age = 30       # 整数赋值
  pi = 3.14159   # 浮点数赋值
  is_learning = True # 布尔值赋值
  my_list = [1, 2, 3] # 列表赋值
  ```
- **多重赋值**:
  ```python
  x, y, z = 1, 2, 3
  a = b = c = 10 # a, b, c 都指向同一个值为10的整数对象
  ```
- **解包赋值**:
  ```python
  coordinates = (10, 20)
  x, y = coordinates # x=10, y=20

  first, *rest, last = [1, 2, 3, 4, 5]
  # first = 1, rest = [2, 3, 4], last = 5
```
- **交换变量**:
  ```python
  x, y = y, x
  ```

### 考试提示
- 牢记赋值语法 `=` 及多重赋值写法
- 解包和变量交换在选择题中常出现
- 变量名不要使用关键字

## 3. 字符串 (String)
- 创建：单引号 (`'...'`)、双引号 (`\"...\"`)、三引号 (`'''...'''` 或 `\"\"\"...\"\"\"` 用于多行字符串或文档字符串)。

- **特性**：不可变 (immutable)。

- **常用操作与方法**：
  - 拼接: `+` (创建新字符串)
  - 重复: `*` (创建新字符串)
  - 索引: `my_string[index]` (负数索引从后向前)
  - 切片: `my_string[start:end:step]` (不包括 `end`)
  - 长度: `len(my_string)`
  - 成员测试: `substring in my_string`
  - 遍历: `for char in my_string:`
  - **格式化**: 
    - f-strings (Python 3.6+): `f\"Name: {name}, Age: {age}\"` (推荐)
    - `str.format()`: `\"Name: {}, Age: {}\".format(name, age)`
    - %-formatting (旧式): `\"Name: %s, Age: %d\" % (name, age)`
  - **查找与替换**:
    - `s.find(sub[, start[, end]])`: 查找子串，返回首次出现的索引，未找到返回 -1。
    - `s.rfind(sub[, start[, end]])`: 从右侧开始查找。
    - `s.index(sub[, start[, end]])`: 类似 `find`，但未找到会抛出 `ValueError`。
    - `s.rindex(sub[, start[, end]])`: 从右侧开始查找。
    - `s.replace(old, new[, count])`: 替换子串。
    - `s.count(sub[, start[, end]])`: 统计子串出现次数。
  - **大小写转换**:
    - `s.upper()`: 转大写。
    - `s.lower()`: 转小写。
    - `s.capitalize()`: 首字母大写，其余小写。
    - `s.title()`: 每个单词首字母大写。
    - `s.swapcase()`: 大小写互换。
  - **判断类方法 (返回布尔值)**:
    - `s.startswith(prefix[, start[, end]])`
    - `s.endswith(suffix[, start[, end]])`
    - `s.isalnum()`: 是否所有字符都是字母或数字。
    - `s.isalpha()`: 是否所有字符都是字母。
    - `s.isdigit()`: 是否所有字符都是数字。
    - `s.islower()`: 是否所有字母字符都是小写。
    - `s.isupper()`: 是否所有字母字符都是大写。
    - `s.isspace()`: 是否所有字符都是空白字符。
    - `s.istitle()`: 是否是标题化字符串。
  - **去除空白**:
    - `s.strip([chars])`: 去除两端指定字符 (默认空白)。
    - `s.lstrip([chars])`: 去除左侧。
    - `s.rstrip([chars])`: 去除右侧。
  - **分割与连接**:
    - `s.split(sep=None, maxsplit=-1)`: 按分隔符分割字符串成列表。
    - `s.rsplit(sep=None, maxsplit=-1)`: 从右侧开始分割。
    - `s.splitlines(keepends=False)`: 按行分割。
    - `sep.join(iterable)`: 用 `sep` 连接可迭代对象中的字符串。
- **填充与对齐**:
    - `s.center(width[, fillchar])`
    - `s.ljust(width[, fillchar])`
    - `s.rjust(width[, fillchar])`
    - `s.zfill(width)`: 左侧补零。

### 考试提示
- 常考切片、拼接和格式化字符串
- 熟悉查找与替换相关方法
- 输入读取时记得转换数据类型

## 4. 列表 (List)
- 创建：`[]`, `list()`, `[x for x in iterable]` (列表推导式)。

- **特性**：有序 (ordered)、可变 (mutable)、可包含不同类型元素。

- **常用操作与方法**：
  - 索引: `my_list[index]`
  - 切片: `my_list[start:end:step]` (返回新列表)
  - 长度: `len(my_list)`
  - 拼接: `+` (创建新列表)
  - 重复: `*` (创建新列表)
  - 成员测试: `item in my_list`
  - 遍历: `for item in my_list:`
  - **添加元素**:
    - `l.append(x)`: 在末尾添加。
    - `l.insert(i, x)`: 在指定索引 `i` 处插入。
    - `l.extend(iterable)`: 用可迭代对象中的所有元素扩展列表。
  - **删除元素**:
    - `l.pop([i])`: 删除并返回指定索引 `i` 处的元素 (默认末尾)。
    - `l.remove(x)`: 删除第一个值为 `x` 的元素 (未找到抛出 `ValueError`)。
    - `del my_list[i]`: 删除指定索引处的元素。
    - `del my_list[i:j]`: 删除切片。
    - `l.clear()`: 清空列表。
  - **查找与计数**:
    - `l.index(x[, start[, end]])`: 返回第一个值为 `x` 的元素的索引 (未找到抛出 `ValueError`)。
    - `l.count(x)`: 统计 `x` 出现的次数。
  - **排序与反转**:
    - `l.sort(key=None, reverse=False)`: 原地排序。
    - `sorted(iterable, key=None, reverse=False)`: 返回新的已排序列表 (内置函数)。
    - `l.reverse()`: 原地反转列表。
    - `reversed(seq)`: 返回一个反向迭代器 (内置函数)。
  - **复制**:
    - `new_list = old_list[:]` (浅拷贝)
- `new_list = old_list.copy()` (浅拷贝)
- `import copy; new_list = copy.deepcopy(old_list)` (深拷贝，用于嵌套列表)

### 考试提示
- 熟练掌握索引、切片及添加删除元素的方法
- 区分浅拷贝与深拷贝
- 排序与遍历往往是常见考题

## 5. 元组 (Tuple)
- 创建：`()`, `tuple()`, `(item,)` (单个元素的元组需要逗号)。

- **特性**：有序 (ordered)、不可变 (immutable)。通常用于存储异构数据集合，或作为字典的键。

- **常用操作**：
  - 索引: `my_tuple[index]`
  - 切片: `my_tuple[start:end:step]` (返回新元组)
  - 长度: `len(my_tuple)`
  - 拼接: `+` (创建新元组)
  - 重复: `*` (创建新元组)
  - 成员测试: `item in my_tuple`
  - 遍历: `for item in my_tuple:`
- `t.count(x)`: 统计 `x` 出现的次数。
- `t.index(x[, start[, end]])`: 返回第一个值为 `x` 的元素的索引。
- **用途**：函数返回多个值时自动打包成元组，字符串格式化，用作字典键等。

### 考试提示
- 单元素元组记得加逗号 `(item,)`
- 元组不可变，常用来保存固定数据或作为字典键

## 6. 字典 (Dictionary)
- 创建：`{}`, `dict()`, `dict(key1=value1, key2=value2)`, `{k: v for k, v in iterable}` (字典推导式)。

- **特性**：键值对 (key-value pairs) 集合。键必须是唯一的且不可变类型 (如字符串、数字、元组)。值可以是任意类型。Python 3.7+ 版本字典保持插入顺序。

- **常用操作与方法**：
  - 访问值: `my_dict[key]` (若键不存在，抛出 `KeyError`)。
  - `d.get(key[, default])`: 安全访问，若键不存在，返回 `default` (默认为 `None`)。
  - 添加/修改键值对: `my_dict[key] = value`
  - 删除键值对:
    - `d.pop(key[, default])`: 删除并返回指定键的值 (若键不存在且未提供 `default`，抛出 `KeyError`)。
    - `d.popitem()`: 删除并返回一个 (键, 值) 对 (LIFO 顺序自 Python 3.7 起，之前为任意)。
    - `del my_dict[key]`: 删除指定键的项。
    - `d.clear()`: 清空字典。
  - 长度: `len(my_dict)` (键值对数量)
  - 成员测试: `key in my_dict` (检查键是否存在)
  - **视图对象 (动态)**:
    - `d.keys()`: 返回包含所有键的视图。
    - `d.values()`: 返回包含所有值的视图。
    - `d.items()`: 返回包含所有 (键, 值) 对的视图。
  - 遍历:
    ```python
    for key in my_dict: # 遍历键
        print(key, my_dict[key])
    for value in my_dict.values(): # 遍历值
        print(value)
    for key, value in my_dict.items(): # 遍历键值对
        print(key, value)
    ```
  - `d.update(other_dict)`: 用 `other_dict` 中的键值对更新 `d`。
  - `d.setdefault(key[, default])`: 如果键存在，返回其值；否则插入键及默认值 `default` (默认为 `None`) 并返回 `default`。
  - `dict.fromkeys(seq[, value])`: 创建一个新字典，以 `seq` 中的元素作为键，所有键对应的值为 `value` (默认为 `None`)。

### 考试提示
- 常考遍历字典和使用 `get()` 方法
- 理解键必须唯一且不可变

## 7. 集合 (Set)
- 创建：`{1, 2, 3}`, `set()`, `set(iterable)`, `{x for x in iterable}` (集合推导式)。注意：`{}` 创建的是空字典，空集合必须用 `set()`。

- **特性**：无序 (unordered)、可变 (mutable)、不包含重复元素。

- **常用操作与方法**：
  - 长度: `len(my_set)`
  - 成员测试: `item in my_set` (高效)
  - 遍历: `for item in my_set:`
  - **添加元素**:
    - `s.add(elem)`: 添加单个元素。
    - `s.update(iterable)`: 添加多个元素 (可以是另一个集合、列表、元组等)。
  - **删除元素**:
    - `s.remove(elem)`: 删除元素 (若元素不存在，抛出 `KeyError`)。
    - `s.discard(elem)`: 删除元素 (若元素不存在，不做任何事)。
    - `s.pop()`: 删除并返回任意一个元素 (集合为空时抛出 `KeyError`)。
    - `s.clear()`: 清空集合。
  - **集合运算**:
    - 并集: `s1 | s2` 或 `s1.union(s2, ...)`
    - 交集: `s1 & s2` 或 `s1.intersection(s2, ...)`
    - 差集: `s1 - s2` 或 `s1.difference(s2, ...)`
    - 对称差集 (异或): `s1 ^ s2` 或 `s1.symmetric_difference(s2)` (两个集合中独有的元素)
  - **子集与超集判断**:
    - `s1.issubset(s2)` 或 `s1 <= s2`: `s1` 是否是 `s2` 的子集。
    - `s1.issuperset(s2)` 或 `s1 >= s2`: `s1` 是否是 `s2` 的超集。
    - `s1 < s2`: `s1` 是否是 `s2` 的真子集。
    - `s1 > s2`: `s1` 是否是 `s2` 的真超集。
  - `s1.isdisjoint(s2)`: 两个集合是否没有共同元素。
  - **复制**: `new_set = old_set.copy()` (浅拷贝)

### 考试提示
- 集合不允许重复元素
- 常见考题涉及并集、交集和差集运算

## 8. 冻结集合 (Frozenset)
- 创建：`frozenset()`, `frozenset(iterable)`。

- **特性**：无序 (unordered)、不可变 (immutable)、不包含重复元素。因为不可变，所以可以作为字典的键或集合中的元素。

- **操作**：支持所有不修改集合的集合操作 (如并集、交集、差集、成员测试、`len()` 等)，但不支持 `add`, `remove`, `update` 等修改操作。

### 考试提示
- 不可变集合可用于作为字典键
- 基本操作与 `set` 类似但无法增删

## 9. 输入输出
- **输入**: `variable = input(\"提示信息: \")`
  - `input()` 函数总是返回字符串类型。需要使用 `int()`, `float()` 等进行类型转换。
  ```python
  name = input(\"Enter your name: \")
  age_str = input(\"Enter your age: \")
  age_int = int(age_str)
  ```
- **输出**: `print(value1, value2, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)`
  - `sep`: 分隔符，默认为空格。
  - `end`: 结束符，默认为换行符 `\\n`。
  - `file`: 输出目标，默认为标准输出。
  - `flush`: 是否立即刷新缓冲区。
  ```python
  print(\"Hello\", \"World\", sep=\"-\") # Hello-World
  print(\"First line\", end=\"...\")
  print(\"Second line\") # First line...Second line
  ```

### 考试提示
- `input()` 得到的都是字符串，必要时转换为数字
- `print()` 可以同时输出多个变量
## 10. 常见内置函数 (部分)
- `abs(x)`: 返回数字的绝对值。
- `all(iterable)`: 如果可迭代对象中所有元素都为真 (或可迭代对象为空)，返回 `True`。
- `any(iterable)`: 如果可迭代对象中至少有一个元素为真，返回 `True`。如果可迭代对象为空，返回 `False`。
- `bin(x)`: 将整数转换为二进制字符串 (以 `0b` 开头)。
- `bool(x)`: 将值转换为布尔值。
- `chr(i)`: 返回整数 `i` 对应的 Unicode 字符。
- `ord(c)`: 返回字符 `c` 对应的 Unicode 码点 (整数)。
- `dict()`: 创建字典。
- `dir([object])`: 返回对象的属性和方法列表。
- `divmod(a, b)`: 返回 `(a // b, a % b)`。
- `enumerate(iterable, start=0)`: 返回一个枚举对象，产生 (索引, 值) 对。
- `eval(expression[, globals[, locals]])`: 执行字符串形式的 Python 表达式。
- `exec(object[, globals[, locals]])`: 执行 Python 代码块 (字符串或代码对象)。
- `filter(function, iterable)`: 用 `function` 过滤 `iterable` 中的元素。
- `float()`: 转换为浮点数。
- `format(value[, format_spec])`: 格式化值。
- `getattr(object, name[, default])`: 获取对象的属性值。
- `hasattr(object, name)`: 检查对象是否有指定属性。
- `hash(object)`: 返回对象的哈希值。
- `help([object])`: 显示对象的帮助信息。
- `hex(x)`: 将整数转换为十六进制字符串 (以 `0x` 开头)。
- `id(object)`: 返回对象的唯一标识符 (内存地址)。
- `input()`: 获取用户输入。
- `int()`: 转换为整数。
- `isinstance(object, classinfo)`: 判断对象是否是指定类或类型的实例。
- `issubclass(class, classinfo)`: 判断类是否是指定类的子类。
- `iter(object[, sentinel])`: 返回迭代器。
- `len(s)`: 返回对象的长度。
- `list()`: 创建列表。
- `map(function, iterable, ...)`: 将 `function` 应用于 `iterable` 的每个元素。
- `max(iterable, *[, key, default])` 或 `max(arg1, arg2, *args[, key])`: 返回最大值。
- `min(iterable, *[, key, default])` 或 `min(arg1, arg2, *args[, key])`: 返回最小值。
- `next(iterator[, default])`: 从迭代器获取下一个元素。
- `object()`: 返回一个无特征的新对象。
- `oct(x)`: 将整数转换为八进制字符串 (以 `0o` 开头)。
- `open(file, mode='r', ...)`: 打开文件并返回文件对象。
- `pow(base, exp[, mod])`: 计算 `base` 的 `exp` 次方，可选模 `mod`。
- `print()`: 打印输出。
- `range(stop)` 或 `range(start, stop[, step])`: 生成数字序列。
- `repr(object)`: 返回对象的可打印表示形式 (通常可用于重新创建对象)。
- `reversed(seq)`: 返回反向迭代器。
- `round(number[, ndigits])`: 四舍五入到指定小数位数。
- `set()`: 创建集合。
- `setattr(object, name, value)`: 设置对象的属性值。
- `slice(stop)` 或 `slice(start, stop[, step])`: 创建切片对象。
- `sorted(iterable, *, key=None, reverse=False)`: 返回新的已排序列表。
- `str()`: 转换为字符串。
- `sum(iterable, /, start=0)`: 求和。
- `super([type[, object-or-type]])`: 调用父类的方法。
- `tuple()`: 创建元组。
- `type(object)` 或 `type(name, bases, dict)`: 返回对象类型或创建新类型。
- `vars([object])`: 返回对象的 `__dict__` 属性。
- `zip(*iterables, strict=False)`: 将多个可迭代对象打包成元组的迭代器。

### 考试提示
- 熟记 `len()`, `range()`, `type()` 等常用函数的作用
- 了解 `map()` 和 `filter()` 的基本使用场景

## 11. 运算符 (Operators)
- **算术运算符**: `+`, `-`, `*`, `/` (浮点除), `//` (整数除), `%` (取模), `**` (幂)。
- **比较运算符**: `==`, `!=`, `>`, `<`, `>=`, `<=`。
- **赋值运算符**: `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`。
- **逻辑运算符**: `and`, `or`, `not`。
- **位运算符**: `&` (按位与), `|` (按位或), `^` (按位异或), `~` (按位取反), `<<` (左移), `>>` (右移)。
- **成员运算符**: `in`, `not in`。
- **身份运算符**: `is`, `is not` (比较对象内存地址是否相同)。
- **运算符优先级**: `**` > `~, +, - (一元)` > `*, /, //, %` > `+, - (二元)` > `<<, >>` > `&` > `^` > `|` > `比较, in, not in, is, is not` > `not` > `and` > `or`。
  建议使用括号明确运算顺序。
### 考试提示
- 关注算术、比较和逻辑运算符的用法
- 记住 `and`、`or`、`not` 的短路特性

## 12. 分支结构 (Conditional Statements)
- `if` 语句:
  ```python
  if condition1:
      # code block 1 (executes if condition1 is True)
  elif condition2: # optional
      # code block 2 (executes if condition1 is False and condition2 is True)
  else: # optional
      # code block 3 (executes if all preceding conditions are False)
  ```
- **三元条件运算符 (Conditional Expression)**:
  ```python
  value_if_true if condition else value_if_false
  result = x if x > y else y # result will be the greater of x and y
  ```
### 考试提示
- `if/elif/else` 结构是选择题和填空题的常客
- 三元表达式常用于简写条件判断

## 13. 循环结构 (Loops)
- `for` 循环 (遍历序列或可迭代对象):
  ```python
  for item in iterable:
      # code block for each item
  else: # optional, executes if loop completes normally (no break)
      # code block after loop finishes
  ```
  ```python
  for i in range(5): # iterates from 0 to 4
      print(i)
  ```
- `while` 循环 (条件为真时执行):
  ```python
  while condition:
      # code block
  else: # optional, executes if loop condition becomes False (no break)
      # code block after loop finishes
  ```
### 考试提示
- 掌握 for 和 while 的基本语法
- 注意 else 子句在循环正常结束时执行

## 14. 转移和中断结构 (Control Flow Statements)
- `break`: 立即终止当前最内层的 `for` 或 `while` 循环。
- `continue`: 跳过当前循环的剩余部分，直接进入下一次迭代。
- `pass`: 空语句，用作占位符，不做任何事情。常用于定义空的函数体或类体。
### 考试提示
- break 和 continue 常用于提前结束循环或跳过本次循环
- pass 在编写占位代码时使用

## 15. 模块的导入 (Importing Modules)
- `import module_name`
  - 使用: `module_name.function_name()`
- `import module_name as alias_name`
  - 使用: `alias_name.function_name()`
- `from module_name import specific_item1, specific_item2`
  - 使用: `specific_item1()`
- `from module_name import specific_item as alias`
  - 使用: `alias()`
- `from module_name import *` (导入所有公共名称，不推荐，可能导致命名冲突)
  - 使用: `function_name()`
- **包 (Packages)**: 带有 `__init__.py` 文件的目录，可以包含子模块和子包。
  `import package.module`
  `from package import module`

### 考试提示
- 掌握基本的 import 语法
- 避免使用 `from module import *` 造成命名冲突
## 16. 自定义函数 (Defining Functions)
- 定义函数:
  ```python
  def function_name(param1, param2, ..., paramN=default_value, *args, **kwargs):
      """Docstring: 描述函数功能、参数和返回值."""
      # code block
      return value # 可选，若无 return 或 return 后无值，则返回 None
  ```
- 调用函数:
  ```python
  result = function_name(arg1, arg2, keyword_arg=value)
  ```
- **参数类型**：
  - **位置参数 (Positional arguments)**: 按顺序传递。
  - **关键字参数 (Keyword arguments)**: 通过参数名传递，顺序不重要。
  - **默认参数值 (Default argument values)**: 定义时指定默认值，调用时可省略。
    *   注意：默认值在函数定义时计算一次。避免使用可变对象 (如列表、字典) 作为默认值，除非特意如此。
      ```python
      def append_to_list(item, my_list=[]): # 不推荐的可变默认值\          my_list.append(item)
          return my_list
      # 推荐做法
      def append_to_list_safe(item, my_list=None):
          if my_list is None:
              my_list = []
          my_list.append(item)
          return my_list
      ```
  - **可变位置参数 (`*args`)**: 将多余的位置参数收集为一个元组。
    ```python
    def print_all(*args):
        for arg in args:
            print(arg)
    print_all(1, 'hello', True)
    ```
  - **可变关键字参数 (`**kwargs`)**: 将多余的关键字参数收集为一个字典。
    ```python
    def print_info(**kwargs):
        for key, value in kwargs.items():
            print(f\"{key}: {value}\")
    print_info(name=\"Alice\", age=30, city=\"New York\")
    ```
  - **仅限位置参数 (Positional-only arguments, Python 3.8+)**: 使用 `/` 分隔。
    ```python
    def func(pos_only1, pos_only2, /, pos_or_kw, *, kw_only1, kw_only2):
        pass
    ```
  - **仅限关键字参数 (Keyword-only arguments)**: 在 `*args` 或单独的 `*` 之后定义的参数。
- **Lambda 函数 (匿名函数)**: 简洁的单行函数。
  ```python
  add = lambda x, y: x + y
  print(add(3, 5)) # 8
  ```
- **作用域 (Scope)**: LEGB 规则 (Local, Enclosing function locals, Global, Built-in)。
  - `global` 关键字: 在函数内部修改全局变量。
  - `nonlocal` 关键字: 在嵌套函数内部修改外层 (非全局) 函数的变量。
- **闭包 (Closures)**: 内部函数可以记住并访问其外部函数的词法作用域，即使外部函数已经执行完毕。
- **装饰器 (Decorators)**: 一种修改或增强函数 (或类) 的方式，本质上是接收函数作为参数并返回新函数的函数。
  ```python
  def my_decorator(func):
      def wrapper(*args, **kwargs):
          print(\"Something is happening before the function is called.\")
          result = func(*args, **kwargs)
          print(\"Something is happening after the function is called.\")
          return result
      return wrapper

  @my_decorator
  def say_hello(name):
      print(f\"Hello, {name}!\")

  say_hello(\"World\")
  ```
### 考试提示
- 理解函数的定义和调用格式
- 注意可变默认参数带来的问题
- 匿名函数和装饰器在选择题中偶有出现

## 17. 类与对象 (Classes and Objects - OOP Basics)
- 定义类:
  ```python
  class ClassName(BaseClass1, BaseClass2, ...): # 继承可选
      class_variable = value # 类变量，所有实例共享

      def __init__(self, param1, param2, ...): # 构造方法 (初始化器)
          self.instance_variable1 = param1 # 实例变量
          self.instance_variable2 = param2
          # self 指向实例本身

      def method_name(self, arg1, arg2, ...):
          # 方法体
          return result

      @classmethod
      def class_method_name(cls, arg1, ...): # cls 指向类本身
          # 操作类变量或创建实例
          return cls(arg1) 

      @staticmethod
      def static_method_name(arg1, arg2, ...): # 无 self 或 cls 参数
          # 独立功能，与类或实例状态无关
          pass
  ```
- 创建对象 (实例化):
  ```python
  my_object = ClassName(value1, value2, ...)
  ```
- 访问属性和方法:
  ```python
  my_object.instance_variable1
  my_object.method_name(arg_value1, ...)
  ClassName.class_variable
  ClassName.class_method_name(...)
  ClassName.static_method_name(...)
  ```
- **继承 (Inheritance)**: 子类继承父类的属性和方法。
- **多态 (Polymorphism)**: 不同类的对象可以响应相同的方法调用。
- **封装 (Encapsulation)**: 将数据 (属性) 和操作数据的方法捆绑在一起，并隐藏内部实现细节 (通过命名约定如 `_protected`, `__private` 实现伪私有)。
- **特殊方法 (Magic/Dunder Methods)**: 以双下划线开头和结尾的方法，如 `__init__`, `__str__`, `__repr__`, `__len__`, `__add__` 等，用于实现操作符重载、自定义行为等。

### 考试提示
- 牢记类的定义格式及 `__init__` 方法
- 常见概念: 继承、封装、多态
- 实例方法第一个参数为 `self`
## 18. 异常处理 (Exception Handling)
- `try...except...else...finally` 块:
  ```python
  try:
      # 可能引发异常的代码块
      result = 10 / 0
  except ZeroDivisionError as e: # 捕获特定异常
      print(f\"Error: Cannot divide by zero. ({e})\")
  except TypeError:
      print(\"Error: Type mismatch.\")
  except Exception as e: # 捕获所有其他 Exception 子类的异常 (通用)
      print(f\"An unexpected error occurred: {e}\")
  else: # 可选，如果没有异常发生则执行
      print(\"Division successful.\")
  finally: # 可选，无论是否发生异常都会执行 (通常用于资源清理)
      print(\"Execution finished.\")
  ```
- **抛出异常**: `raise ExceptionType(\"Error message\")`
### 考试提示
- 掌握 try/except 基本结构
- 会使用 finally 进行资源清理
- 自定义异常了解即可
- **自定义异常**: 通过继承 `Exception` 或其子类来创建。
  ```python
  class MyCustomError(Exception):
      pass

  # raise MyCustomError(\"This is a custom error.\")
  ```

## 19. 文件操作 (File I/O)
- **打开文件**: `file_object = open(filename, mode='r', encoding=None)`
  - `mode`: `'r'` (读), `'w'` (写，覆盖), `'a'` (追加), `'x'` (创建，若存在则失败), `'b'` (二进制), `'+'` (读写)。
  - `encoding`: 文件编码，如 `'utf-8'`。
- **读取文件**:
  - `file.read([size])`: 读取指定字节数或整个文件。
  - `file.readline([size])`: 读取一行。
  - `file.readlines([hint])`: 读取所有行并返回列表。
  - 迭代文件对象: `for line in file_object:`
- **写入文件**:
  - `file.write(string)`
  - `file.writelines(list_of_strings)`
- **关闭文件**: `file_object.close()` (重要！释放资源)
- **使用 `with` 语句 (推荐，自动关闭文件)**:
  ```python
  with open(\"myfile.txt\", \"r\", encoding=\"utf-8\") as f:
      content = f.read()
      # ... process content ...
  # 文件在此处自动关闭
  ```
- **文件指针**: `file.tell()` (当前位置), `file.seek(offset[, whence])` (移动指针)。

### 考试提示
- 文件操作常与 with 语句结合考察
- 牢记常用模式: r/w/a
- 文件使用后记得关闭或使用 with 自动管理
## 20. 列表/集合/字典推导式 (Comprehensions)
- **列表推导式**: `[expression for item in iterable if condition]`
  ```python
  squares = [x**2 for x in range(10)] # [0, 1, 4, ..., 81]
  even_numbers = [x for x in range(20) if x % 2 == 0]
  ```
- **集合推导式**: `{expression for item in iterable if condition}`
  ```python
  unique_squares = {x**2 for x in [1, -1, 2, -2, 3]}
  ```
- **字典推导式**: `{key_expr: value_expr for item in iterable if condition}`
  ```python
  square_dict = {x: x**2 for x in range(5)}
  ```
- **生成器表达式 (Generator Expressions)**: `(expression for item in iterable if condition)`
  - 返回一个生成器对象，按需产生值，节省内存。
  ```python
  sum_of_squares = sum(x**2 for x in range(1000000)) # 高效
  ```

### 考试提示
- 推导式语法灵活，注意遍历顺序和条件位置
- 生成器表达式节省内存，常与 sum、list 等函数配合
## 21. 生成器 (Generators)
- **使用 `yield` 关键字的函数**：每次调用 `next()` 时，从上次 `yield` 的地方继续执行，直到遇到下一个 `yield` 或函数结束。
  ```python
  def count_up_to(n):
      i = 0
      while i < n:
          yield i
          i += 1

  counter = count_up_to(5)
  for num in counter:
      print(num) # 0, 1, 2, 3, 4
  ```
- **优点**：内存高效，惰性求值。
### 考试提示
- `yield` 定义生成器函数，返回迭代器
- 生成器适合处理大量数据按需计算

## 22. 迭代器与可迭代对象 (Iterators and Iterables)
- **可迭代对象 (Iterable)**: 可以被迭代的对象，如列表、元组、字符串、字典、集合、文件对象、生成器。必须实现 `__iter__()` 方法 (返回迭代器) 或 `__getitem__()` 方法 (支持序列索引)。
- **迭代器 (Iterator)**: 表示数据流的对象。必须实现 `__iter__()` 方法 (返回自身) 和 `__next__()` 方法 (返回下一个元素或在耗尽时引发 `StopIteration` 异常)。
- `iter()` 内置函数将可迭代对象转换为迭代器。
- `next()` 内置函数从迭代器获取下一个元素。

### 考试提示
- 理解可迭代对象与迭代器的区别
- 掌握使用 iter() 和 next() 的基本方法
## 23. 常用标准库模块 (部分)
- `math`: 数学函数 (`sqrt`, `sin`, `cos`, `pi`, `e` 等)。
- `random`: 生成伪随机数 (`random`, `randint`, `choice`, `shuffle` 等)。
- `datetime`: 日期和时间处理 (`date`, `time`, `datetime`, `timedelta` 等)。
- `time`: 时间相关函数 (`time`, `sleep` 等)。
- `json`: JSON 编码和解码 (`dumps`, `loads` 等)。
- `os`: 操作系统接口 (`path`, `listdir`, `mkdir`, `remove` 等)。
- `sys`: 系统特定参数和函数 (`argv`, `exit`, `path` 等)。
- `re`: 正则表达式操作 (`match`, `search`, `findall`, `sub` 等)。
- `collections`: 额外的数据结构 (`deque`, `Counter`, `defaultdict`, `namedtuple` 等)。
- `itertools`: 用于创建高效迭代器的函数 (`count`, `cycle`, `permutations`, `combinations` 等)。
- `functools`: 高阶函数和可调用对象的操作 (`partial`, `reduce`, `wraps` 等)。
- `argparse`: 命令行参数解析。
- `requests` (第三方库，常用): HTTP 请求。
- `numpy` (第三方库，常用): 数值计算，N维数组。
- `pandas` (第三方库，常用): 数据分析和处理，DataFrame。
### 考试提示
- 了解常见标准库的用途即可
- 第三方库出现时注意其主要功能

## 24. 虚拟环境 (Virtual Environments)
- **目的**: 为不同项目创建隔离的 Python 环境，管理各自的依赖包，避免版本冲突。
- **常用工具**: `venv` (Python 3.3+ 内置), `virtualenv` (第三方)。
- **`venv` 基本使用**:
  1. 创建环境: `python -m venv myenv_name`
  2. 激活环境:
     - Windows: `myenv_name\\Scripts\\activate`
     - macOS/Linux: `source myenv_name/bin/activate`
  3. 安装包: `pip install package_name`
  4. 查看已安装包: `pip list` 或 `pip freeze > requirements.txt`
  5. 退出环境: `deactivate`

## 25. pip 包管理器
- `pip install package_name`: 安装包。
- `pip install package_name==version`: 安装指定版本。
- `pip install -r requirements.txt`: 从文件安装所有依赖。
- `pip uninstall package_name`: 卸载包。
- `pip list`: 列出已安装的包。
- `pip freeze`: 以 `requirements.txt` 格式输出已安装的包。
- `pip search query`: 搜索包。
- `pip show package_name`: 显示包的详细信息。
- `pip install --upgrade package_name`: 升级包。

## 26. Python 最佳实践和风格指南 (PEP 8)

PEP 8 是 Python 的官方风格指南，它提供了关于如何编写清晰、可读的 Python 代码的约定。遵循 PEP 8 可以使代码在不同开发者之间更具一致性和可维护性。

### 主要方面：

1.  **代码布局**
    *   **缩进**: 使用 4 个空格进行缩进，不要使用制表符 (Tab)。
    *   **行长度**: 每行代码最长不应超过 79 个字符。对于文档字符串或注释，可以限制在 72 个字符。
    *   **空行**: 
        *   顶层函数和类定义之间用两个空行隔开。
        *   类中的方法定义之间用一个空行隔开。
        *   在函数内部，可以使用空行来分隔逻辑上不同的代码块 (谨慎使用)。
    *   **导入 (Imports)**:
        *   导入语句应始终放在文件顶部，位于模块注释和文档字符串之后，全局变量和常量之前。
        *   导入应按以下顺序分组，每组之间用一个空行隔开：
            1.  标准库导入 (e.g., `os`, `sys`)
            2.  相关第三方库导入 (e.g., `requests`, `numpy`)
            3.  本地应用程序/库特定导入
        *   推荐使用绝对导入，例如 `from mypkg import mysubmodule` 而不是 `import mysubmodule` (如果 `mysubmodule` 在 `mypkg` 内)。
        *   避免使用通配符导入 (`from module import *`)，因为它会使命名空间不清晰。
    *   **表达式和语句中的空格**:
        *   二元运算符两侧各使用一个空格：`i = i + 1`, `submitted += 1`。
        *   逗号、分号、冒号后应有空格，但其前不应有空格：`a, b = 1, 2`。
        *   函数调用时，函数名和左括号之间不应有空格：`my_func(arg1)`。
        *   切片操作中，冒号两侧的空格应一致，通常不加空格或两侧都加空格 (如果优先级需要)。
        *   不要在括号、方括号、花括号的内部紧邻处添加空格：`my_list[0]` 而不是 `my_list [ 0 ]`。

2.  **命名约定**
    *   **变量名**: 小写，单词间用下划线分隔 (snake_case)，例如 `my_variable`, `user_name`。
    *   **函数名**: 与变量名类似，小写加下划线，例如 `calculate_sum()`, `get_user_data()`。
    *   **类名**: CapWords 约定 (驼峰式，首字母大写)，例如 `MyClass`, `UserProfile`。
    *   **常量名**: 全部大写，单词间用下划线分隔，例如 `MAX_OVERFLOW`, `TOTAL_COUNT`。
    *   **模块名**: 简短、全小写，可以使用下划线 (但不推荐，除非为了提高可读性)，例如 `mymodule`, `data_processing`。
    *   **包名**: 简短、全小写，不推荐使用下划线，例如 `mypackage`。
    *   **方法名**: 与函数名类似。
    *   **实例方法第一个参数**: `self`。
    *   **类方法第一个参数**: `cls`。
    *   **受保护的 (Protected) 成员**: 以下划线开头，例如 `_protected_member` (这是一种约定，Python 不强制私有性)。
    *   **私有的 (Private) 成员**: 以双下划线开头，例如 `__private_member` (会触发名称修饰 Name Mangling)。

3.  **注释**
    *   **块注释 (Block Comments)**: 通常用于注释掉代码块前面的几行代码，每行以 `#` 和一个空格开头，并与它们注释的代码具有相同的缩进级别。
    *   **行内注释 (Inline Comments)**: 在代码行的同一行，用至少两个空格与语句分开，然后是 `#` 和一个空格，例如 `x = x + 1  # Increment x`。应谨慎使用行内注释。
    *   **文档字符串 (Docstrings)**: 为所有公共模块、函数、类和方法编写文档字符串。文档字符串是用三引号 (`"""..."""` 或 `'''...'''`) 括起来的字符串。
        *   第一行应为简短的摘要，后面可以跟更详细的解释。
        *   对于函数和方法，应描述其参数、返回值、可能抛出的异常等。
        ```python
        def my_function(arg1, arg2):
            """Summarize the function's purpose here.

            More detailed explanation if needed.

            Args:
                arg1 (type): Description of arg1.
                arg2 (type): Description of arg2.

            Returns:
                type: Description of the return value.

            Raises:
                SpecificException: Why this exception is raised.
            """
            # function body
            pass
        ```

4.  **编程建议**
    *   **与 None 的比较**: 使用 `is` 或 `is not`，而不是 `==`。例如 `if my_var is None:`。
    *   **布尔值判断**: 不要将布尔值与 `True` 或 `False` 进行比较。例如，使用 `if my_bool_var:` 而不是 `if my_bool_var == True:`。
    *   **使用 `startswith()` 和 `endswith()`**: 用于检查前缀或后缀，而不是使用字符串切片。
    *   **异常处理**: 尽量捕获具体的异常，而不是裸露的 `except:` 或 `except Exception:` (除非确实需要通用处理并记录)。
    *   **使用 `with` 语句**: 自动管理资源 (如文件、锁)，确保它们在使用完毕后正确关闭或释放。
    *   **返回语句**: 函数要么都返回表达式，要么都不返回 (隐式返回 `None`)。不要混合使用。
    *   **列表推导式**: 对于简单的循环创建列表，列表推导式通常更简洁可读。

### 工具

*   **Linters**: 工具如 `Flake8` (结合了 PyFlakes, pycodestyle/PEP8, McCabe), `Pylint` 可以帮助检查代码是否符合 PEP 8 及其他潜在问题。
*   **Formatters**: 工具如 `Black`, `autopep8`, `YAPF` 可以自动格式化代码以符合 PEP 8 的大部分规则。

遵循 PEP 8 不仅仅是为了美观，更重要的是为了提高代码的长期可读性和可维护性，这在团队协作中尤为重要。

本文档会持续更新和扩充。
