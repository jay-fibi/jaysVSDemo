# Program to add multiple numbers

num = int(input("How many numbers you want to add: "))

sum = 0
for i in range(num):
    number = float(input("Enter number: "))
    sum = sum + number


print("The sum is:", sum)
