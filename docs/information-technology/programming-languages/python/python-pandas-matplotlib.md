# Pandas 和 Matplotlib 基本用法

本文档简要介绍 Pandas 和 Matplotlib 的基本用法。

## Pandas

Pandas 是一个功能强大且易于使用的开源数据分析和操作工具，构建于 Python 编程语言之上。

### 主要特性：
- 用于数据操作的 DataFrame 对象，具有集成索引功能。
- 用于在内存数据结构和不同文件格式之间读取和写入数据的工具。
- 数据对齐和集成处理缺失数据。
- 数据集的重塑和透视。
- 基于标签的切片、花式索引和大型数据集的子集获取。

### 基本用法示例：

```python
import pandas as pd

# 创建一个简单的 DataFrame
data = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data)

print(df)

# 从 CSV 文件读取数据
# df_from_csv = pd.read_csv('your_file.csv')

# 基本数据操作
# print(df.head())
# print(df.describe())
```

## Matplotlib

Matplotlib 是一个用于在 Python 中创建静态、动画和交互式可视化的综合库。

### 主要特性：
- 创建出版物质量的图表。
- 大量绘图类型：折线图、散点图、条形图、直方图等。
- 完全控制线条样式、字体属性、坐标轴属性等。
- 输出多种文件格式（PNG、PDF、SVG、EPS 等）。

### 基本用法示例：

```python
import matplotlib.pyplot as plt
import numpy as np

# 示例数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 创建一个简单的折线图
plt.figure(figsize=(8, 6))
plt.plot(x, y, label='sin(x)')
plt.title('简单折线图')
plt.xlabel('x轴')
plt.ylabel('y轴')
plt.legend()
plt.grid(True)
# 在脚本或 IDE 中显示绘图
# plt.show()
# 将绘图保存到文件
# plt.savefig('simple_plot.png')
```
