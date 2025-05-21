# Python Basics Dictionary

This page serves as a quick reference for fundamental Python concepts. For more detailed explanations of specific topics, please refer to the dedicated pages within this Python Basics section.

## 1. Common Data Types

Python has several built-in data types. Here are some of the most common ones:

*   **Integers (`int`):** Whole numbers, positive or negative, without decimals.
    ```python
    age = 25
    count = -10
    ```
*   **Floats (`float`):** Numbers with a decimal point, or in exponential notation.
    ```python
    price = 19.99
    pi_approx = 3.14e-2 # 0.0314
    ```
*   **Booleans (`bool`):** Represent truth values, either `True` or `False`.
    ```python
    is_active = True
    is_ready = False
    ```
*   **Strings (`str`):** Immutable sequences of Unicode characters, used for text.
    ```python
    name = "Alice"
    message = 'Hello, World!'
    ```
*   **Lists (`list`):** Mutable, ordered sequences of items. Items can be of different types.
    ```python
    numbers = [1, 2, 3, 4, 5]
    mixed_list = [1, "apple", True]
    ```
*   **Dictionaries (`dict`):** Mutable collections of key-value pairs. Keys must be hashable and unique.
    ```python
    person = {"name": "Bob", "age": 30}
    capitals = {'USA': 'Washington D.C.', 'France': 'Paris'}
    ```
*   **Tuples (`tuple`):** Immutable, ordered sequences of items.
    ```python
    coordinates = (10.0, 20.0)
    rgb_color = (255, 0, 0)
    ```
*   **Sets (`set`):** Mutable, unordered collections of unique, hashable items.
    ```python
    unique_numbers = {1, 2, 3, 2, 1} # Results in {1, 2, 3}
    fruits = {"apple", "banana", "cherry"}
    ```

## 2. Variables and Assignment

Variables are names given to memory locations that store data.
*   **Naming:** Variable names can contain letters, numbers, and underscores, but cannot start with a number. They are case-sensitive.
*   **Assignment (`=`):** The equals sign (`=`) is used to assign a value to a variable.

```python
student_name = "Carol"  # String assignment
age = 22                 # Integer assignment
height_meters = 1.75     # Float assignment
is_enrolled = True       # Boolean assignment

# Multiple assignments
x, y, z = 10, 20, 30
print(f"{student_name} is {age}, {height_meters}m tall. Enrolled: {is_enrolled}")
print(f"x: {x}, y: {y}, z: {z}")
```

## 3. String Operations

Strings are used for textual data and support many operations like concatenation, slicing, and various methods for manipulation (e.g., `upper()`, `lower()`, `split()`, `join()`). Strings are immutable.
For a more comprehensive guide, see [Detailed String Operations](../strings).

```python
greeting = "Hello"
name = "Python"
full_greeting = greeting + ", " + name + "!" # Concatenation
print(full_greeting)      # Output: Hello, Python!
print(name[0])            # Output: P (accessing character)
print(name.upper())       # Output: PYTHON
```

## 4. List Operations

Lists in Python are versatile, mutable, ordered sequences that function as dynamic arrays. They can store items of different types and can grow or shrink as needed. Common operations include appending, inserting, removing elements, slicing, and iteration.
For more detailed information, see [Detailed List/Array Operations](../arrays).

```python
numbers = [1, 2, 3]
numbers.append(4)      # Add to end: [1, 2, 3, 4]
numbers.insert(1, 99)  # Insert 99 at index 1: [1, 99, 2, 3, 4]
popped_item = numbers.pop() # Remove and return last item (4)
print(numbers[0])      # Access first element: 1
print(numbers[1:3])    # Slice: [99, 2]
```

## 5. Dictionary Operations

Dictionaries store data as key-value pairs. They are mutable, unordered (prior to Python 3.7, insertion order is preserved from 3.7+), and indexed by keys.

*   **Creating:** Use curly braces `{}` or the `dict()` constructor.
*   **Accessing:** Use square brackets `[]` with the key.
*   **Adding/Modifying:** Assign a value to a key.
*   **Deleting:** Use `del` keyword or `pop()` method.
*   **Iterating:** Loop through keys, values, or items (key-value pairs).

```python
# Creating
student = {"name": "Dev", "id": 101, "major": "Computer Science"}
print(student)

# Accessing
print(f"Name: {student['name']}") # Output: Dev

# Adding/Modifying
student["year"] = 3             # Add new key-value pair
student["id"] = 102             # Modify existing value
print(f"Updated student: {student}")

# Deleting
removed_major = student.pop("major")
# del student["year"]
print(f"Student after removing major: {student}, Removed: {removed_major}")

# Iterating
print("Student details:")
for key, value in student.items():
    print(f"{key}: {value}")
```

## 6. Input and Output

*   **`input(prompt)`:** Reads a line of text from the user. The `prompt` is an optional string displayed to the user. Always returns a string.
*   **`print(*objects, sep=' ', end='\\n')`:** Prints objects to the text stream. `sep` is the separator between objects, `end` is what's printed at the end.

```python
user_name = input("Enter your name: ")
user_age_str = input("Enter your age: ")

print(f"Hello, {user_name}!")
print("You said your age is:", user_age_str, sep=" --- ", end=".\nEnd of print.\n")

# Remember to convert input if needed, e.g., for numbers
try:
    user_age_int = int(user_age_str)
    print(f"Next year you will be {user_age_int + 1}.")
except ValueError:
    print("Invalid age entered.")
```

## 7. Common Built-in Functions

Python offers many built-in functions. Here are a few common ones:

*   **`len(s)`:** Returns the length (number of items) of an object (string, list, dict, etc.).
*   **`type(object)`:** Returns the type of an object.
*   **`int(x)`:** Converts `x` to an integer.
*   **`float(x)`:** Converts `x` to a floating-point number.
*   **`str(x)`:** Converts `x` to a string representation.
*   **`list(iterable)`:** Converts an iterable to a list.
*   **`dict(mapping)`:** Creates a dictionary.
*   **`sum(iterable)`:** Sums the items of an iterable (numbers).
*   **`min(iterable)` / `max(iterable)`:** Returns the minimum/maximum item of an iterable.
*   **`range(start, stop, step)`:** Generates a sequence of numbers.
*   **`sorted(iterable)`:** Returns a new sorted list from the items in iterable.
*   **`open(filename, mode)`:** Opens a file and returns a file object.

```python
my_list = [3, 1, 4, 1, 5, 9]
print(f"Length of list: {len(my_list)}")         # Output: 6
print(f"Type of my_list: {type(my_list)}")       # Output: <class 'list'>
print(f"Sum of my_list: {sum(my_list)}")         # Output: 23
print(f"Min of my_list: {min(my_list)}")         # Output: 1
print(f"Sorted my_list: {sorted(my_list)}")     # Output: [1, 1, 3, 4, 5, 9]
for i in range(3): print(i, end=" ")           # Output: 0 1 2 
```

## 8. Branching Structures (Conditional Statements)

Conditional statements allow code execution based on whether a condition is true or false.
*   **`if`:** Executes a block of code if its condition is true.
*   **`elif` (else if):** Checks another condition if the preceding `if` or `elif` conditions were false.
*   **`else`:** Executes a block of code if all preceding `if` and `elif` conditions were false.

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"
print(f"Your grade is: {grade}") # Output: B
```

## 9. Looping Structures (Iteration)

Loops are used to execute a block of code repeatedly.

*   **`for` loops:** Iterate over a sequence (like a list, tuple, string, or range) or other iterable objects.
    ```python
    print("Fruits:")
    fruits = ["apple", "banana", "cherry"]
    for fruit in fruits:
        print(fruit)

    print("Numbers from 0 to 2:")
    for i in range(3): # Generates numbers 0, 1, 2
        print(i)
    ```
*   **`while` loops:** Repeat as long as a specified condition is true.
    ```python
    count = 0
    print("While loop count:")
    while count < 3:
        print(count)
        count += 1 # Important: update the condition variable
    ```

## 10. Transfer and Interrupt Structures (Control Flow Modifiers)

These statements alter the normal flow of loops.

*   **`break`:** Exits the current (innermost) loop immediately.
    ```python
    for i in range(10):
        if i == 3:
            break # Exit loop when i is 3
        print(i) # Output: 0, 1, 2
    ```
*   **`continue`:** Skips the rest of the code inside the current iteration of the loop and proceeds to the next iteration.
    ```python
    for i in range(5):
        if i == 2:
            continue # Skip printing 2
        print(i) # Output: 0, 1, 3, 4
    ```
*   **`pass`:** Acts as a null operation. It's used as a placeholder when a statement is syntactically required but you don't want any command or code to execute.
    ```python
    def my_empty_function():
        pass # To be implemented later

    if True:
        pass # Placeholder for a future condition block
    ```

## 11. Module Imports

Modules are files containing Python definitions and statements. They allow you to organize code and reuse functionality.

*   **`import module_name`:** Imports the entire module. Access its contents using `module_name.item`.
    ```python
    import math
    print(f"Value of pi: {math.pi}")
    print(f"Square root of 16: {math.sqrt(16)}")
    ```
*   **`from module_name import specific_item`:** Imports a specific function, class, or variable directly into the current namespace.
    ```python
    from datetime import date
    today = date.today()
    print(f"Today's date: {today}")
    ```
*   **`from module_name import specific_item as alias`:** Imports a specific item with an alias.
    ```python
    from math import factorial as fact
    print(f"Factorial of 5: {fact(5)}") # Output: 120
    ```
*   **`import module_name as alias`:** Imports the entire module with an alias.
    ```python
    import numpy as np # Common practice for the numpy library
    # arr = np.array([1, 2, 3])
    ```

## 12. Custom Functions (Defining Functions)

Functions are reusable blocks of code that perform a specific task.

*   **`def` keyword:** Used to define a function.
*   **Parameters (Arguments):** Inputs to the function, defined within parentheses.
*   **Docstrings:** An optional string literal as the first statement in a function's body, used to document the function.
*   **`return` statement:** Exits the function and optionally returns a value. If omitted, the function returns `None`.

```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    return f"Hello, {name}!"

message = greet("World")
print(message) # Output: Hello, World!

def add_numbers(x, y):
    """Adds two numbers and returns the sum."""
    result = x + y
    return result

sum_result = add_numbers(5, 3)
print(f"Sum: {sum_result}") # Output: 8

def print_info(name, age=30): # age has a default value
    """Prints name and age."""
    print(f"Name: {name}, Age: {age}")

print_info("Alex")       # Output: Name: Alex, Age: 30
print_info("Beth", 25) # Output: Name: Beth, Age: 25

# Functions can also call themselves, a concept known as recursion.
# For more details, see [Recursive Algorithms](../../algorithms/recursion.md).
```
