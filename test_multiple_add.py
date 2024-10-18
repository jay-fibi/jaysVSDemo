import unittest
from MultipleAdd import multiple_add

class TestMultipleAdd(unittest.TestCase):

    def test_multiple_add_positive_numbers(self):
        with unittest.mock.patch('builtins.input', side_effect=['3', '2', '4', '6']):
            result = multiple_add()
        self.assertEqual(result, 13)

    def test_multiple_add_negative_numbers(self):
        with unittest.mock.patch('builtins.input', side_effect=['2', '-5', '-3']):
            result = multiple_add()
        self.assertEqual(result, -7)

    def test_multiple_add_mixed_numbers(self):
        with unittest.mock.patch('builtins.input', side_effect=['4', '1.5', '-2.5', '0', '3']):
            result = multiple_add()
        self.assertEqual(result, 3)

    def test_multiple_add_zero_inputs(self):
        with unittest.mock.patch('builtins.input', side_effect=['3', '0', '0', '0']):
            result = multiple_add()
        self.assertEqual(result, 1)  # 1 is the initial value of sum

    def test_multiple_add_large_numbers(self):
        with unittest.mock.patch('builtins.input', side_effect=['2', '1000000', '2000000']):
            result = multiple_add()
        self.assertEqual(result, 3000001)

if __name__ == '__main__':
    unittest.main()
