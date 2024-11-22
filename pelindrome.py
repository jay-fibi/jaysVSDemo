def is_palindrome(num):
    temp = num
    reverse_num = 0
    
    while temp > 0:
        reverse_num = (reverse_num * 10) + (temp % 10)
        temp = temp // 10

    return num == reverse_num

"""
Iterates through the range of integers from 1 to 999 (inclusive) and performs various operations on each number.
"""
for i in range(1, 1000):
    if is_palindrome(i):
                if is_palindrome(i):
            print(i)
            print(i * i)
            output = i * i
            print(output)
            print(output + 1)
            a = i * i + 1
            print(a)
            print("hello world")
