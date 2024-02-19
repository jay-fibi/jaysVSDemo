num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

sum = num1 + num2

print("Sum:", sum)
print("Maximum:", max(num1, num2))
print("Minimum:", min(num1, num2))

sum = num1 - num2
print("Minus:", sum)

sum = num1 * num2
print("Mul:", sum)

sum = num1 / num2
print("Div:", sum)

sum = num1 % num2
print("Mod:", sum)

sum = num1 ** num2

print("Power:", sum)

sum = num1 // num2
print("Floor Div:", sum)

# Here is a reference snippet of code from MultipleAdd.py:
import unittest
from test1 import sum, max, min


class TestCalculator(unittest.TestCase):

    def test_sum(self):
        self.assertEqual(sum(2, 3), 5)
        self.assertEqual(sum(-2, 3), 1)
        self.assertEqual(sum(-2, -3), -5)

    def test_max(self):
        self.assertEqual(max(2, 3), 3)
        self.assertEqual(max(-2, 3), 3)
        self.assertEqual(max(-2, -3), -2)

    def test_min(self):
        self.assertEqual(min(2, 3), 2)
        self.assertEqual(min(-2, 3), -2)
        self.assertEqual(min(-2, -3), -3)


if __name__ == '__main__':
    unittest.main()

