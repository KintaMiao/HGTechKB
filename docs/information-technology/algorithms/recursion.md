# Recursive Algorithms

Recursion is a powerful method of solving computational problems where the solution to a problem depends on solutions to smaller instances of the same problem. This is achieved by using functions that call themselves from within their own code.

## Definition

In computer science, **recursion** is a problem-solving technique where a function calls itself, directly or indirectly, to solve a smaller version of the same problem. The process continues until it reaches a state where the problem can be solved trivially, without further recursion.

Niklaus Wirth described it as: "The power of recursion evidently lies in the possibility of defining an infinite set of objects by a finite statement. In the same manner, an infinite number of computations can be described by a finite recursive program, even if this program contains no explicit repetitions."

## Key Characteristics

Recursive algorithms are defined by two main components:

*   **Base Case(s):** This is the simplest form of the problem, for which the function produces a result trivially (without recurring). The base case acts as the termination condition for the recursion. Without a correctly defined base case, a recursive function would call itself indefinitely, leading to an infinite loop and typically a stack overflow error.
*   **Recursive Step (or Recursive Case):** In this part, the function calls itself with a modified input that moves it closer to the base case. The recursive step breaks down the problem into smaller, more manageable sub-problems. The function combines the results of these sub-problems to solve the original problem.

Other characteristics include:
*   **Self-Calls:** The function calls itself one or more times within its own definition.
*   **Divide and Conquer:** Many recursive algorithms follow a divide-and-conquer strategy, where the problem is divided into sub-problems, solved independently, and then their solutions are combined.

## Simple Examples

### Example 1: Factorial Calculation

The factorial of a non-negative integer `n`, denoted by `n!`, is the product of all positive integers less than or equal to `n`. It can be defined recursively. This example uses concepts like [custom functions and basic numeric operations](../../python-basics/dictionary.md#custom-functions-defining-functions) covered in Python basics.
*   `0! = 1` (Base Case)
*   `n! = n * (n-1)!` for `n > 0` (Recursive Step)

```python
def factorial_recursive(n):
  """Calculates factorial using recursion."""
  # Base case
  if n == 0:
    return 1
  # Recursive step
  else:
    return n * factorial_recursive(n - 1)

# Example usage:
print(factorial_recursive(5))  # Output: 120 (5 * 4 * 3 * 2 * 1)
```

### Example 2: Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
*   `F(0) = 0` (Base Case 1)
*   `F(1) = 1` (Base Case 2)
*   `F(n) = F(n-1) + F(n-2)` for `n > 1` (Recursive Step)

```python
def fibonacci_recursive(n):
  """Calculates the nth Fibonacci number using recursion."""
  if n <= 0:
    return 0
  elif n == 1:
    return 1
  # Recursive step
  else:
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

# Example usage:
print(fibonacci_recursive(7))  # Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)
```
*Note: This naive recursive Fibonacci is highly inefficient due to recomputing the same values multiple times. Iterative solutions or memoization are preferred for Fibonacci.*

## Advantages and Disadvantages (vs. Iterative Algorithms)

### Advantages:

*   **Readability and Elegance:** Recursive solutions can be very intuitive and closely mirror the mathematical definition of a problem (e.g., factorial, tree traversals). This can lead to simpler and more understandable code for certain types of problems.
*   **Problem Decomposition:** Recursion naturally lends itself to problems that can be broken down into smaller, self-similar sub-problems (e.g., divide and conquer algorithms like mergesort or quicksort).
*   **Handling Recursive Data Structures:** Recursion is very effective for processing data structures that are defined recursively, such as trees and linked lists.

### Disadvantages:

*   **Performance Overhead:** Each recursive call adds a new frame to the **call stack** (which behaves like a [stack data structure](../../python-basics/stacks.md)), consuming memory and time. For deep recursions, this can lead to significant overhead compared to iterative solutions.
*   **Stack Overflow:** If the recursion is too deep (e.g., due to a missing or incorrect base case, or very large input), it can exhaust the call stack memory, leading to a stack overflow error and program termination.
*   **Debugging Complexity:** Tracing the execution flow of a recursive function can sometimes be more difficult than an iterative one due to multiple active instances of the function on the call stack.
*   **Not Always Intuitive:** For problems that are naturally iterative, forcing a recursive solution can make the code more complex and less efficient.

## Tail Recursion

**Tail recursion** is a specific form of recursion where the recursive call is the very last operation in the function. There are no pending operations to be performed on the return of the recursive call.

```python
# Example of a tail-recursive function (GCD)
def gcd_tail_recursive(a, b):
  if b == 0:
    return a
  else:
    return gcd_tail_recursive(b, a % b) # Recursive call is the last operation
```

The significance of tail recursion is that it can be optimized by compilers or interpreters. A tail-recursive call can be transformed into an iterative process (a jump or goto) without adding a new stack frame. This optimization, known as **tail call optimization (TCO)**, allows tail-recursive functions to execute with constant stack space, mitigating the risk of stack overflow and often improving performance to be comparable with iterative solutions.

However, not all programming languages implement TCO. For instance, Python does not perform TCO, so even tail-recursive functions can lead to stack overflows for large inputs. Languages common in functional programming (like Scheme or Haskell) typically do provide TCO.

In summary, recursive algorithms offer an elegant way to solve complex problems by breaking them down into simpler, self-similar parts. While they can lead to concise code, understanding their performance implications, especially concerning the call stack and the availability of tail call optimization, is crucial.

Compare with [Iterative Algorithms](./iteration.md).
