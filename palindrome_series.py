def is_palindrome(num):
  """Checks if a number is a palindrome."""
  return str(num) == str(num)[::-1]

def print_palindrome_series(start, end):
  """Prints a series of palindromes within a given range."""
  for num in range(start, end + 1):
    if is_palindrome(num):
      print(num)

# Example usage:
print_palindrome_series(10, 100)
