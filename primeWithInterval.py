import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def prime(x, y):
	prime_list = []
	for i in range(x, y):
		if i == 0 or i == 1:
			continue
		else:
			for j in range(2, int(i/2)+1):
				if i % j == 0:
					break
			else:
				prime_list.append(i)
	logging.info(f"Generated prime numbers: {prime_list}")
	return prime_list

# Driver program
starting_range = 0
ending_range = 20
logging.info(f"Starting prime number generation from {starting_range} to {ending_range}")
lst = prime(starting_range, ending_range)
if len(lst) == 0:
	logging.warning("There are no prime numbers in this range")
	print("There are no prime numbers in this range")
else:
	logging.info(f"Prime numbers found: {lst}")
	print("The prime numbers in this range are: ", lst)

import unittest
from unittest.mock import patch
import primeWithInterval

class TestPrimeFunctions(unittest.TestCase):

	@patch('primeWithInterval.print')
	@patch('primeWithInterval.logging')
	def test_prime_with_interval(self, mock_logging, mock_print):
		# Test empty list
		lst = []
		primeWithInterval.prime_with_interval(lst)
		mock_logging.warning.assert_called_with("There are no prime numbers in this range")
		mock_print.assert_called_with("There are no prime numbers in this range")

		# Test normal case
		lst = [2, 3, 5, 7, 11, 13]
		primeWithInterval.prime_with_interval(lst)
		mock_logging.info.assert_called_with("Prime numbers found: [2, 3, 5, 7, 11, 13]")
		mock_print.assert_called_with("The prime numbers in this range are: ", lst)

		# Test edge case
		lst = [1, 4, 6, 8, 9]
		primeWithInterval.prime_with_interval(lst)
		mock_logging.warning.assert_called_with("There are no prime numbers in this range")
		mock_print.assert_called_with("There are no prime numbers in this range")

if __name__ == '__main__':
	unittest.main()


import unittest
from unittest.mock import patch
import primeWithInterval

class TestPrimeFunctions(unittest.TestCase):

    @patch('primeWithInterval.print')
    @patch('primeWithInterval.logging')
    def test_prime_with_interval(self, mock_logging, mock_print):
        # Test empty list
        lst = []
        primeWithInterval.prime_with_interval(lst)
        mock_logging.warning.assert_called_with("There are no prime numbers in this range")
        mock_print.assert_called_with("There are no prime numbers in this range")

        # Test normal case
        lst = [2, 3, 5, 7, 11, 13]
        primeWithInterval.prime_with_interval(lst)
        mock_logging.info.assert_called_with("Prime numbers found: [2, 3, 5, 7, 11, 13]")
        mock_print.assert_called_with("The prime numbers in this range are: ", lst)

        # Test edge case
        lst = [1, 4, 6, 8, 9]
        primeWithInterval.prime_with_interval(lst)
        mock_logging.warning.assert_called_with("There are no prime numbers in this range")
        mock_print.assert_called_with("There are no prime numbers in this range")

if __name__ == '__main__':
    unittest.main()

