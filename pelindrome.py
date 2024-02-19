def is_palindrome(num):
    temp = num
    reverse_num = 0
    
    while temp > 0:
        reverse_num = (reverse_num * 10) + (temp % 10)
        temp = temp // 10
        
    return num == reverse_num

for i in range(1, 1000):
    if is_palindrome(i):
        print(i)
        print(i * i)