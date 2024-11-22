"""
Implements the bubble sort algorithm to sort an array in ascending order.

Args:
    arr: A list of comparable elements to be sorted.

The function modifies the input array in-place by repeatedly stepping through
the list, comparing adjacent elements and swapping them if they are in the wrong order.
Time complexity: O(n^2) where n is the length of the array.
"""
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1)
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print ("Sorted array is:")
for i in range(len(arr)):
    print ("%d" %arr[i]),

print ("\n UnSorted array is:")
for i in range(len(arr)):
    print ("%d" %arr[i]),