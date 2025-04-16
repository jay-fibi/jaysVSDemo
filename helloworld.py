# print "Hello Jack"
print("Hello Jack")

def bubbleSort(arr):
    # Bubble sort implementation here
    pass

def addition(a, b):
    return a + b
# Example usage
if __name__ == "__main__":
    """
    This block of code will be executed only when the script is run directly.
    It demonstrates the usage of the `addition` function.
    """
    num1 = 5
    num2 = 3
    print(f"The sum of {num1} and {num2} is {addition(num1, num2)}")


def subtraction(a: int, b: int) -> int:
    return a - b
if __name__ == "__main__":
    """
    This block of code will be executed only when the script is run directly.
    It demonstrates the usage of the `subtraction` function.
    """
    num1 = 5
    num2 = 3
    print(f"The difference of {num1} and {num2} is {subtraction(num1, num2)}")