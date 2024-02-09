import random

# Generate a random number between 10 to 20
rand_digit = random.randint(10, 20)

# List of alphabets
alphabets = ['A','B','C','D','E','F','G','H','I','J']

# Select random alphabet
rand_alpha = random.choice(alphabets)

# Print output 
print(str(rand_digit) + rand_alpha)
