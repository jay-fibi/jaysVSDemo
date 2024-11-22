import unittest
from calc import Calculator

class TestCalculator(unittest.TestCase):

    def test_exit_calculation_no(self):
        calc = Calculator()
        result = calc.handle_next_calculation("no")
        self.assertFalse(result)

    def test_exit_calculation_yes(self):
        calc = Calculator()
        result = calc.handle_next_calculation("yes")
        self.assertTrue(result)

    def test_exit_calculation_invalid(self):
        calc = Calculator()
        result = calc.handle_next_calculation("invalid")
        self.assertTrue(result)

    def test_exit_calculation_empty(self):
        calc = Calculator()
        result = calc.handle_next_calculation("")
        self.assertTrue(result)
