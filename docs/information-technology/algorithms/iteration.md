# Iterative Algorithms

Iterative algorithms are a fundamental concept in computer science, referring to processes that repeat a set of instructions a specific number of times or until a condition is met. Each repetition is known as an iteration.

## Definition

In computing, **iteration** is the technique of marking out a block of statements within a computer program for a defined number of repetitions. This block of statements is said to be *iterated*. Essentially, an iterative algorithm involves repeating a process, with each iteration building upon the outcome of the previous one, to achieve a desired result.

## Key Characteristics

Iterative algorithms typically exhibit the following characteristics:

*   **Loops:** They almost always involve the use of looping constructs (e.g., [`for` loops, `while` loops](../../python-basics/dictionary.md#looping-structures-iteration)) to repeatedly execute a block of code.
*   **State Variables:** They use [variables](../../python-basics/dictionary.md#variables-and-assignment) (often called loop control variables, accumulators, or counters) to manage the state of the iteration. These variables are updated in each iteration. For example, a counter might be incremented, or a sum might be accumulated.
*   **Sequential Execution:** Instructions are executed step-by-step, one after another. The flow of control is typically linear within the loop, with the loop itself being repeated.
*   **Termination Condition:** A specific condition is defined to determine when the loop should stop. This could be a fixed number of iterations or a condition that becomes true or false during the execution.

## Simple Examples

### Example 1: Summing a list of numbers (Pseudocode)

This algorithm calculates the sum of the first three positive integers.

```pseudocode
a := 0                // Initialize an accumulator variable 'a' to 0
for i := 1 to 3 do    // Loop three times, with 'i' taking values 1, 2, 3
begin
    a := a + i;       // Add the current value of 'i' to 'a'
end;
print(a);             // The number 6 is printed (0 + 1; 1 + 2; 3 + 3 -> actually 1+2+3=6, the final 'a' is 3+3=6)
                      // Corrected: (initial a=0, i=1 -> a=1; i=2 -> a=3; i=3 -> a=6)
```

### Example 2: Factorial Calculation (Python)

This algorithm calculates the factorial of a non-negative integer `n`. The concept of functions and basic numeric types are covered in the [Python Basics Dictionary](../../python-basics/dictionary.md#custom-functions-defining-functions).

```python
def factorial_iterative(n):
  if n < 0:
    return "Factorial is not defined for negative numbers"
  elif n == 0:
    return 1
  else:
    result = 1
    for i in range(1, n + 1):
      result *= i
    return result

# Example usage:
print(factorial_iterative(5))  # Output: 120
```

## Advantages and Disadvantages (vs. Recursive Algorithms)

Iterative algorithms have distinct advantages and disadvantages when compared to recursive algorithms:

### Advantages:

*   **Performance (Sometimes):** Iteration often has lower overhead than recursion because it doesn't involve repeated function calls, which can consume memory and time (due to stack frame management). For very deep recursions, this can lead to stack overflow errors.
*   **State Management:** State is explicitly managed through variables, which can sometimes be easier to trace and debug for simpler problems.
*   **Predictable Memory Usage:** The memory usage is often more predictable, primarily determined by the variables declared, rather than the depth of function calls.

### Disadvantages:

*   **Complexity for Certain Problems:** Some problems are naturally recursive (e.g., tree traversals, quicksort, mergesort). Implementing these iteratively can be much more complex and less intuitive than their recursive counterparts, often requiring explicit management of a stack-like data structure.
*   **Readability (Sometimes):** For problems that are not inherently iterative, the code might be harder to read and understand compared to a more natural recursive solution.

In summary, iteration is a powerful and efficient way to handle repetitive tasks when the number of repetitions is known or can be determined by a condition. It's often preferred for its performance benefits in simpler cases, while recursion might be chosen for its elegance and simplicity in problems that have a naturally recursive structure.

Compare with [Recursive Algorithms](./recursion.md).
