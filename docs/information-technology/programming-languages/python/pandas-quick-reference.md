# Pandas 基础语法速查字典

本文档总结 Pandas 的常用操作，便于快速查阅。

## 1. 安装与导入
- 安装：`pip install pandas`
- 导入：
  ```python
  import pandas as pd
  ```

## 2. 核心数据结构
- **Series**：一维带索引的数据结构，可由列表或字典创建。
  ```python
  s = pd.Series([1, 2, 3])
  s2 = pd.Series({'a': 1, 'b': 2})
  ```
- **DataFrame**：二维表格数据结构，可由字典、列表或二维数组创建。
  ```python
  df = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [18, 20]})
  ```

## 3. 数据读写
- `pd.read_csv('file.csv')` 读取 CSV 文件
- `pd.read_excel('file.xlsx')` 读取 Excel 文件
- `df.to_csv('out.csv', index=False)` 保存为 CSV
- `df.to_excel('out.xlsx', index=False)` 保存为 Excel

## 4. 查看数据
- `df.head(n)` 查看前 `n` 行
- `df.tail(n)` 查看后 `n` 行
- `df.info()` 查看数据概况
- `df.describe()` 查看统计摘要

## 5. 数据选择与过滤
- 列选择：`df['col']` 或 `df.col`
- 行选择：`df.loc[index]`（按标签），`df.iloc[i]`（按位置）
- 条件过滤：`df[df['col'] > 0]`
- 使用 `query`：`df.query('col > 0')`

## 6. 常见操作
- 新增列：`df['new'] = values`
- 删除列：`df.drop(columns=['col'])`
- 排序：`df.sort_values('col')`
- 缺失值检测：`df.isna()`
- 填充缺失值：`df.fillna(value)`
- 删除缺失值：`df.dropna()`

## 7. 分组与聚合
- `df.groupby('col').sum()`
- 使用 `agg`：
  ```python
  df.groupby('class').agg({'score': ['mean', 'max']})
  ```

## 8. 合并与连接
- `pd.concat([df1, df2])` 按行或列连接
- `pd.merge(df1, df2, on='key')` 根据键合并

## 9. 统计与变换
- 基本统计：`df.mean()`, `df.median()`, `df.std()`
- 应用函数：`df.apply(func)`
- 透视表：`pd.pivot_table(df, index='col1', values='col2', aggfunc='mean')`

## 10. 其他常用功能
- 时间处理：`pd.to_datetime(df['date'])`
- 绘图：`df.plot()`（需要安装 `matplotlib`）

## 11. 与 Matplotlib 配合绘图
- 安装：`pip install matplotlib`
- 导入：
  ```python
  import matplotlib.pyplot as plt
  ```
- 与 DataFrame 结合：
  ```python
  df.plot(kind='bar', x='name', y='age')
  plt.title('年龄分布')
  plt.xlabel('姓名')
  plt.ylabel('年龄')
  plt.show()
  ```

本文档仅列出最常用的 Pandas 操作，更多高级功能请参考官方文档。
