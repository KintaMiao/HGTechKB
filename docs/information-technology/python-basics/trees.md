# Python Trees

Trees are a fundamental non-linear data structure in computer science, used to represent hierarchical relationships between objects. They consist of nodes connected by edges.

## 1. Introduction to Trees (General Concepts)

### Definition
A **tree** is a collection of entities called **nodes** (or vertices) linked together to simulate a hierarchy. Trees are naturally recursive, meaning a tree can be defined as a node (the root) that is connected to zero or more subtrees. Unlike graphs in general, a tree is acyclic (contains no cycles) and has a unique path between any two nodes.

### Terminology

*   **Node:** A basic unit of a tree that can contain data and links (edges) to other nodes.
*   **Edge:** A connection between two nodes.
*   **Root:** The topmost node in a tree. It is the only node that does not have a parent.
*   **Parent:** A node that has one or more nodes connected below it in the hierarchy.
*   **Child:** A node directly connected to another node when moving away from the root.
*   **Sibling:** Nodes that share the same parent.
*   **Leaf (or External Node):** A node that has no children.
*   **Internal Node (or Branch Node):** A node that has at least one child.
*   **Subtree:** A tree consisting of a node and all its descendants.
*   **Height of a Node:** The length (number of edges) of the longest downward path from that node to a leaf. The height of a leaf node is 0.
*   **Height of a Tree:** The height of its root node. An empty tree often has a height of -1, and a tree with only a root node has a height of 0.
*   **Depth of a Node:** The length (number of edges) of the path from the root to that node. The depth of the root node is 0.
*   **Level of a Node:** The depth of a node. Level 0 is the root, level 1 are its children, and so on.

### Textual Diagram of a General Tree

```
      A  (Root, Level 0)
     /|\
    / | \
   B  C  D (Children of A, Siblings, Level 1)
  / \   |
 /   \  |
E     F G (Children of B and D, Level 2)
          (E, F, G are Leaf Nodes if they have no children)

Subtree rooted at B:
  B
 / \
E   F
```

## 2. Binary Trees

### Definition
A **binary tree** is a specific type of tree data structure in which each node has at most two children, referred to as the **left child** and the **right child**.

### Properties

*   **Maximum number of nodes at level `l`**: `2^l` (where the root is at level 0).
    *   Level 0: 2^0 = 1 node (the root)
    *   Level 1: 2^1 = 2 nodes
    *   Level 2: 2^2 = 4 nodes
*   **Maximum number of nodes in a tree of height `h`**: `2^(h+1) - 1`.
    *   Height 0 (1 node): 2^(0+1) - 1 = 1 node
    *   Height 1 (up to 3 nodes): 2^(1+1) - 1 = 3 nodes
    *   Height 2 (up to 7 nodes): 2^(2+1) - 1 = 7 nodes

### Types of Binary Trees

*   **Full Binary Tree (or Proper/Strict Binary Tree):**
    *   A tree in which every node has either 0 or 2 children.
    *   Textual Diagram:
      ```
            A
           / \
          B   C
         / \
        D   E 
      ```
      (Node C could also have two children or none to maintain fullness)

*   **Complete Binary Tree:**
    *   A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
    *   Textual Diagram:
      ```
            A
           / \
          B   C
         / \ /
        D  E F
      ```
      (If G were a child of C, it would be to C's left. If F didn't exist, D and E would still be valid.)

*   **Perfect Binary Tree:**
    *   A binary tree in which all interior nodes have two children and all leaves are at the same level (depth). A perfect binary tree is always full and complete.
    *   Textual Diagram (height 2):
      ```
            A
           / \
          B   C
         / \ / \
        D  E F  G
      ```

*   **Balanced Binary Tree:**
    *   A binary tree where the height of the left and right subtrees of any node differ by no more than 1. This ensures that operations like search, insert, and delete have a worst-case time complexity of O(log n). AVL trees and Red-Black trees are examples of self-balancing binary search trees.
    *   (Conceptual, exact structure varies by balancing algorithm)

*   **Degenerate (or Pathological) Binary Tree:**
    *   A tree where each parent node has only one child (either left or right). It behaves like a linked list.
    *   Textual Diagram (skewed to the right):
      ```
      A
       \
        B
         \
          C
           \
            D
      ```

## 3. Representing Binary Trees in Python

The most common way to represent a binary tree in Python is using a **Node class**. Each instance of the Node class represents a single node in the tree. Defining custom classes like `Node` involves concepts similar to defining [custom functions](../../python-basics/dictionary.md#custom-functions-defining-functions).

### Node Class
A typical Node class will have:
*   `data` (or `value`, `key`): The data stored in the node.
*   `left` (or `left_child`): A reference to the left child node (or `None` if no left child).
*   `right` (or `right_child`): A reference to the right child node (or `None` if no right child).

### Python Code Example for Node Class and Tree Creation

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def __repr__(self): # For cleaner printing of nodes
        return str(self.data)

# Create a simple binary tree
#        1
#       / \
#      2   3
#     / \
#    4   5

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Root node:", root)
print("Left child of root:", root.left)
print("Right child of root:", root.right)
print("Node 4:", root.left.left)
print("Node 5:", root.left.right)
```

## 4. Binary Tree Traversals

Tree traversal refers to the process of visiting (checking or updating) each node in a tree data structure, exactly once. Many traversal algorithms are naturally implemented using [recursion](../../algorithms/recursion.md).

### Pre-order Traversal (Root, Left, Right)
1.  Visit the current node (root).
2.  Recursively traverse the left subtree.
3.  Recursively traverse the right subtree.
Useful for creating a copy of the tree, or getting prefix expressions.

```python
def preorder_traversal(node):
    if node:
        print(node.data, end=" -> ")
        preorder_traversal(node.left)
        preorder_traversal(node.right)

print("\nPre-order Traversal:")
preorder_traversal(root) # Expected: 1 -> 2 -> 4 -> 5 -> 3 -> 
print("None")
```

### In-order Traversal (Left, Root, Right)
1.  Recursively traverse the left subtree.
2.  Visit the current node (root).
3.  Recursively traverse the right subtree.
For Binary Search Trees (BSTs), in-order traversal visits nodes in ascending order.

```python
def inorder_traversal(node):
    if node:
        inorder_traversal(node.left)
        print(node.data, end=" -> ")
        inorder_traversal(node.right)

print("\nIn-order Traversal:")
inorder_traversal(root) # Expected: 4 -> 2 -> 5 -> 1 -> 3 -> 
print("None")
```

### Post-order Traversal (Left, Right, Root)
1.  Recursively traverse the left subtree.
2.  Recursively traverse the right subtree.
3.  Visit the current node (root).
Useful for deleting nodes from a tree (ensuring children are processed before the parent) or getting postfix expressions.

```python
def postorder_traversal(node):
    if node:
        postorder_traversal(node.left)
        postorder_traversal(node.right)
        print(node.data, end=" -> ")

print("\nPost-order Traversal:")
postorder_traversal(root) # Expected: 4 -> 5 -> 2 -> 3 -> 1 -> 
print("None")
```

### Level-order Traversal (Breadth-First Traversal)
Visit nodes level by level, from left to right at each level. This is typically implemented using a [queue](./queues.md#using-collectionsdeque) for efficient additions and removals from the front.

```python
from collections import deque # Using deque for an efficient queue

def levelorder_traversal(root_node):
    if not root_node:
        return

    nodes_queue = deque([root_node])
    while nodes_queue:
        current_node = nodes_queue.popleft() # Dequeue from the left
        print(current_node.data, end=" -> ")

        if current_node.left:
            nodes_queue.append(current_node.left) # Enqueue to the right
        if current_node.right:
            nodes_queue.append(current_node.right) # Enqueue to the right

print("\nLevel-order Traversal:")
levelorder_traversal(root) # Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 
print("None")
```

## 5. Basic Binary Tree Operations (Conceptual)

The implementation details and complexity of these operations depend heavily on the type of binary tree (e.g., whether it's a Binary Search Tree or just an arbitrary binary tree).

*   **Insertion:**
    *   **Concept:** Adding a new node to the tree.
    *   **Considerations:** In a general binary tree, you need to specify where to insert (e.g., as the left or right child of a specific node). In a Binary Search Tree (BST), the insertion point is determined by the node's value to maintain the BST property (left children < parent < right children).
    *   **Complexity:** Can range from O(log n) in balanced BSTs to O(n) in degenerate trees or for finding a specific insertion spot in a general tree.

*   **Searching:**
    *   **Concept:** Finding a node with a particular value.
    *   **Considerations:** In a general binary tree, you might have to traverse all nodes (O(n)). In a BST, searching is more efficient (average O(log n), worst-case O(n) for unbalanced trees) because you can eliminate half the tree at each step.
    *   **Complexity:** O(n) for general binary trees; O(log n) average for BSTs.

*   **Deletion:**
    *   **Concept:** Removing a node from the tree.
    *   **Considerations:** This is the most complex operation.
        1.  **Node is a leaf:** Easy, just remove it.
        2.  **Node has one child:** Promote the child to take the node's place.
        3.  **Node has two children (especially in BSTs):** Typically involves finding the in-order successor (smallest node in the right subtree) or in-order predecessor (largest node in the left subtree), replacing the node's value with it, and then deleting that successor/predecessor node (which will have 0 or 1 child).
    *   **Complexity:** Similar to insertion and search, typically O(log n) for balanced BSTs and O(n) in the worst case.

These operations are fundamental, but their efficient implementation often requires more specialized types of binary trees like Binary Search Trees or self-balancing trees.
