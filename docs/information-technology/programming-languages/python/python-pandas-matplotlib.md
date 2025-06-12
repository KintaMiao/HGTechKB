# Pandas 和 Matplotlib 基本用法

本文档详细介绍 Pandas 和 Matplotlib 的基本用法，为数据分析和可视化提供全面的参考指南。

## 目录
- [Pandas 和 Matplotlib 基本用法](#pandas-和-matplotlib-基本用法)
  - [目录](#目录)
  - [Pandas](#pandas)
    - [基本概念](#基本概念)
      - [主要特性：](#主要特性)
      - [核心数据结构](#核心数据结构)
    - [DataFrame 创建和操作](#dataframe-创建和操作)
      - [创建 DataFrame 的多种方式](#创建-dataframe-的多种方式)
      - [基本信息查看](#基本信息查看)
    - [数据选择和索引](#数据选择和索引)
      - [列选择](#列选择)
      - [行选择](#行选择)
      - [高级索引操作](#高级索引操作)
    - [数据清洗和处理](#数据清洗和处理)
      - [处理缺失值](#处理缺失值)
      - [数据类型转换](#数据类型转换)
    - [数据分组和聚合](#数据分组和聚合)
      - [GroupBy 操作](#groupby-操作)
      - [数据透视表](#数据透视表)
    - [数据合并和连接](#数据合并和连接)
      - [DataFrame 合并](#dataframe-合并)
      - [数据拼接](#数据拼接)
    - [数据输入输出](#数据输入输出)
      - [文件读写操作](#文件读写操作)
      - [数据库操作](#数据库操作)
  - [Matplotlib](#matplotlib)
    - [基本概念](#基本概念-1)
      - [主要特性：](#主要特性-1)
      - [核心概念](#核心概念)
    - [基本绘图](#基本绘图)
      - [折线图](#折线图)
      - [散点图](#散点图)
      - [柱状图](#柱状图)
    - [图形类型](#图形类型)
      - [直方图](#直方图)
      - [饼图](#饼图)
      - [箱线图](#箱线图)
      - [热力图](#热力图)
    - [图形定制](#图形定制)
      - [样式和主题](#样式和主题)
      - [颜色和线型定制](#颜色和线型定制)
    - [子图和布局](#子图和布局)
      - [创建子图](#创建子图)
      - [注释和文本](#注释和文本)
    - [保存和导出](#保存和导出)
  - [Pandas 与 Matplotlib 结合使用](#pandas-与-matplotlib-结合使用)
    - [直接绘图](#直接绘图)
    - [数据分析可视化](#数据分析可视化)
    - [实际应用示例](#实际应用示例)

---

## Pandas

Pandas 是一个功能强大且易于使用的开源数据分析和操作工具，构建于 Python 编程语言之上。

### 基本概念

#### 主要特性：
- **DataFrame 对象**：用于数据操作的二维标记数据结构，具有集成索引功能
- **Series 对象**：一维标记数组，能够保存任何数据类型
- **数据 I/O 工具**：用于在内存数据结构和不同文件格式之间读取和写入数据
- **数据对齐**：集成处理缺失数据的功能
- **数据重塑**：数据集的重塑和透视功能
- **数据选择**：基于标签的切片、花式索引和大型数据集的子集获取

#### 核心数据结构

**Series（一维数据）**：
```python
import pandas as pd
import numpy as np

# 创建 Series
s1 = pd.Series([1, 3, 5, np.nan, 6, 8])
print("Series 示例：")
print(s1)

# 带索引的 Series
s2 = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print("\n带索引的 Series：")
print(s2)
```

**DataFrame（二维数据）**：
```python
# 创建 DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['北京', '上海', '广州', '深圳'],
    'Salary': [50000, 60000, 70000, 55000]
}
df = pd.DataFrame(data)
print("DataFrame 示例：")
print(df)
```

### DataFrame 创建和操作

#### 创建 DataFrame 的多种方式

```python
# 1. 从字典创建
data_dict = {'A': [1, 2, 3], 'B': [4, 5, 6]}
df1 = pd.DataFrame(data_dict)

# 2. 从列表的列表创建
data_list = [[1, 4], [2, 5], [3, 6]]
df2 = pd.DataFrame(data_list, columns=['A', 'B'])

# 3. 从 NumPy 数组创建
data_array = np.array([[1, 4], [2, 5], [3, 6]])
df3 = pd.DataFrame(data_array, columns=['A', 'B'])

# 4. 创建空 DataFrame 并添加数据
df4 = pd.DataFrame()
df4['Name'] = ['Alice', 'Bob']
df4['Age'] = [25, 30]

print("从字典创建的 DataFrame：")
print(df1)
```

#### 基本信息查看

```python
# 查看数据基本信息
print("数据形状：", df.shape)  # (行数, 列数)
print("数据类型：")
print(df.dtypes)
print("\n数据信息：")
print(df.info())
print("\n统计摘要：")
print(df.describe())
print("\n前5行：")
print(df.head())
print("\n后5行：")
print(df.tail())
```

### 数据选择和索引

#### 列选择

```python
# 选择单列（返回 Series）
name_series = df['Name']
print("选择单列：")
print(name_series)

# 选择多列（返回 DataFrame）
subset = df[['Name', 'Age']]
print("\n选择多列：")
print(subset)

# 使用点号访问列（列名不能有空格或特殊字符）
ages = df.Age
print("\n使用点号访问：")
print(ages)
```

#### 行选择

```python
# 使用 iloc 进行位置索引
print("使用 iloc 选择行：")
print(df.iloc[0])  # 第一行
print(df.iloc[0:2])  # 前两行
print(df.iloc[-1])  # 最后一行

# 使用 loc 进行标签索引
print("\n使用 loc 选择行：")
print(df.loc[0])  # 索引为0的行
print(df.loc[0:2])  # 索引0到2的行

# 布尔索引
print("\n布尔索引示例：")
high_salary = df[df['Salary'] > 55000]
print("薪资大于55000的员工：")
print(high_salary)

# 多条件筛选
young_high_salary = df[(df['Age'] < 30) & (df['Salary'] > 50000)]
print("\n年龄小于30且薪资大于50000的员工：")
print(young_high_salary)
```

#### 高级索引操作

```python
# 设置索引
df_indexed = df.set_index('Name')
print("以姓名为索引：")
print(df_indexed)

# 重置索引
df_reset = df_indexed.reset_index()
print("\n重置索引：")
print(df_reset)

# 多级索引
arrays = [['A', 'A', 'B', 'B'], [1, 2, 1, 2]]
tuples = list(zip(*arrays))
index = pd.MultiIndex.from_tuples(tuples, names=['first', 'second'])
df_multi = pd.DataFrame(np.random.randn(4, 2), index=index, columns=['X', 'Y'])
print("\n多级索引示例：")
print(df_multi)
```

### 数据清洗和处理

#### 处理缺失值

```python
# 创建包含缺失值的数据
data_with_nan = {
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, 7, 8],
    'C': [9, 10, 11, np.nan]
}
df_nan = pd.DataFrame(data_with_nan)
print("包含缺失值的数据：")
print(df_nan)

# 检查缺失值
print("\n缺失值检查：")
print(df_nan.isnull())
print("\n每列缺失值数量：")
print(df_nan.isnull().sum())

# 删除缺失值
print("\n删除包含缺失值的行：")
print(df_nan.dropna())

print("\n删除包含缺失值的列：")
print(df_nan.dropna(axis=1))

# 填充缺失值
print("\n用0填充缺失值：")
print(df_nan.fillna(0))

print("\n用前一个值填充：")
print(df_nan.fillna(method='ffill'))

print("\n用均值填充：")
print(df_nan.fillna(df_nan.mean()))
```

#### 数据类型转换

```python
# 查看数据类型
print("原始数据类型：")
print(df.dtypes)

# 转换数据类型
df_copy = df.copy()
df_copy['Age'] = df_copy['Age'].astype('float64')
df_copy['Salary'] = df_copy['Salary'].astype('str')

print("\n转换后的数据类型：")
print(df_copy.dtypes)

# 转换为分类数据
df_copy['City'] = df_copy['City'].astype('category')
print("\n城市列转换为分类数据：")
print(df_copy['City'].dtype)
```

### 数据分组和聚合

#### GroupBy 操作

```python
# 创建示例数据
sales_data = {
    'Product': ['A', 'B', 'A', 'B', 'A', 'B'],
    'Region': ['North', 'North', 'South', 'South', 'North', 'South'],
    'Sales': [100, 150, 200, 120, 180, 90],
    'Quantity': [10, 15, 20, 12, 18, 9]
}
sales_df = pd.DataFrame(sales_data)
print("销售数据：")
print(sales_df)

# 按产品分组
print("\n按产品分组的销售总额：")
product_sales = sales_df.groupby('Product')['Sales'].sum()
print(product_sales)

# 按地区分组
print("\n按地区分组的统计信息：")
region_stats = sales_df.groupby('Region').agg({
    'Sales': ['sum', 'mean', 'count'],
    'Quantity': ['sum', 'mean']
})
print(region_stats)

# 多列分组
print("\n按产品和地区分组：")
multi_group = sales_df.groupby(['Product', 'Region'])['Sales'].sum()
print(multi_group)
```

#### 数据透视表

```python
# 创建透视表
print("\n透视表示例：")
pivot_table = sales_df.pivot_table(
    values='Sales',
    index='Product',
    columns='Region',
    aggfunc='sum',
    fill_value=0
)
print(pivot_table)

# 更复杂的透视表
pivot_complex = sales_df.pivot_table(
    values=['Sales', 'Quantity'],
    index='Product',
    columns='Region',
    aggfunc={'Sales': 'sum', 'Quantity': 'mean'}
)
print("\n复杂透视表：")
print(pivot_complex)
```

### 数据合并和连接

#### DataFrame 合并

```python
# 创建两个 DataFrame
df1 = pd.DataFrame({
    'ID': [1, 2, 3, 4],
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Department': ['IT', 'HR', 'Finance', 'IT']
})

df2 = pd.DataFrame({
    'ID': [1, 2, 3, 5],
    'Salary': [50000, 60000, 70000, 55000],
    'Bonus': [5000, 6000, 7000, 5500]
})

print("DataFrame 1：")
print(df1)
print("\nDataFrame 2：")
print(df2)

# 内连接
inner_join = pd.merge(df1, df2, on='ID', how='inner')
print("\n内连接结果：")
print(inner_join)

# 左连接
left_join = pd.merge(df1, df2, on='ID', how='left')
print("\n左连接结果：")
print(left_join)

# 外连接
outer_join = pd.merge(df1, df2, on='ID', how='outer')
print("\n外连接结果：")
print(outer_join)
```

#### 数据拼接

```python
# 垂直拼接
df_top = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df_bottom = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})
vertical_concat = pd.concat([df_top, df_bottom], ignore_index=True)
print("\n垂直拼接：")
print(vertical_concat)

# 水平拼接
df_left = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df_right = pd.DataFrame({'C': [5, 6], 'D': [7, 8]})
horizontal_concat = pd.concat([df_left, df_right], axis=1)
print("\n水平拼接：")
print(horizontal_concat)
```

### 数据输入输出

#### 文件读写操作

```python
# 保存到 CSV 文件
df.to_csv('employee_data.csv', index=False, encoding='utf-8')
print("数据已保存到 CSV 文件")

# 从 CSV 文件读取
# df_from_csv = pd.read_csv('employee_data.csv', encoding='utf-8')
# print("从 CSV 读取的数据：")
# print(df_from_csv)

# 保存到 Excel 文件
# df.to_excel('employee_data.xlsx', index=False, sheet_name='员工信息')
# print("数据已保存到 Excel 文件")

# 从 Excel 文件读取
# df_from_excel = pd.read_excel('employee_data.xlsx', sheet_name='员工信息')

# 保存到 JSON 文件
df.to_json('employee_data.json', orient='records', force_ascii=False)
print("数据已保存到 JSON 文件")

# 从 JSON 文件读取
# df_from_json = pd.read_json('employee_data.json')
```

#### 数据库操作

```python
# 连接 SQLite 数据库示例（需要 sqlite3）
import sqlite3

# 创建数据库连接
# conn = sqlite3.connect('example.db')

# 保存到数据库
# df.to_sql('employees', conn, if_exists='replace', index=False)

# 从数据库读取
# df_from_db = pd.read_sql('SELECT * FROM employees', conn)

# 关闭连接
# conn.close()

print("数据库操作示例（已注释）")
```

---

## Matplotlib

Matplotlib 是一个用于在 Python 中创建静态、动画和交互式可视化的综合库。

### 基本概念

#### 主要特性：
- **出版质量图表**：创建出版物质量的图表和可视化
- **丰富的图表类型**：折线图、散点图、条形图、直方图、饼图等
- **完全定制化**：完全控制线条样式、字体属性、坐标轴属性等
- **多种输出格式**：支持 PNG、PDF、SVG、EPS 等多种文件格式
- **交互式功能**：支持缩放、平移等交互操作

#### 核心概念

```python
import matplotlib.pyplot as plt
import numpy as np

# Matplotlib 的层次结构：
# Figure（图形）-> Axes（坐标轴）-> Artist（图形元素）

# 创建图形和坐标轴
fig, ax = plt.subplots(figsize=(8, 6))

# 示例数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 在坐标轴上绘图
ax.plot(x, y, label='sin(x)')
ax.set_title('Matplotlib 基本结构示例')
ax.set_xlabel('x轴')
ax.set_ylabel('y轴')
ax.legend()
ax.grid(True)

# 显示图形
# plt.show()
```

### 基本绘图

#### 折线图

```python
# 基本折线图
x = np.linspace(0, 10, 50)
y1 = np.sin(x)
y2 = np.cos(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='sin(x)', color='blue', linestyle='-', linewidth=2)
plt.plot(x, y2, label='cos(x)', color='red', linestyle='--', linewidth=2)

plt.title('三角函数图像', fontsize=16)
plt.xlabel('x', fontsize=12)
plt.ylabel('y', fontsize=12)
plt.legend(fontsize=12)
plt.grid(True, alpha=0.3)
# plt.show()

# 带标记的折线图
plt.figure(figsize=(10, 6))
x_points = np.linspace(0, 10, 11)
y_points = np.sin(x_points)

plt.plot(x_points, y_points, 'o-', markersize=8, linewidth=2,
         markerfacecolor='red', markeredgecolor='black', label='数据点')
plt.title('带标记的折线图')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.legend()
plt.grid(True)
# plt.show()
```

#### 散点图

```python
# 基本散点图
np.random.seed(42)
x = np.random.randn(100)
y = np.random.randn(100)
colors = np.random.rand(100)
sizes = 1000 * np.random.rand(100)

plt.figure(figsize=(10, 8))
scatter = plt.scatter(x, y, c=colors, s=sizes, alpha=0.6, cmap='viridis')
plt.colorbar(scatter, label='颜色值')
plt.title('散点图示例', fontsize=16)
plt.xlabel('x值', fontsize=12)
plt.ylabel('y值', fontsize=12)
# plt.show()

# 分类散点图
categories = ['A', 'B', 'C']
colors_cat = ['red', 'blue', 'green']

plt.figure(figsize=(10, 6))
for i, category in enumerate(categories):
    x_cat = np.random.normal(i, 0.5, 50)
    y_cat = np.random.normal(i, 0.5, 50)
    plt.scatter(x_cat, y_cat, c=colors_cat[i], label=f'类别 {category}', alpha=0.7)

plt.title('分类散点图')
plt.xlabel('x值')
plt.ylabel('y值')
plt.legend()
# plt.show()
```

#### 柱状图

```python
# 基本柱状图
categories = ['产品A', '产品B', '产品C', '产品D', '产品E']
values = [23, 45, 56, 78, 32]

plt.figure(figsize=(10, 6))
bars = plt.bar(categories, values, color=['red', 'blue', 'green', 'orange', 'purple'])
plt.title('产品销售量对比', fontsize=16)
plt.xlabel('产品', fontsize=12)
plt.ylabel('销售量', fontsize=12)

# 在柱子上添加数值标签
for bar, value in zip(bars, values):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1,
             str(value), ha='center', va='bottom')

plt.xticks(rotation=45)
plt.tight_layout()
# plt.show()

# 分组柱状图
x = np.arange(len(categories))
values1 = [23, 45, 56, 78, 32]
values2 = [34, 56, 67, 89, 43]

width = 0.35
plt.figure(figsize=(12, 6))
plt.bar(x - width/2, values1, width, label='2023年', color='skyblue')
plt.bar(x + width/2, values2, width, label='2024年', color='lightcoral')

plt.title('产品销售量年度对比')
plt.xlabel('产品')
plt.ylabel('销售量')
plt.xticks(x, categories)
plt.legend()
# plt.show()
```

### 图形类型

#### 直方图

```python
# 基本直方图
np.random.seed(42)
data = np.random.normal(100, 15, 1000)

plt.figure(figsize=(10, 6))
n, bins, patches = plt.hist(data, bins=30, color='skyblue', alpha=0.7, edgecolor='black')
plt.title('正态分布直方图', fontsize=16)
plt.xlabel('数值', fontsize=12)
plt.ylabel('频次', fontsize=12)
plt.axvline(data.mean(), color='red', linestyle='--', linewidth=2, label=f'均值: {data.mean():.2f}')
plt.legend()
# plt.show()

# 多组直方图对比
data1 = np.random.normal(100, 15, 1000)
data2 = np.random.normal(110, 20, 1000)

plt.figure(figsize=(10, 6))
plt.hist(data1, bins=30, alpha=0.7, label='组1', color='blue')
plt.hist(data2, bins=30, alpha=0.7, label='组2', color='red')
plt.title('多组数据直方图对比')
plt.xlabel('数值')
plt.ylabel('频次')
plt.legend()
# plt.show()
```

#### 饼图

```python
# 基本饼图
labels = ['苹果', '香蕉', '橙子', '葡萄', '其他']
sizes = [30, 25, 20, 15, 10]
colors = ['gold', 'yellowgreen', 'lightcoral', 'lightskyblue', 'lightpink']
explode = (0.1, 0, 0, 0, 0)  # 突出显示第一个扇形

plt.figure(figsize=(8, 8))
plt.pie(sizes, explode=explode, labels=labels, colors=colors, autopct='%1.1f%%',
        shadow=True, startangle=90)
plt.title('水果销售占比', fontsize=16)
plt.axis('equal')  # 确保饼图是圆形的
# plt.show()

# 环形图
fig, ax = plt.subplots(figsize=(8, 8))
wedges, texts, autotexts = ax.pie(sizes, labels=labels, autopct='%1.1f%%',
                                  wedgeprops=dict(width=0.5))
ax.set_title('环形图示例')
# plt.show()
```

#### 箱线图

```python
# 基本箱线图
np.random.seed(42)
data1 = np.random.normal(100, 10, 200)
data2 = np.random.normal(90, 20, 200)
data3 = np.random.normal(80, 5, 200)

plt.figure(figsize=(10, 6))
box_data = [data1, data2, data3]
box_labels = ['组1', '组2', '组3']

box_plot = plt.boxplot(box_data, labels=box_labels, patch_artist=True)
colors = ['lightblue', 'lightgreen', 'lightcoral']
for patch, color in zip(box_plot['boxes'], colors):
    patch.set_facecolor(color)

plt.title('箱线图示例', fontsize=16)
plt.ylabel('数值', fontsize=12)
plt.grid(True, alpha=0.3)
# plt.show()
```

#### 热力图

```python
# 创建热力图数据
data_matrix = np.random.rand(10, 12)
months = ['1月', '2月', '3月', '4月', '5月', '6月',
          '7月', '8月', '9月', '10月', '11月', '12月']
days = [f'第{i}天' for i in range(1, 11)]

plt.figure(figsize=(12, 8))
im = plt.imshow(data_matrix, cmap='YlOrRd', aspect='auto')
plt.colorbar(im, label='数值')
plt.title('热力图示例', fontsize=16)
plt.xlabel('月份', fontsize=12)
plt.ylabel('天数', fontsize=12)
plt.xticks(range(12), months, rotation=45)
plt.yticks(range(10), days)
plt.tight_layout()
# plt.show()
```

### 图形定制

#### 样式和主题

```python
# 查看可用样式
print("可用样式：", plt.style.available)

# 使用不同样式
plt.style.use('seaborn-v0_8')  # 或者 'ggplot', 'classic' 等

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, linewidth=2)
plt.title('使用 seaborn 样式', fontsize=16)
plt.xlabel('x', fontsize=12)
plt.ylabel('sin(x)', fontsize=12)
# plt.show()

# 恢复默认样式
plt.style.use('default')
```

#### 颜色和线型定制

```python
# 颜色定制
x = np.linspace(0, 10, 100)

plt.figure(figsize=(12, 8))

# 不同的颜色表示方法
plt.plot(x, np.sin(x), color='red', label='红色 (red)')
plt.plot(x, np.sin(x + 0.5), color='#FF5733', label='十六进制颜色')
plt.plot(x, np.sin(x + 1), color=(0.2, 0.8, 0.2), label='RGB元组')
plt.plot(x, np.sin(x + 1.5), color='C0', label='默认颜色循环')

# 不同的线型
plt.plot(x, np.sin(x + 2), linestyle='-', label='实线')
plt.plot(x, np.sin(x + 2.5), linestyle='--', label='虚线')
plt.plot(x, np.sin(x + 3), linestyle='-.', label='点划线')
plt.plot(x, np.sin(x + 3.5), linestyle=':', label='点线')

plt.title('颜色和线型示例')
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
plt.tight_layout()
# plt.show()
```

### 子图和布局

#### 创建子图

```python
# 基本子图
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

x = np.linspace(0, 10, 100)

# 第一个子图
axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('sin(x)')
axes[0, 0].grid(True)

# 第二个子图
axes[0, 1].plot(x, np.cos(x), 'r--')
axes[0, 1].set_title('cos(x)')
axes[0, 1].grid(True)

# 第三个子图
axes[1, 0].plot(x, np.tan(x))
axes[1, 0].set_title('tan(x)')
axes[1, 0].set_ylim(-5, 5)
axes[1, 0].grid(True)

# 第四个子图
axes[1, 1].plot(x, np.exp(-x/5) * np.sin(x))
axes[1, 1].set_title('衰减振荡')
axes[1, 1].grid(True)

plt.tight_layout()
# plt.show()

# 不规则子图布局
fig = plt.figure(figsize=(12, 8))

# 创建不同大小的子图
ax1 = plt.subplot(2, 2, 1)
ax2 = plt.subplot(2, 2, 2)
ax3 = plt.subplot(2, 1, 2)

ax1.plot(x, np.sin(x))
ax1.set_title('子图1')

ax2.plot(x, np.cos(x))
ax2.set_title('子图2')

ax3.plot(x, np.sin(x) * np.cos(x))
ax3.set_title('大子图')

plt.tight_layout()
# plt.show()
```

#### 注释和文本

```python
# 添加注释和文本
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2)

# 添加文本
plt.text(2, 0.8, '这是一个文本注释', fontsize=12,
         bbox=dict(boxstyle="round,pad=0.3", facecolor="yellow", alpha=0.7))

# 添加箭头注释
max_idx = np.argmax(y)
plt.annotate('最大值点', xy=(x[max_idx], y[max_idx]), xytext=(x[max_idx]+1, y[max_idx]+0.3),
            arrowprops=dict(arrowstyle='->', color='red', lw=2),
            fontsize=12, color='red')

# 添加垂直线和水平线
plt.axvline(x=5, color='gray', linestyle='--', alpha=0.7, label='垂直线')
plt.axhline(y=0, color='gray', linestyle='-', alpha=0.7, label='水平线')

plt.title('注释和标记示例', fontsize=16)
plt.xlabel('x', fontsize=12)
plt.ylabel('sin(x)', fontsize=12)
plt.legend()
plt.grid(True, alpha=0.3)
# plt.show()
```

### 保存和导出

```python
# 保存图形到文件
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, linewidth=2)
plt.title('要保存的图形')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)

# 保存为不同格式
# plt.savefig('sine_wave.png', dpi=300, bbox_inches='tight')
# plt.savefig('sine_wave.pdf', bbox_inches='tight')
# plt.savefig('sine_wave.svg', bbox_inches='tight')

print("图形保存示例（已注释）")
# plt.show()
```

---

## Pandas 与 Matplotlib 结合使用

### 直接绘图

```python
# 使用 Pandas 的内置绘图功能
# 创建示例数据
dates = pd.date_range('2024-01-01', periods=100, freq='D')
data = {
    'A': np.random.randn(100).cumsum(),
    'B': np.random.randn(100).cumsum(),
    'C': np.random.randn(100).cumsum()
}
df_ts = pd.DataFrame(data, index=dates)

# Pandas 直接绘图
plt.figure(figsize=(12, 6))
df_ts.plot(title='时间序列数据', figsize=(12, 6))
plt.ylabel('数值')
plt.grid(True)
# plt.show()

# 不同类型的图表
fig, axes = plt.subplots(2, 2, figsize=(15, 10))

# 折线图
df_ts.plot(ax=axes[0, 0], title='折线图')

# 柱状图
df_ts.iloc[-10:].plot(kind='bar', ax=axes[0, 1], title='柱状图')

# 散点图
df_ts.plot(kind='scatter', x='A', y='B', ax=axes[1, 0], title='散点图')

# 直方图
df_ts.plot(kind='hist', ax=axes[1, 1], title='直方图', alpha=0.7)

plt.tight_layout()
# plt.show()
```

### 数据分析可视化

```python
# 创建销售数据示例
np.random.seed(42)
sales_data = {
    'Month': pd.date_range('2024-01-01', periods=12, freq='M'),
    'Product_A': np.random.randint(100, 500, 12),
    'Product_B': np.random.randint(150, 600, 12),
    'Product_C': np.random.randint(80, 400, 12)
}
sales_df = pd.DataFrame(sales_data)
sales_df.set_index('Month', inplace=True)

print("销售数据：")
print(sales_df.head())

# 综合分析图表
fig, axes = plt.subplots(2, 2, figsize=(15, 12))

# 1. 月度销售趋势
sales_df.plot(ax=axes[0, 0], marker='o', linewidth=2)
axes[0, 0].set_title('月度销售趋势', fontsize=14)
axes[0, 0].grid(True, alpha=0.3)
axes[0, 0].legend(title='产品')

# 2. 总销售额对比
total_sales = sales_df.sum()
total_sales.plot(kind='bar', ax=axes[0, 1], color=['skyblue', 'lightgreen', 'lightcoral'])
axes[0, 1].set_title('产品总销售额对比', fontsize=14)
axes[0, 1].set_ylabel('销售额')
axes[0, 1].tick_params(axis='x', rotation=0)

# 3. 销售额分布
sales_df.plot(kind='box', ax=axes[1, 0])
axes[1, 0].set_title('销售额分布箱线图', fontsize=14)
axes[1, 0].set_ylabel('销售额')

# 4. 相关性热力图
correlation_matrix = sales_df.corr()
im = axes[1, 1].imshow(correlation_matrix, cmap='coolwarm', aspect='auto')
axes[1, 1].set_title('产品销售相关性', fontsize=14)
axes[1, 1].set_xticks(range(len(correlation_matrix.columns)))
axes[1, 1].set_yticks(range(len(correlation_matrix.columns)))
axes[1, 1].set_xticklabels(correlation_matrix.columns)
axes[1, 1].set_yticklabels(correlation_matrix.columns)

# 添加相关系数文本
for i in range(len(correlation_matrix.columns)):
    for j in range(len(correlation_matrix.columns)):
        text = axes[1, 1].text(j, i, f'{correlation_matrix.iloc[i, j]:.2f}',
                              ha="center", va="center", color="black")

plt.tight_layout()
# plt.show()
```

### 实际应用示例

```python
# 创建一个完整的数据分析报告
# 模拟电商数据
np.random.seed(42)
ecommerce_data = {
    'Date': pd.date_range('2024-01-01', periods=365, freq='D'),
    'Orders': np.random.poisson(50, 365),
    'Revenue': np.random.normal(5000, 1000, 365),
    'Customers': np.random.poisson(30, 365),
    'Category': np.random.choice(['Electronics', 'Clothing', 'Books', 'Home'], 365)
}
ecommerce_df = pd.DataFrame(ecommerce_data)
ecommerce_df['Revenue'] = np.abs(ecommerce_df['Revenue'])  # 确保收入为正数

# 按月汇总数据
monthly_data = ecommerce_df.groupby(ecommerce_df['Date'].dt.to_period('M')).agg({
    'Orders': 'sum',
    'Revenue': 'sum',
    'Customers': 'sum'
}).reset_index()
monthly_data['Date'] = monthly_data['Date'].dt.to_timestamp()

print("月度汇总数据：")
print(monthly_data.head())

# 创建综合仪表板
fig = plt.figure(figsize=(16, 12))

# 1. 月度趋势（占据上半部分）
ax1 = plt.subplot(3, 2, (1, 2))
ax1_twin = ax1.twinx()

line1 = ax1.plot(monthly_data['Date'], monthly_data['Orders'], 'b-o', label='订单数', linewidth=2)
line2 = ax1_twin.plot(monthly_data['Date'], monthly_data['Revenue'], 'r-s', label='收入', linewidth=2)

ax1.set_xlabel('月份')
ax1.set_ylabel('订单数', color='b')
ax1_twin.set_ylabel('收入', color='r')
ax1.set_title('月度订单数和收入趋势', fontsize=14, fontweight='bold')
ax1.grid(True, alpha=0.3)

# 合并图例
lines = line1 + line2
labels = [l.get_label() for l in lines]
ax1.legend(lines, labels, loc='upper left')

# 2. 分类销售分布
ax2 = plt.subplot(3, 2, 3)
category_revenue = ecommerce_df.groupby('Category')['Revenue'].sum()
wedges, texts, autotexts = ax2.pie(category_revenue.values, labels=category_revenue.index,
                                   autopct='%1.1f%%', startangle=90)
ax2.set_title('各类别收入占比', fontsize=12, fontweight='bold')

# 3. 日订单量分布
ax3 = plt.subplot(3, 2, 4)
ax3.hist(ecommerce_df['Orders'], bins=20, color='skyblue', alpha=0.7, edgecolor='black')
ax3.axvline(ecommerce_df['Orders'].mean(), color='red', linestyle='--',
           label=f'平均值: {ecommerce_df["Orders"].mean():.1f}')
ax3.set_title('日订单量分布', fontsize=12, fontweight='bold')
ax3.set_xlabel('订单数')
ax3.set_ylabel('天数')
ax3.legend()

# 4. 收入与订单关系
ax4 = plt.subplot(3, 2, 5)
scatter = ax4.scatter(ecommerce_df['Orders'], ecommerce_df['Revenue'],
                     alpha=0.6, c=ecommerce_df.index, cmap='viridis')
ax4.set_title('订单数与收入关系', fontsize=12, fontweight='bold')
ax4.set_xlabel('订单数')
ax4.set_ylabel('收入')

# 添加趋势线
z = np.polyfit(ecommerce_df['Orders'], ecommerce_df['Revenue'], 1)
p = np.poly1d(z)
ax4.plot(ecommerce_df['Orders'], p(ecommerce_df['Orders']), "r--", alpha=0.8)

# 5. 客户数趋势
ax5 = plt.subplot(3, 2, 6)
monthly_data.plot(x='Date', y='Customers', ax=ax5, color='green', marker='o')
ax5.set_title('月度客户数趋势', fontsize=12, fontweight='bold')
ax5.set_xlabel('月份')
ax5.set_ylabel('客户数')
ax5.grid(True, alpha=0.3)

plt.tight_layout()
# plt.show()

print("\n数据分析完成！")
print(f"总订单数: {ecommerce_df['Orders'].sum():,}")
print(f"总收入: ${ecommerce_df['Revenue'].sum():,.2f}")
print(f"平均日订单数: {ecommerce_df['Orders'].mean():.1f}")
print(f"平均日收入: ${ecommerce_df['Revenue'].mean():.2f}")
```
