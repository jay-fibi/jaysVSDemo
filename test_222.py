import unittest
from 222 import *

class TestWhileLoop(unittest.TestCase):

    def test_no_skip_letters(self):
        a = "abcd"
        expected_output = ["Current Letter : a", "Current Letter : b", "Current Letter : c", "Current Letter : d"]
        with self.captureStdout() as output:
            i = 0
            while i < len(a):
                if a[i] == 'e' or a[i] == 's':
                    i += 1
                    continue
                print('Current Letter :', a[i])
                i += 1
        self.assertEqual(output.getvalue().strip().split("\n"), expected_output)

    def test_skip_e_and_s(self):
        a = "testes"
        expected_output = ["Current Letter : t", "Current Letter : t"]
        with self.captureStdout() as output:
            i = 0
            while i < len(a):
                if a[i] == 'e' or a[i] == 's':
                    i += 1
                    continue
                print('Current Letter :', a[i])
                i += 1
        self.assertEqual(output.getvalue().strip().split("\n"), expected_output)

    def test_empty_string(self):
        a = ""
        expected_output = []
        with self.captureStdout() as output:
            i = 0
            while i < len(a):
                if a[i] == 'e' or a[i] == 's':
                    i += 1
                    continue
                print('Current Letter :', a[i])
                i += 1
        self.assertEqual(output.getvalue().strip().split("\n"), expected_output)

    def test_all_skip_letters(self):
        a = "eseses"
        expected_output = []
        with self.captureStdout() as output:
            i = 0
            while i < len(a):
                if a[i] == 'e' or a[i] == 's':
                    i += 1
                    continue
                print('Current Letter :', a[i])
                i += 1
        self.assertEqual(output.getvalue().strip().split("\n"), expected_output)

if __name__ == '__main__':
    unittest.main()
