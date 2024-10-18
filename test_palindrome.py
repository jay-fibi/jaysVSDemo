import unittest
from palindrome import is_palindrome

class TestPalindromeOutput(unittest.TestCase):

    def test_palindrome_output(self):
        with self.assertLogs() as captured:
            for i in range(1, 1000):
                if is_palindrome(i):
                    print(i)
                    print(i * i)
                    output = i * i
                    print(output)
                    print(output + 1)
                    a = i * i + 1
                    print(a)
                    print("hello world")

        self.assertTrue(any("1" in log for log in captured.output))
        self.assertTrue(any("1" in log for log in captured.output))
        self.assertTrue(any("2" in log for log in captured.output))
        self.assertTrue(any("hello world" in log for log in captured.output))

    def test_palindrome_range(self):
        palindromes = []
        for i in range(1, 1000):
            if is_palindrome(i):
                palindromes.append(i)

        self.assertIn(11, palindromes)
        self.assertIn(101, palindromes)
        self.assertIn(999, palindromes)
        self.assertNotIn(10, palindromes)
        self.assertNotIn(100, palindromes)

    def test_palindrome_squares(self):
        palindrome_squares = []
        for i in range(1, 1000):
            if is_palindrome(i):
                palindrome_squares.append(i * i)

        self.assertIn(1, palindrome_squares)
        self.assertIn(121, palindrome_squares)
        self.assertIn(10201, palindrome_squares)
        self.assertNotIn(100, palindrome_squares)

    def test_palindrome_squares_plus_one(self):
        palindrome_squares_plus_one = []
        for i in range(1, 1000):
            if is_palindrome(i):
                palindrome_squares_plus_one.append(i * i + 1)

        self.assertIn(2, palindrome_squares_plus_one)
        self.assertIn(122, palindrome_squares_plus_one)
        self.assertIn(10202, palindrome_squares_plus_one)
        self.assertNotIn(121, palindrome_squares_plus_one)

if __name__ == '__main__':


    unittest.main()
