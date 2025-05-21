# Sequential Search (Linear Search)

Sequential search, also known as linear search, is a fundamental searching algorithm used to find a particular element within a list or array. It is one of the simplest searching algorithms.

## Definition

**Sequential Search** is a method for finding an element within a list by checking each element of the list sequentially, one after the other, until either a match is found or the entire list has been traversed.

## How the Algorithm Works

The algorithm iterates through the collection of items, typically starting from the first element and moving towards the last. In each step, it compares the current element with the target value.

Here's a step-by-step explanation:

1.  **Start at the beginning:** Begin with the first element of the list.
2.  **Compare:** Compare the current element with the target value you are searching for.
3.  **Match found?**:
    *   If the current element matches the target value, the search is successful. The algorithm typically returns the index (position) of the matched element.
    *   If the current element does not match the target value, move to the next element in the list.
4.  **End of list?**:
    *   If there are more elements in the list, repeat from step 2.
    *   If the end of the list is reached and no match has been found, the search is unsuccessful. The algorithm typically returns a special value (e.g., -1 or `None`) to indicate that the target element is not present in the list.

## Example

Let's say we have a list of numbers: `[10, 50, 30, 70, 80, 60, 20, 90, 40]` and we want to find the element `60`.

1.  Start at index 0: `current_element = 10`. `10 != 60`.
2.  Move to index 1: `current_element = 50`. `50 != 60`.
3.  Move to index 2: `current_element = 30`. `30 != 60`.
4.  Move to index 3: `current_element = 70`. `70 != 60`.
5.  Move to index 4: `current_element = 80`. `80 != 60`.
6.  Move to index 5: `current_element = 60`. `60 == 60`. Match found! Return index 5.

### Python Example

```python
def sequential_search(data_list, target):
  """
  Performs a sequential search on a list.

  Args:
    data_list: The list of items to search through.
    target: The item to search for.

  Returns:
    The index of the target if found, otherwise -1.
  """
  for i in range(len(data_list)):
    if data_list[i] == target:
      return i  # Target found at index i
  return -1     # Target not found in the list

# Example usage:
my_list = [10, 50, 30, 70, 80, 60, 20, 90, 40]
target_value = 60
result_index = sequential_search(my_list, target_value)

if result_index != -1:
  print(f"Element {target_value} found at index {result_index}.")
else:
  print(f"Element {target_value} not found in the list.")

target_value_not_found = 100
result_index_not_found = sequential_search(my_list, target_value_not_found)

if result_index_not_found != -1:
  print(f"Element {target_value_not_found} found at index {result_index_not_found}.")
else:
  print(f"Element {target_value_not_found} not found in the list.")
```

## Time Complexity

The time complexity describes how the runtime of the algorithm scales with the size of the input list (let `n` be the number of elements in the list).

*   **Best Case: O(1)**
    *   This occurs when the target element is the first element in the list. Only one comparison is needed.
*   **Worst Case: O(n)**
    *   This occurs when the target element is the last element in the list, or when the element is not present in the list at all. In this scenario, the algorithm has to make `n` comparisons.
*   **Average Case: O(n)**
    *   On average, assuming the target element is equally likely to be at any position, the algorithm will perform approximately `(n+1)/2` comparisons. For large `n`, this is still proportional to `n`.

## Space Complexity

*   **O(1)** (for an iterative implementation)
    *   Sequential search is an in-place algorithm. It requires a constant amount of extra space for variables (like the loop index and the target value), regardless of the size of the input list.

## Advantages

*   **Simplicity:** It is very simple to understand and implement.
*   **Works on Unsorted Data:** Unlike some other search algorithms (e.g., binary search), sequential search does not require the list to be sorted beforehand.
*   **No Additional Data Structures:** It doesn't require any complex data structures.
*   **Efficient for Small Lists:** For very small lists, the overhead of more complex algorithms might make sequential search faster.

## Disadvantages

*   **Inefficiency for Large Lists:** Its primary disadvantage is its inefficiency for large lists. As the list size grows, the average and worst-case search time increases linearly.
*   **Slow for Unsuccessful Searches:** If the element is not in the list, the algorithm must check every single element.

## When to Use Sequential Search

Sequential search is appropriate in the following situations:

*   **Small Lists:** When the list or array to be searched is small.
*   **Unsorted Lists:** When the list is not sorted and sorting it would be too costly or not feasible.
*   **Infrequent Searches:** If searches are performed very rarely, the simplicity of implementation might outweigh the inefficiency.
*   **Checking for Existence (Small Lists):** When you simply need to check if an element exists and the list is small.
*   **Educational Purposes:** It's a good starting point for learning about search algorithms due to its straightforward nature.

For larger datasets or situations requiring frequent searches, more efficient algorithms like binary search (for sorted lists) or hash tables are generally preferred.
