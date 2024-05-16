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
fib_sequence = [str(fibonacci(i)) for i in range(num_terms)]
print("Fibonacci sequence:")  
print(", ".join(fib_sequence))

while True:
    try:
        num_terms = int(input("How many terms? "))  
        if num_terms < 0:
            print("Number of terms must be > 0")
        else:
            break
    except ValueError:
        print("Invalid input. Please enter an integer.")

import unittest
from fibo import fibonacci

class TestFibonacci(unittest.TestCase):

    def test_base_cases(self):
        self.assertEqual(fibonacci(0), 0)
        self.assertEqual(fibonacci(1), 1)

    def test_negative_input(self):
        self.assertRaises(ValueError, fibonacci, -1)

    def test_cached_values(self):
        # Check some cached values
        self.assertEqual(fibonacci(2), 1) 
        self.assertEqual(fibonacci(3), 2)
        self.assertEqual(fibonacci(4), 3)

    def test_large_input(self):
        self.assertEqual(fibonacci(30), 832040)

import unittest
from unittest.mock import patch
from fibo import fibonacci  # Assuming fibonacci function is in fibo.py

class TestFibonacciInput(unittest.TestCase):

    @patch('builtins.input', side_effect=['3'])
    @patch('builtins.print')
    def test_positive_input(self, mock_print, mock_input):
        with self.assertRaises(SystemExit):
            fibonacci(int(input("How many terms? ")))
        mock_print.assert_called_with("Invalid input. Please enter an integer.")

    @patch('builtins.input', side_effect=['-1', '5'])
    @patch('builtins.print')
    def test_first_negative_then_positive(self, mock_print, mock_input):
        with self.assertRaises(SystemExit):
            while True:
                try:
                    num_terms = int(input("How many terms? "))
                    if num_terms < 0:
                        print("Number of terms must be > 0")
                    else:
                        break
                except ValueError:
                    print("Invalid input. Please enter an integer.")
        mock_print.assert_any_call("Number of terms must be > 0")

    @patch('builtins.input', side_effect=['abc', '5'])
    @patch('builtins.print')
    def test_first_non_integer_then_positive(self, mock_print, mock_input):
        with self.assertRaises(SystemExit):
            while True:
                try:
                    num_terms = int(input("How many terms? "))
                    if num_terms < 0:
                        print("Number of terms must be > 0")
                    else:
                        break
                except ValueError:
                    print("Invalid input. Please enter an integer.")
        mock_print.assert_any_call("Invalid input. Please enter an integer.")
