# Agent Reference Document

## 项目概述

本文档为AI助手（Agent）提供关于杭高技术学科知识库（HGTechKB）的全面参考信息。

- **项目名称**：杭高技术学科知识库（HGTechKB）
- **项目性质**：浙江省杭州高级中学（简称杭州高级中学或杭高）校内技术学科知识库
- **目标受众**：校内选考技术学科的学生
- **内容范围**：信息技术和通用技术两大领域，当前优先专注于信息技术的知识梳理
- **技术栈**：基于Astro Starlight构建
- **线上地址**：https://hg-tech-kb.vercel.app

## 仓库结构

```
HGTechKB/
├── public/                    # 静态资源
│   ├── HG.webp                # 网站图标
│   ├── hgbanner-light.webp    # 浅色主题横幅
│   └── hgbanner-dark.webp     # 深色主题横幅
├── src/
│   ├── content.config.ts      # Starlight内容配置
│   └── content/
│       └── docs/              # 文档主目录
│           ├── index.md       # 首页内容
│           ├── guide/         # 指南文档
│           │   └── index.md
│           ├── information-technology/  # 信息技术文档
│           │   ├── algorithms/
│           │   ├── basic-knowledge/
│           │   └── programming-languages/
│           └── general-technology/       # 通用技术文档
├── astro.config.mjs           # Astro配置文件
├── package.json               # 项目依赖配置
├── pnpm-lock.yaml             # pnpm锁定文件
├── tsconfig.json              # TypeScript配置
├── AGENTS.md                  # Agent参考文档
└── README.md                  # 项目说明文档
```

## 内容组织

知识库内容按照学科和主题进行组织，遵循从基础到进阶的学习路径设计。

### 信息技术部分

#### 1. 基础知识

基础知识部分涵盖信息技术的核心概念和基础理论：

- **信息系统、支撑技术与信息安全**
  - 信息系统的组成与功能
  - 信息技术的支撑技术
  - 信息安全基本概念与防护措施
  - 文件路径：`/src/content/docs/information-technology/basic-knowledge/information-systems-support-security.md`

- **数据采集与编码**
  - 数据采集的方法与技术
  - 数据编码的原理与应用
  - 常见编码方式（ASCII、Unicode等）
  - 文件路径：`/src/content/docs/information-technology/basic-knowledge/data-acquisition-encoding.md`

- **数据、信息、大数据及人工智能**
  - 数据与信息的关系
  - 大数据的特点与应用
  - 人工智能基础概念
  - 文件路径：`/src/content/docs/information-technology/basic-knowledge/data-information-bigdata-ai.md`

#### 2. 算法

算法部分系统介绍各类算法的原理、实现和应用：

- **算法基础概念与效率**
  - 算法的定义与特性
  - 时间复杂度与空间复杂度
  - 算法效率分析方法
  - 文件路径：`/src/content/docs/information-technology/algorithms/algorithm-concepts/efficiency-and-concepts.md`

- **基本算法**
  - **迭代算法**
    - 迭代的概念与应用
    - 迭代算法示例
    - 文件路径：`/src/content/docs/information-technology/algorithms/basic-algorithms/iterative-algorithm.md`
  - **递归算法**
    - 递归的概念与应用
    - 递归算法示例
    - 递归与迭代的比较
    - 文件路径：`/src/content/docs/information-technology/algorithms/basic-algorithms/recursive-algorithm.md`

- **排序算法**
  - **冒泡排序**
    - 算法原理与实现
    - 时间复杂度分析
    - Python代码实现
    - 文件路径：`/src/content/docs/information-technology/algorithms/sorting/bubble-sort.md`
  - **选择排序**
    - 算法原理与实现
    - 时间复杂度分析
    - Python代码实现
    - 文件路径：`/src/content/docs/information-technology/algorithms/sorting/selection-sort.md`
  - **插入排序**
    - 算法原理与实现
    - 时间复杂度分析
    - Python代码实现
    - 文件路径：`/src/content/docs/information-technology/algorithms/sorting/insertion-sort.md`

- **查找算法**
  - **顺序查找**
    - 算法原理与实现
    - 时间复杂度分析
    - Python代码实现
    - 文件路径：`/src/content/docs/information-technology/algorithms/searching/sequential-search.md`
  - **二分查找（对分查找）**
    - 算法原理与实现
    - 时间复杂度分析
    - Python代码实现
    - 文件路径：`/src/content/docs/information-technology/algorithms/searching/binary-search.md`

#### 3. Python 编程

Python编程部分提供系统的Python语言学习资源：

- **Python 基础知识概览**
  - Python语言特点与应用领域
  - 开发环境搭建指南
  - 基本语法规则介绍
  - 学习路径规划
  - 文件路径：`/src/content/docs/information-technology/programming-languages/python/index.md`

- **Python 基础知识字典**
  - 数据类型（整数、浮点数、字符串、布尔值）
  - 变量与赋值操作
  - 字符串操作与方法
  - 列表与字典操作
  - 输入输出与文件操作
  - 分支结构与循环结构
  - 模块导入与自定义函数
  - 文件路径：`/src/content/docs/information-technology/programming-languages/python/python-basic-dictionary.md`

- **Pandas 与 Matplotlib**
  - Pandas数据分析基础
  - DataFrame创建与操作
  - 数据清洗与处理
  - Matplotlib基本绘图
  - 图形类型与样式设置
  - 数据可视化实践
  - 文件路径：`/src/content/docs/information-technology/programming-languages/python/python-pandas-matplotlib.md`

- **数据结构**
  - **数组**
    - 数组概念与特征
    - Python列表作为动态数组
    - array模块的使用
    - 一维与多维数组操作
    - 使用数组模拟链表
    - 文件路径：`/src/content/docs/information-technology/programming-languages/python/arrays.md`
    - 详细文档：`/src/content/docs/information-technology/programming-languages/python/data-structures/arrays.md`
  - **字符串**
    - 字符串的特点与操作
    - 常用字符串方法
    - 字符串格式化
    - 文件路径：`/src/content/docs/information-technology/programming-languages/python/strings.md`
  - **队列**
    - 队列的FIFO概念与特点
    - Python实现队列的多种方式
    - 队列的应用场景
    - 文件路径：`/src/content/docs/information-technology/programming-languages/python/queues.md`
  - **栈**
    - 栈的LIFO概念与特点
    - Python实现栈的方法
    - 栈的应用实例
    - 文件路径：`/src/content/docs/information-technology/programming-languages/python/stacks.md`
  - **树**
    - 树的基本概念与术语
    - 二叉树的定义与性质
    - 树的遍历算法
    - 文件路径：`/src/content/docs/information-technology/programming-languages/python/trees.md`

### 通用技术部分

通用技术部分正在建设中，未来将包含以下内容：

- 设计与问题解决
- 技术与工艺
- 系统与控制
- 技术与社会

每个主题将包含相应的理论知识、实践案例和学习资源。

## 文档格式规范

### Markdown规范

1. **基本格式**：所有内容使用Markdown格式编写
   - 使用标准Markdown语法
   - 支持GFM (GitHub Flavored Markdown)扩展语法
   - 支持数学公式（使用KaTeX渲染）

2. **标题层级**：
   - 文档标题使用一级标题（`# 标题`）
   - 主要章节使用二级标题（`## 章节`）
   - 子章节使用三级标题（`### 子章节`）
   - 最多使用到四级标题，避免过深的嵌套

3. **代码块**：
   - 行内代码使用反引号包裹（`` `code` ``）
   - 代码块使用三个反引号并指定语言（如 ```python）
   - Python代码示例应遵循PEP 8规范

4. **列表**：
   - 有序列表使用数字加点（`1. 项目`）
   - 无序列表使用连字符（`- 项目`）
   - 列表嵌套时使用四个空格缩进

5. **图片**：
   - 图片文件存放在`/public/images/`目录下
   - 图片引用格式：`![替代文本](/images/图片路径.png)`
   - 图片应包含适当的替代文本

### 文件组织规范

1. **文件命名**：
   - 使用kebab-case（如`data-structures.md`）
   - 文件名应简洁明了，反映内容主题
   - 避免使用中文、特殊字符和空格

2. **目录结构**：
   - 按主题分类，层级清晰
   - 相关内容应放在同一目录下
   - 目录深度不宜超过三层

3. **元数据**：
    - 使用 Starlight 的自動側邊欄功能，無需 _meta.json 配置

### 内容风格规范

1. **语言风格**：
   - 使用简洁、准确、易懂的语言
   - 避免使用过于专业或晦涩的术语
   - 适合高中学生的认知水平

2. **内容结构**：
   - 每个文档应包含引言、正文和总结
   - 重要概念应有明确的定义和解释
   - 复杂内容应配有示例和图表

3. **代码示例**：
   - 代码应简洁、规范、易于理解
   - 关键步骤应有注释说明
   - 应提供完整可运行的代码

## 工作流程指南

### 提交规范

本项目采用**约定式提交**（Conventional Commits）规范，提交信息格式如下：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

常用的提交类型：
- **docs**: 文档更新（如更新教学内容、添加新知识点等）
- **feat**: 新功能（如添加新的网站功能、组件等）
- **fix**: 修复问题（如修正内容错误、修复网站bug等）
- **style**: 代码风格或内容格式调整（不影响代码运行的变动）
- **refactor**: 代码重构（既不是新增功能，也不是修改bug的代码变动）
- **chore**: 构建过程或辅助工具的变动

示例：
- `docs: 更新Python基础知识部分内容`
- `fix: 修正算法复杂度分析中的错误`
- `feat: 添加交互式算法演示组件`

### Pull Request 模板

项目提供了多个PR模板以适应不同类型的贡献：

#### 1. 新增文档模板 (`new_document.md`)
用于提交新增知识库文档的PR，包含以下检查项：
- 文档信息（标题、路径、所属领域）
- 文档内容概述
- 相关教学大纲
- 文档结构说明
- 元数据更新情况
- 内容质量检查清单

#### 2. 内容更新模板 (`content_update.md`)
用于更新现有文档内容的PR

#### 3. 错误修复模板 (`bug_fix.md`)
用于修复文档错误或网站问题的PR

#### 4. 功能请求模板 (`feature_request.md`)
用于添加新功能或改进现有功能的PR

#### 5. 默认模板 (`pull_request_template.md`)
通用PR模板，适用于其他类型的贡献

### 内容更新流程

1. 确认更新内容所属的知识领域和具体位置
2. 遵循现有的文档结构和格式进行编写
3. 确保内容符合高中技术学科教学大纲要求
4. 使用约定式提交格式提交更改
5. 提交PR时使用对应的PR模板，标题也应遵循约定式提交格式

### 新增文档流程

1. 在适当的目录下创建新的Markdown文件
2. 提交后 Starlight 会自动生成导航，无需修改 `_meta.json`
3. 确保新文档与现有知识体系保持一致性
4. 使用约定式提交格式提交更改（通常使用`docs:`类型）
5. 提交PR时使用"新增文档模板"

### 站点内容更新注意事项

1. 确保内容准确性和教学相关性
2. 保持内容的系统性和结构化
3. 适当添加图表、代码示例等辅助理解
4. 考虑高中学生的认知水平，使用清晰简洁的语言
5. 内容应符合高中技术学科教学大纲要求
6. 代码示例应简洁易懂，并提供充分的注释

## 技术维护指南

### 开发环境

#### 技术栈详情
- **框架**：Astro Starlight
- **包管理器**：pnpm（推荐）或 npm
- **TypeScript**：支持TypeScript配置
- **构建工具**：内置Rsbuild构建系统
- **部署平台**：Vercel

#### 项目依赖
**生产依赖**：
- `@astrojs/starlight`: ^0.34.4 - 文档站构建框架
- `astro`: ^5.6.1 - 静态站点生成器核心
- `sharp`: ^0.32.5 - 图片处理工具

**开发依赖**：
- `@types/node`: ^18.11.17 - Node.js类型定义

1. **依赖管理**：推荐使用pnpm作为包管理工具
   ```bash
   # 安装依赖
   pnpm install

   # 添加新依赖
   pnpm add <package-name>

   # 添加开发依赖
   pnpm add -D <package-name>

   # 更新依赖
   pnpm update

   # 查看依赖树
   pnpm list
   ```

2. **本地开发**：使用`pnpm dev`启动开发服务器
   ```bash
   # 启动开发服务器
   pnpm dev

   # 默认访问地址
   # http://localhost:3000

   # 也可以使用npm（如果没有pnpm）
   npm run dev
   ```

3. **构建部署**：使用`pnpm build`构建生产版本
   ```bash
   # 构建生产版本
   pnpm build

   # 预览构建结果
   pnpm preview

   # 使用npm的等效命令
   npm run build
   npm run preview
   ```

#### 配置文件说明
- **astro.config.mjs**：Astro主配置文件，包含站点标题、描述、主题配置等
- **tsconfig.json**：TypeScript编译配置
- **package.json**：项目元数据和脚本配置
- **pnpm-lock.yaml**：依赖版本锁定文件

#### 网站配置详情
**基本信息**：
- 站点标题：浙江省杭州高级中学 技术学科知识库
- 站点描述：本知识库服务于浙江省杭州高级中学选考技术学科的学生，包含信息技术和通用技术两部分内容，并优先专注于信息技术知识的梳理
- 网站图标：`/HG.webp`
- Logo配置：
  - 浅色主题：`hgbanner-light.webp`
  - 深色主题：`/hgbanner-dark.webp`

**导航结构**：
- 信息技术：`/information-technology/basic-knowledge/information-systems-support-security`
- 通用技术：`/general-technology/`
- 首页：`/`

**侧边栏配置**：
- 信息技术基础知识（3个主要文档）
- 算法（4个子分类：概念、基本算法、查找、排序）
- Python编程（基础知识、数据结构、实用工具）

### 版本控制与协作

1. **分支管理**：
   - `main`：主分支，保持稳定可部署状态
   - 功能分支：以功能或任务命名（如`update-navigation-page`）
   - 文档分支：通常以`docs/`开头（如`docs/add-python-tutorial`）

2. **工作流程**：
   - 从`main`分支创建新分支进行开发
   - 完成后提交PR到`main`分支
   - PR合并后删除功能分支

3. **代码审查**：
   - 所有PR需经过审查后才能合并
   - 审查重点包括内容准确性、格式规范和技术实现

### 部署流程

本项目使用Vercel自动部署：
- 每次`main`分支更新会自动触发生产环境部署
- PR创建或更新会自动生成预览环境
- 部署完成后可通过Vercel提供的链接访问

## 内容质量保证

1. **内容审核**：所有内容更新需经过技术学科组老师审核
2. **技术准确性**：确保代码示例和技术解释准确无误
3. **教学适用性**：内容应适合高中学生学习，难度适中
4. **持续更新**：定期检查内容时效性，及时更新过时内容

## 联系信息

如需技术支持或有内容相关问题，请联系技术学科组老师。

## 更新日志

- **2025-06-16**：迁移文档站至 Astro Starlight，更新仓库结构说明
- **2025-06-15**：使用ContextEngine全面修正和补全AGENTS.md文档
  - 修正仓库结构，反映实际文件组织
  - 更新Python编程部分，添加实际存在的文档路径
  - 补全技术栈详情和依赖信息
  - 添加完整的PR模板说明
  - 更新排序算法部分，包含选择排序和插入排序
  - 修正文件路径错误，确保与实际项目结构一致
- **2025-05-18**：项目初始化，建立基本框架和内容结构
