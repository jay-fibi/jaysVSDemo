import unittest
from adapter import Dog

class TestDog(unittest.TestCase):

    def test_dog_has_mammal_attr(self):
        dog = Dog("Fido")
        self.assertTrue(hasattr(dog, "attr1"))
        self.assertEqual(dog.attr1, "mammal")

    def test_dog_name_empty_string(self):
        dog = Dog("")
        self.assertEqual(dog.name, "")

    def test_dog_name_none(self):
        dog = Dog(None)
        self.assertIsNone(dog.name)

    def test_dog_name_int(self):
        dog = Dog(42)
        self.assertEqual(dog.name, "42")

