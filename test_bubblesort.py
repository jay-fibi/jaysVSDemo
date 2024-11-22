import unittest
from bubblesort import bubble_sort

class TestBubbleSort(unittest.TestCase):

    def test_sorted(self):
        arr = [64, 34, 25, 12, 22, 11, 90]
        expected = [11, 12, 22, 25, 34, 64, 90]
        bubble_sort(arr)
        self.assertEqual(arr, expected)

    def test_reverse_sorted(self):
        arr = [90, 64, 34, 25, 22, 12, 11]
        expected = [11, 12, 22, 25, 34, 64, 90]
        bubble_sort(arr)
        self.assertEqual(arr, expected)

    def test_duplicate_elements(self):
        arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1] 
        expected = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        bubble_sort(arr)
        self.assertEqual(arr, expected)

    def test_empty_list(self):
        arr = []
        expected = []
        bubble_sort(arr)


