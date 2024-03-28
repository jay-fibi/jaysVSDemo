# Define a function
def greet(name):
  print("Hello", name)

# Call the function
greet("John")
greet("Sarah")

# Function with return value
def get_greeting(name):
  return "Hello " + name

print(get_greeting("David"))

# Function with multiple parameters
def add(num1, num2):
  return num1 + num2

print(add(3, 5))

# Function with default parameters
def increment(number, by=1):
  return number + by

print(increment(2))
print(increment(2, by=3))

# Lambda function
triple = lambda x: x * 3
print(triple(5))
print(increment(5))

# Recursive function
def factorial(x):
  if x == 1:
    return 1
  else:
    return x * factorial(x-1)

print(factorial(5))
