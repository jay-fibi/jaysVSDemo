from typing import Dict

fib_cache: Dict[int, int] = {0: 0, 1: 1} 

def fibonacci(n: int) -> int:
    if n in fib_cache:
        return fib_cache[n]

    nth_fib = fibonacci(n-1) + fibonacci(n-2)
    fib_cache[n] = nth_fib
    return nth_fib

num_terms = 0
while num_terms <= 0:
    try:
        num_terms = int(input("How many terms? "))  
        if num_terms <= 0:
            print("Number of terms must be > 0")
    except ValueError:
        print("Invalid input. Please enter an integer.")

fib_sequence = [str(fibonacci(i)) for i in range(num_terms)]
print("Fibonacci sequence:")  
print(", ".join(fib_sequence))
