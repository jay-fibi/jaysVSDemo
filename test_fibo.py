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
    def test_non_integer_input(self):
        """
        Test that the fibonacci function raises a TypeError when given a non-integer input.
        """
        self.assertRaises(TypeError, fibonacci, 3.14)
        self.assertRaises(TypeError, fibonacci, "5")
        self.assertRaises(TypeError, fibonacci, [1, 2, 3])
        self.assertRaises(TypeError, fibonacci, {"n": 10})



<C<TES<TESTFIL<TESTFILE7<TESTFILE704<T<TES<TESTFIL<TESTFILE7<TESTFILE704
