import unittest
from calc import print

class TestPrint(unittest.TestCase):
    
    def test_print_select_operation(self):
        expected_output = """Select operation.
1.Add  
2.Subtract
3.Multiply
4.Divide"""
        with self.captureStdout() as output:
            print("Select operation.")
            print("1.Add") 
            print("2.Subtract")
            print("3.Multiply")
            print("4.Divide")
        self.assertEqual(output.getvalue().strip(), expected_output)
        
if __name__ == '__main__':
    unittest.main()
import unittest
from calc import add, subtract, multiply, divide

class TestCalcAdditional(unittest.TestCase):

    def test_add_floats(self):
        self.assertEqual(add(1.5, 2.5), 4.0)
    
    def test_add_negatives(self):
        self.assertEqual(add(-3, -5), -8)

    def test_add_zero(self):
        self.assertEqual(add(0, 5), 5)

    def test_subtract_floats(self):
        self.assertEqual(subtract(3.5, 2.0), 1.5)

    def test_subtract_negatives(self):
        self.assertEqual(subtract(-7, -10), 3)

    def test_subtract_from_zero(self):
        self.assertEqual(subtract(0, 4), -4)

    def test_multiply_floats(self):
        self.assertEqual(multiply(2.5, 3.5), 8.75)

    def test_multiply_by_zero(self):
        self.assertEqual(multiply(5, 0), 0)

    def test_multiply_negatives(self):
        self.assertEqual(multiply(-4, -6), 24)

    def test_divide_floats(self):
        self.assertEqual(divide(16.0, 4.0), 4.0)

    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            divide(5, 0)
import unittest
from calc import *

class TestCalcChoiceValidation(unittest.TestCase):

    def test_invalid_choice_string(self):
        choice = 'abc'
        self.assertFalse(choice in ('1', '2', '3', '4'))

    def test_invalid_choice_int(self):
        choice = 5
        self.assertFalse(choice in ('1', '2', '3', '4'))
    
    def test_valid_choice_string(self):
        choice = '1'
        self.assertTrue(choice in ('1', '2', '3', '4'))

    def test_valid_choice_int(self):
        choice = 2
        self.assertTrue(str(choice) in ('1', '2', '3', '4'))