import unittest
from adapter import Dog

class TestDog(unittest.TestCase):

    def test_dog_name(self):
        dog = Dog("Fido")
        self.assertEqual(dog.name, "Fido")

    def test_default_name(self):
        dog = Dog()
        self.assertEqual(dog.name, "")
