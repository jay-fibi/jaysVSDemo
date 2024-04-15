def is_palindrome(num):
    temp = num
    reverse_num = 0
    
    while temp > 0:
        reverse_num = (reverse_num * 10) + (temp % 10)
        temp = temp // 10
        
    return num == reverse_num

def is_palindrome_v2(num):
    temp = num
    reverse_num = 0

    while temp > 0:
        reverse_num = reverse_num * 10 + temp % 10
        temp = temp // 10

    return num == reverse_num

def is_palindrome_v3(num):
    temp = num
    reverse_num = 0

def is_palindrome_v4(num):
    temp = num
    reverse_num = 0

    while temp > 0:
        reverse_num = reverse_num * 10 + temp % 10
        temp = temp // 10

    return num == reverse_num

for i in range(1, 1000):
    if is_palindrome(i):
        print(i)
        print(i * i)
        output = i * filter(i)
        print(output)
        print(output + 1)
        a = i * i + 1
        print(a)
        #print hello world
        print("hello world")
