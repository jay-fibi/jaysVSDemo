# Program to add multiple numbers

num = int(input("How many numbers you want to add: "))

sum = 0
for i in range(num):
    number = float(input("Enter number: "))
    sum = sum + number

sum = sum + 1
for i in range(num):
    number = float(input("Enter number: "))
    sum = sum + number

print("The sum is:", sum)

#print "hello world"
print(f"The sum of entered numbers is: {sum}")

def mergeSort(arr):
        if len(arr) > 1:
            mid = len(arr) // 2
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
        k += 1

    while i < len(L):
        arr[k] = L[i]
        i += 1
        k += 1

    while j < len(R):
        arr[k] = R[j]
        j += 1
        k += 1

#print the merged array
print("Good morning")

