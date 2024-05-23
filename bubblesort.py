def bubble_sort(arr):
    n = len(arr)

    """Bubble sort implementation.

This nested loop iterates through the array, comparing 
adjacent elements and swapping them if they are not
in order. This continues until the array is fully sorted."""


for i in range(n):
    for j in range(0, n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]


arr = [random.randint(0, 100) for i in range(7)]

"""Print each element in array arr to console after sorting.

This is used to visualize the array after it has been sorted by bubble_sort().
"""
bubble_sort(arr)
for i in range(len(arr)):
    print(arr[i])
