    <<<<<<< HEAD
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
"""
      Calculates the factorial of a given integer `x`.

      The factorial of a non-negative integer `x` is the product of all positive integers less than or equal to `x`. For example, the factorial of 5 is 120 (5 * 4 * 3 * 2 * 1).

      This function recursively calculates the factorial by multiplying `x` with the factorial of `x-1`, until the base case of `x == 1` is reached, where the function returns 1.

      Args:
          x (int): The non-negative integer whose factorial is to be calculated.

      Returns:
          int: The factorial of the given integer `x`.
      """
            if x == 1:
        return 1
      else:
        return x * factorial(x-1)

    print(factorial(5))

    def fibonacci(x):
        if x == 0 or x == 1:
            return 1
        else:
            return fibonacci(x - 1) + fibonacci(x - 2)

    def fibonacci_iterative(x):
        a, b = 0, 1
        for i in range(x):
            a, b = b, a + b
        return a
    def fibonacci_iterative(x: int) -> int:

        prev, curr = 0, 1
        for _ in range(x):
            prev, curr = curr, prev + curr
        return prev
    public class hello{
      public static void main(String[] args) {
            System.out.println("Hello, World!");
        }

      public static void print_char(String my_string) {
            for (int i = 0; i < my_string.length(); i++) {
                System.out.print(my_string.charAt(i));
            }
        }

      public static void print_char_empty(String my_string) {
            if (my_string.length() == 0) {
                System.out.println("The string is empty");
            } else {
                System.out.println("The string is not empty");
            }
        }

      public static void print_char_empty_if(String my_string) {    #   public static void print_char_empty(String my_string) {
    #         if (my_string.length() == 0) {
    #             System.out.println("The string is empty");
    #         } else {
    #             System.out.println("The string is not empty");
    #         }
    #     }

    #   public static void print_char_empty_if(String my_string) {        System.out.println(my_string.length() == 0? "The string is empty" : "The string is not empty");

        for (int i = 0; i < my_string.length(); i++) {
          System.out.print(my_string.charAt(i));
        }
      }
    }
