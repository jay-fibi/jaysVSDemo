def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]

arr = [64, 34, 25, 12, 22, 11, 90]

bubble_sort(arr)

"""
Prints the sorted and unsorted versions of the given array `arr`.

Args:
    arr (list): The array to be printed in sorted and unsorted order.
"""
print("Sorted array is:")
for i in range(len(arr)):
    print("%d" % arr[i]),

print("\n UnSorted array is:")
for i in range(len(arr)):
    print("%d" % arr[i]),
