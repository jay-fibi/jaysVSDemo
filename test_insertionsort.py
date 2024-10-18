import unittest
from helloworld import insertionSort

class TestInsertionSort(unittest.TestCase):

    def test_already_sorted(self):
        arr = [1, 2, 3, 4, 5]
        expected = [1, 2, 3, 4, 5]
        insertionSort(arr)
        self.assertEqual(arr, expected)

    def test_reverse_sorted(self):
        arr = [5, 4, 3, 2, 1]
        expected = [1, 2, 3, 4, 5]
        insertionSort(arr)
        self.assertEqual(arr, expected)

    def test_single_element(self):
        arr = [1]
        expected = [1]
        insertionSort(arr)
        self.assertEqual(arr, expected)

    def test_duplicate_elements(self):
        arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
        expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
        insertionSort(arr)
        self.assertEqual(arr, expected)

    def test_negative_numbers(self):
        arr = [-4, 0, 5, -2, 3, -1]
        expected = [-4, -2, -1, 0, 3, 5]
        insertionSort(arr)
        self.assertEqual(arr, expected)

    def test_empty_list(self):
        arr = []
        expected = []
        insertionSort(arr)
        self.assertEqual(arr, expected)

if __name__ == '__main__':
    unittest.main()
