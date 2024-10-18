import unittest
from forloop import for_loop_function

class TestForLoop(unittest.TestCase):

    def test_for_loop_breaks_after_5(self):
        expected_output = "1\n2\n3\n4\n5\n"
        with self.assertLogs() as captured:
            for_loop_function()
        self.assertEqual(captured.output, expected_output.split('\n')[:-1])

    def test_for_loop_does_not_print_6_to_10(self):
        with self.assertLogs() as captured:
            for_loop_function()
        self.assertNotIn("6", captured.output)
        self.assertNotIn("7", captured.output)
        self.assertNotIn("8", captured.output)
        self.assertNotIn("9", captured.output)
        self.assertNotIn("10", captured.output)

    def test_for_loop_prints_exactly_5_numbers(self):
        with self.assertLogs() as captured:
            for_loop_function()
        self.assertEqual(len(captured.output), 5)

if __name__ == '__main__':
    unittest.main()
