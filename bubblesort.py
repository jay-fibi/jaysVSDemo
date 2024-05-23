def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]


arr = [random.randint(0, 100) for i in range(7)]

"""Print each element in array arr to console after sorting.

This is used to visualize the array after it has been sorted by bubble_sort().
"""
bubble_sort(arr)
for i in range(len(arr)):
    print(arr[i])
