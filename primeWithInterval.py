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

