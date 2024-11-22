import unittest

class TestExample(unittest.TestCase):
    def test_addition(self):
        result = 1 + 1
        self.assertEqual(result, 2)

    def test_string(self):
        text = "Hello World"
        self.assertEqual(text, "Hello World")
        self.assertTrue(len(text) > 0)

if __name__ == '__main__':
    unittest.main()
