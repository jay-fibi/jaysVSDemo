#birth_year = input("Enter your birth year: ")
#age = 2024 - int(birth_year)
#print(age)

first = input("Enter first number: ")
second = input("Enter second number: ")
#sum = int(first) + int(second)

try:
    if '.' in first or '.' in second:
        sum = float(first) + float(second)
    else:
        sum = int(first) + int(second)
except ValueError:
    print("Invalid input. Please enter valid numbers.")
    exit()

print("Sum: " + str(sum))
