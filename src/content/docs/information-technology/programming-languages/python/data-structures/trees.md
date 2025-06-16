---
title: 树 (Tree)
---
树是一种非线性数据结构，由一组称为**节点 (Node)** 的元素组成，这些节点通过称为**边 (Edge)** 的连接关系组织起来，形成层次结构。树结构在计算机科学中被广泛用于表示具有层级关系的数据，例如文件系统、组织结构、XML/HTML 文档等。

**基本术语**：
-   **节点 (Node)**：树的基本组成单元，可以包含数据和指向其他节点的引用（子节点）。
-   **根节点 (Root)**：树中最顶层的节点，它没有父节点。一棵非空树有且仅有一个根节点。
-   **父节点 (Parent)**：一个节点的直接上层节点。
-   **子节点 (Child)**：一个节点的直接下层节点。
-   **兄弟节点 (Sibling)**：具有相同父节点的节点。
-   **叶节点 (Leaf Node / External Node)**：没有子节点的节点。
-   **内部节点 (Internal Node / Non-leaf Node)**：至少有一个子节点的节点。
-   **边 (Edge)**：连接两个节点的线，表示它们之间的关系（通常是父子关系）。
-   **路径 (Path)**：从一个节点到另一个节点所经过的边的序列。
-   **节点的度 (Degree of a Node)**：一个节点拥有的子树的个数（即其子节点的数量）。
-   **树的度 (Degree of a Tree)**：树中所有节点的度的最大值。
-   **层 (Level)**：节点的层级。根节点在第 1 层（或第 0 层，取决于约定），其子节点在第 2 层（或第 1 层），以此类推。
-   **深度 (Depth of a Node)**：从根节点到该节点的路径长度（边的数量）。根节点的深度为 0。
-   **高度 (Height of a Node)**：从该节点到其最远叶节点路径的长度。叶节点的高度为 0。
-   **树的高度 (Height of a Tree)**：根节点的高度，也就是树中最长路径的长度。
-   **子树 (Subtree)**：树中某个节点及其所有后代节点组成的结构，本身也是一棵树。
-   **森林 (Forest)**：零棵或多棵不相交的树的集合。

## 二叉树 (Binary Tree)
二叉树是树的一种特殊形式，其每个节点最多有两个子节点，分别称为**左子节点 (Left Child)** 和**右子节点 (Right Child)**。二叉树的子节点具有左右次序，不能任意颠倒。

### 概念与性质
-   **定义**：一棵二叉树是有限的节点集合，这个集合或者为空（空二叉树），或者由一个根节点和两棵互不相交的、分别称为根节点的左子树和右子树的二叉树组成。
-   **特点**：
    1.  每个节点最多有两个子节点。
    2.  左子树和右子树是有顺序的，次序不能任意颠倒。
    3.  即使某节点只有一个子树，也要区分它是左子树还是右子树。

-   **性质**：
    1.  在二叉树的第 `i` 层（假设根节点在第1层）上至多有 `2^(i-1)` 个节点 (i ≥ 1)。
    2.  深度为 `k` (或高度为 `k-1`，如果根在第1层且深度为k) 的二叉树至多有 `2^k - 1` 个节点 (k ≥ 1)。
    3.  对于任何非空二叉树 T，如果其叶节点数为 `n0`，度为 2 的节点数为 `n2`，则 `n0 = n2 + 1`。
        *   推论：如果二叉树的节点总数为 `n`，度为 1 的节点数为 `n1`，则 `n = n0 + n1 + n2`。结合 `n0 = n2 + 1`，可以得出 `n = n1 + 2*n2 + 1`。

### Python 实现节点 (示例)
通常使用类来表示二叉树的节点：
```python
class TreeNode:
    def __init__(self, value):
        self.value = value  # 节点存储的数据
        self.left = None    # 左子节点引用
        self.right = None   # 右子节点引用

# 创建节点示例
root = TreeNode(10)
root.left = TreeNode(5)
root.right = TreeNode(15)
root.left.left = TreeNode(3)
root.left.right = TreeNode(7)
root.right.right = TreeNode(18)

#      10
#     /  \
#    5    15
#   / \    \
#  3   7    18
```

### 二叉树的相关操作

#### 1. 遍历 (Traversal)
遍历是指按照某种特定的顺序访问树中的所有节点，并且每个节点只访问一次。常见的二叉树遍历方式有：

-   **前序遍历 (Pre-order Traversal)**: 根节点 -> 左子树 -> 右子树 (根-左-右)
    ```python
    def preorder_traversal(node):
        if node:
            print(node.value, end=' ')  # 访问根节点
            preorder_traversal(node.left) # 遍历左子树
            preorder_traversal(node.right) # 遍历右子树
    
    print("Pre-order:")
    preorder_traversal(root) # Output: 10 5 3 7 15 18 
    print()
    ```

-   **中序遍历 (In-order Traversal)**: 左子树 -> 根节点 -> 右子树 (左-根-右)
    *   对于二叉搜索树，中序遍历会得到一个有序序列。
    ```python
    def inorder_traversal(node):
        if node:
            inorder_traversal(node.left)  # 遍历左子树
            print(node.value, end=' ')   # 访问根节点
            inorder_traversal(node.right) # 遍历右子树

    print("In-order:")
    inorder_traversal(root) # Output: 3 5 7 10 15 18 
    print()
    ```

-   **后序遍历 (Post-order Traversal)**: 左子树 -> 右子树 -> 根节点 (左-右-根)
    *   常用于计算表达式树或释放树节点（先释放子节点再释放父节点）。
    ```python
    def postorder_traversal(node):
        if node:
            postorder_traversal(node.left) # 遍历左子树
            postorder_traversal(node.right)# 遍历右子树
            print(node.value, end=' ')  # 访问根节点

    print("Post-order:")
    postorder_traversal(root) # Output: 3 7 5 18 15 10 
    print()
    ```

-   **层序遍历 (Level-order Traversal / Breadth-First Traversal)**: 从上到下，从左到右，逐层访问节点。
    *   通常使用队列来实现。
    ```python
    from collections import deque

    def levelorder_traversal(node):
        if not node:
            return
        
        queue = deque([node])
        while queue:
            current_node = queue.popleft()
            print(current_node.value, end=' ')
            
            if current_node.left:
                queue.append(current_node.left)
            if current_node.right:
                queue.append(current_node.right)

    print("Level-order:")
    levelorder_traversal(root) # Output: 10 5 15 3 7 18 
    print()
    ```

#### 2. 查找节点 (Searching)
在普通二叉树中查找节点通常需要遍历树。对于特殊的二叉树如二叉搜索树，查找效率会更高。
```python
def find_node(node, key):
    if not node:
        return None
    if node.value == key:
        return node
    
    found_left = find_node(node.left, key)
    if found_left:
        return found_left
    
    found_right = find_node(node.right, key)
    return found_right

found = find_node(root, 7)
if found:
    print(f"Found node with value: {found.value}")
else:
    print("Node not found.")
```

#### 3. 插入节点 (Inserting)
在普通二叉树中插入节点没有固定规则，取决于具体应用。通常会插入到某个叶节点的位置。对于二叉搜索树，插入有特定规则。

#### 4. 删除节点 (Deleting)
删除节点也比较复杂，需要考虑被删除节点是否有子节点，以及如何调整树的结构。对于二叉搜索树，删除操作有标准算法。

### 特殊类型的二叉树

-   **满二叉树 (Full Binary Tree)**：在一棵二叉树中，如果所有分支节点都存在左子树和右子树，并且所有叶子节点都在同一层上，这样的二叉树称为满二叉树。
    *   特点：深度为 `k` 且有 `2^k - 1` 个节点的二叉树是满二叉树。
    *   或者说，除了叶节点外，每个节点的度都为 2。

-   **完全二叉树 (Complete Binary Tree)**：对一棵具有 `n` 个节点的二叉树按层序编号，如果编号为 `i` (1 ≤ i ≤ n) 的节点与满二叉树中编号为 `i` 的节点在二叉树中的位置完全相同，则这棵二叉树称为完全二叉树。
    *   特点：
        1.  叶子节点只可能出现在最下两层。
        2.  最下层的叶子节点一定集中在左部连续位置。
        3.  倒数第二层的叶子节点（如果有的话）一定集中在右部连续位置。
        4.  如果某个节点的度为1，则它只有左孩子（即不存在只有右孩子没有左孩子的情况）。
        5.  同样深度的满二叉树一定是完全二叉树，但完全二叉树不一定是满二叉树。
    *   完全二叉树由于其结构特性，非常适合用数组（顺序存储）来表示，常用于实现堆 (Heap)。

-   **二叉搜索树 (Binary Search Tree - BST)** (也称二叉查找树或二叉排序树)：
    *   它或者是一棵空树，或者是具有下列性质的二叉树：
        1.  若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值。
        2.  若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值。
        3.  任意节点的左、右子树也分别为二叉搜索树。
        4.  没有键值相等的节点（或者约定相等节点放在左子树或右子树）。
    *   特点：中序遍历二叉搜索树可以得到一个有序的序列。这使得 BST 非常适合进行查找、插入和删除操作（平均时间复杂度为 O(log n)，最坏情况下为 O(n) 当树退化成链表时）。

树结构是算法和数据结构中的核心内容，理解其基本概念和操作对于解决复杂问题至关重要。
