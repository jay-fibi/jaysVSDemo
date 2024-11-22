import unittest
from mymodule import my_function

class TestMyFunction(unittest.TestCase):

    def test_basic(self):
        result = my_function(1, 2)
        self.assertEqual(result, 3)

    def test_zero(self):
        result = my_function(0, 5)
        self.assertEqual(result, 5)

    def test_negative(self):
        result = my_function(-1, 3)
        self.assertEqual(result, 2)

if __name__ == '__main__':

class TestMultipleAdd(unittest.TestCase):

    def test_multiple_add_empty_lists(self):
        L = []
        arr = []
        k = 0
        i = 0
        while i < len(L):
            arr.append(L[i])
            i += 1
            k += 1
        self.assertEqual(arr, [])
        self.assertEqual(k, 0)

    def test_multiple_add_single_element(self):
        L = [5]
        arr = [0]
        k = 0
        i = 0
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        self.assertEqual(arr, [5])
        self.assertEqual(k, 1)

    def test_multiple_add_multiple_elements(self):
        L = [1, 2, 3]
        arr = [0, 0, 0]
        k = 0
        i = 0
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        self.assertEqual(arr, [1, 2, 3])
        self.assertEqual(k, 3)

    def test_multiple_add_partial_fill(self):
        L = [7, 8]
        arr = [0, 0, 0, 0]
        k = 1
        i = 0
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        self.assertEqual(arr, [0, 7, 8, 0])
        self.assertEqual(k, 3)

    def test_multiple_add_larger_source(self):
        L = [1, 2, 3, 4, 5]
        arr = [0, 0, 0]
        k = 0
        i = 0
        while i < len(L) and k < len(arr):
            arr[k] = L[i]
            i += 1
            k += 1
        self.assertEqual(arr, [1, 2, 3])
        self.assertEqual(k, 3)
        self.assertEqual(i, 3)
    unittest.main()
