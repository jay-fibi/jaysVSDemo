import unittest
from frozen import frozen_set

class TestFrozenSet(unittest.TestCase):

    def test_frozen_set_immutable(self):
        with self.assertRaises(AttributeError):
            frozen_set.add("h")

    def test_frozen_set_hashable(self):
        test_dict = {frozen_set: "hashable"}
        self.assertIn(frozen_set, test_dict)

    def test_frozen_set_elements(self):
        self.assertSetEqual(frozen_set, {"e", "f", "g"})

    def test_frozen_set_empty(self):
        empty_frozen_set = frozenset()
        self.assertEqual(len(empty_frozen_set), 0)

if __name__ == '__main__':

    unittest.main()
