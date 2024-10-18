# Python program to demonstrate working
# of map.

# Return double of n
def addition(n):
    """
    Adds a number to itself.

    Args:
        n (int): The number to add to itself.

    Returns:
        int: The result of adding the number to itself.
    """
    return n + n

# We double all numbers using map()
numbers = (1, 2, 3, 4)
result = map(addition, numbers)
print(list(result))

