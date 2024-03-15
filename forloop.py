# Print numbers from 1 to 10 using a for loop
for i in range(1, 11):
    print(i)

# Print each character in a string
my_string = "Hello World"
for char in my_string:
    print(char)

# Print numbers from 1 to 10 skipping 5
for i in range(1, 11):
    if i == 5:
        continue
    print(i)

# Print numbers from 1 to 10 stopping at 5
for i in range(1, 11):
    if i > 5:
        break
    print(i)

# Print numbers from 1 to 10 and t
import unittest
from forloop import my_string, print_char

class TestForLoop(unittest.TestCase):

    def test_print_char(self):
        # Test printing each char in a string
        my_string = "Hello World"
        expected = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
        for i, char in enumerate(my_string):
            print_char(char)
            self.assertEqual(char, expected[i])

    def test_print_char_empty(self):
        # Test printing chars in an empty string
        my_string = ""
        print_char(my_string)
        self.assertFalse(my_string)

if __name__ == '__main__':
    unittest.main()
