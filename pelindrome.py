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

def mergeSort(arr):
    if len(arr) > 1:    mid = len(arr) // 2


L = arr[:mid]
R = arr[mid:]

mergeSort(L)
mergeSort(R)

i = j = k = 0

while i < len(L) and j < len(R):
    if L[i] < R[j]:
        arr[k] = L[i]
        i += 1
    else:
        arr[k] = R[j]
        j += 1

