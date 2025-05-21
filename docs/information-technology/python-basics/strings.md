# Python Strings

Strings are a fundamental data type in Python used to represent textual data. They are sequences of Unicode characters. This page covers how to create, manipulate, and work with strings in Python.

See also the [Python Basics Dictionary](./dictionary.md) for a quick overview of other Python concepts.

## 1. Introduction to Strings in Python

### What are Strings?
A string in Python is an immutable sequence of Unicode code points. This means that once a string is created, its contents cannot be changed directly. Operations that appear to modify a string actually create a new string.

### Immutability
The immutability of strings has several implications:
*   **Safety:** When you pass a string to a function, you can be sure it won't be modified by that function.
*   **Performance:** Immutability can allow for certain optimizations, like interning identical string literals.
*   **New Objects on Modification:** Any operation that "changes" a string (like concatenation or replacement) results in a new string object being created.

### Creating Strings
Strings can be created using single quotes (`'...'`), double quotes (`"..."`), or triple quotes (`'''...'''` or `"""..."""`). Triple quotes are used for multi-line strings or strings that contain both single and double quotes without needing to escape them.

```python
# Single quotes
single_quoted = 'Hello, Python!'
print(f"Single quoted: {single_quoted}")

# Double quotes
double_quoted = "Python strings are versatile."
print(f"Double quoted: {double_quoted}")

# Triple quotes for multi-line strings
multi_line_string = """This is a
multi-line string.
It can span across several lines."""
print(f"Multi-line string:\n{multi_line_string}")

# Triple quotes can also be used for single line strings
triple_single = '''A string with triple single quotes.'''
print(f"Triple single: {triple_single}")

# Using the str() constructor
from_number = str(123)
print(f"String from number: {from_number}, type: {type(from_number)}")
```

## 2. Accessing Characters and Substrings

Since strings are sequences, their individual characters and subsequences (substrings) can be accessed using indexing and slicing.

### Indexing
Python uses zero-based indexing. Negative indices can be used to access characters from the end of the string.

```python
my_string = "Python"

# Positive indexing
print(f"Character at index 0: {my_string[0]}")  # Output: P
print(f"Character at index 3: {my_string[3]}")  # Output: h

# Negative indexing
print(f"Last character: {my_string[-1]}")      # Output: n
print(f"Second to last character: {my_string[-2]}") # Output: o
```

### Slicing
Slicing extracts a substring. The syntax is `string[start:stop:step]`.
*   `start`: The starting index (inclusive). Defaults to 0.
*   `stop`: The ending index (exclusive). Defaults to the end of the string.
*   `step`: The amount to increment by (default is 1).

```python
my_string = "Hello, World!"

# Basic slicing
print(f"Substring from index 0 to 4: {my_string[0:5]}") # Output: Hello
print(f"Substring from index 7 to 11: {my_string[7:12]}") # Output: World

# Omitting start or stop
print(f"Substring from start to index 4: {my_string[:5]}")  # Output: Hello
print(f"Substring from index 7 to end: {my_string[7:]}")    # Output: World!

# Slicing with a step
print(f"Every second character: {my_string[::2]}") # Output: Hlo ol!

# Negative indexing with slicing
print(f"Last 5 characters: {my_string[-5:]}") # Output: orld!

# Reversing a string with slicing
print(f"Reversed string: {my_string[::-1]}") # Output: !dlroW ,olleH
```

## 3. Common String Operations and Methods

### Concatenation (`+`)
Combines two or more strings.

```python
str1 = "Hello"
str2 = "World"
greeting = str1 + ", " + str2 + "!"
print(f"Concatenated: {greeting}") # Output: Hello, World!
```

### Repetition (`*`)
Repeats a string a specified number of times.

```python
word = "echo "
repeated_word = word * 3
print(f"Repeated: {repeated_word}") # Output: echo echo echo 
```

### `len()`
Returns the number of characters in a string.

```python
message = "Python is fun"
print(f"Length of '{message}': {len(message)}") # Output: 13
```

### Case Conversion Methods
*   **`upper()`**: Converts all characters to uppercase.
*   **`lower()`**: Converts all characters to lowercase.
*   **`capitalize()`**: Converts the first character to uppercase and the rest to lowercase.
*   **`title()`**: Converts the first character of each word to uppercase and others to lowercase.

```python
text = "learning Python IS exciting"
print(f"Original: '{text}'")
print(f"upper(): '{text.upper()}'")
print(f"lower(): '{text.lower()}'")
print(f"capitalize(): '{text.capitalize()}'") # Only 'L' becomes capital
print(f"title(): '{text.title()}'")
```

### Stripping Whitespace
*   **`strip()`**: Removes leading and trailing whitespace (or specified characters).
*   **`lstrip()`**: Removes leading whitespace (or specified characters).
*   **`rstrip()`**: Removes trailing whitespace (or specified characters).

```python
text_with_spaces = "   some text   "
print(f"Original: '{text_with_spaces}'")
print(f"strip(): '{text_with_spaces.strip()}'")
print(f"lstrip(): '{text_with_spaces.lstrip()}'")
print(f"rstrip(): '{text_with_spaces.rstrip()}'")

text_with_chars = "---message---"
print(f"Original with chars: '{text_with_chars}'")
print(f"strip('-'): '{text_with_chars.strip('-')}'") # Output: message
```

### Finding and Replacing
*   **`find(substring)`**: Returns the starting index of the first occurrence of `substring`. Returns -1 if not found.
*   **`replace(old, new)`**: Returns a new string where all occurrences of `old` are replaced by `new`.

```python
sentence = "The quick brown fox jumps over the lazy dog."
print(f"find('fox'): {sentence.find('fox')}") # Output: 16
print(f"find('cat'): {sentence.find('cat')}") # Output: -1

new_sentence = sentence.replace("dog", "cat")
print(f"replace('dog', 'cat'): '{new_sentence}'")
```

### Splitting and Joining
*   **`split(separator)`**: Splits the string into a list of substrings based on `separator`. If no separator is provided, splits by whitespace.
*   **`join(iterable)`**: Joins elements of an iterable (e.g., a list of strings) into a single string, with the string itself as the separator.

```python
csv_data = "apple,banana,cherry,date"
items = csv_data.split(',')
print(f"split(','): {items}") # Output: ['apple', 'banana', 'cherry', 'date']

words = ["Python", "is", "powerful"]
joined_string = " ".join(words)
print(f"join with space: '{joined_string}'") # Output: Python is powerful

dashed_string = "-".join(words)
print(f"join with dash: '{dashed_string}'") # Output: Python-is-powerful
```

### Checking Prefixes and Suffixes
*   **`startswith(prefix)`**: Returns `True` if the string starts with `prefix`, otherwise `False`.
*   **`endswith(suffix)`**: Returns `True` if the string ends with `suffix`, otherwise `False`.

```python
filename = "document.txt"
print(f"'{filename}' startswith('doc'): {filename.startswith('doc')}") # Output: True
print(f"'{filename}' endswith('.pdf'): {filename.endswith('.pdf')}") # Output: False
print(f"'{filename}' endswith('.txt'): {filename.endswith('.txt')}")   # Output: True
```

### Checking for Substrings (`in` operator)
The `in` operator checks if a substring exists within a string.

```python
text = "Hello, welcome to Python programming."
print(f"'welcome' in text: {'welcome' in text}") # Output: True
print(f"'Java' in text: {'Java' in text}")     # Output: False
```

## 4. String Formatting

Python provides several ways to format strings, allowing you to embed variables and expressions within them.

### f-strings (Formatted String Literals)
Introduced in Python 3.6, f-strings are the preferred method for string formatting due to their conciseness and readability. They are prefixed with `f` or `F`.

```python
name = "Alice"
age = 30
height = 1.65

# Basic embedding
greeting = f"My name is {name} and I am {age} years old."
print(greeting)

# Embedding expressions
calculation = f"Five times three is {5 * 3}."
print(calculation)

# Formatting numbers
pi_approx = 3.1415926535
formatted_pi = f"Pi is approximately {pi_approx:.2f}." # Format to 2 decimal places
print(formatted_pi)

# Alignment and padding
item = "apple"
price = 2.5
formatted_item = f"Item: {item:<10} | Price: ${price:>5.2f}" # Left-align item, right-align price
print(formatted_item)
```

### `str.format()` Method
This method is more versatile than the older `%` operator and was the standard before f-strings.

```python
name = "Bob"
age = 25

# Positional arguments
info1 = "Name: {}, Age: {}".format(name, age)
print(info1)

# Indexed arguments
info2 = "Name: {0}, Age: {1}. {0} is {1}.".format(name, age)
print(info2)

# Keyword arguments
info3 = "Name: {n}, Age: {a}".format(n="Charlie", a=35)
print(info3)

# Formatting options
value = 123.4567
formatted_value = "Value: {:.2f}".format(value) # 2 decimal places
print(formatted_value)

formatted_padding = "Value: {:>10.2f}".format(value) # Right align, width 10, 2 decimal places
print(formatted_padding)
```

### printf-style String Formatting (`%` operator) - Optional
This is an older method, similar to C's `printf`. While still functional, f-strings or `str.format()` are generally recommended for new code.

```python
name = "David"
year = 2024
percentage = 95.5

# Basic usage
old_style_format = "User %s joined in %d. Score: %.1f%%" % (name, year, percentage)
print(old_style_format)
```

## 5. Iterating Through Strings

You can iterate over the characters of a string using a `for` loop.

```python
my_string = "loops"
print("Characters in the string:")
for char in my_string:
    print(char)
# Output:
# l
# o
# o
# p
# s

print("\nCharacters with their indices:")
for index, char in enumerate(my_string):
    print(f"Index {index}: {char}")
# Output:
# Index 0: l
# Index 1: o
# Index 2: o
# Index 3: p
# Index 4: s
```

Strings are a cornerstone of Python programming, offering a rich set of tools for text manipulation. Understanding their immutability and the various methods available is key to effective Python development.
