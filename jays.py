def jays():
    print("jay")

def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                arr = [64, 34, 25, 12, 22, 11, 90]

def insertionSort(arreyinh):
    """
    Sorts a list in ascending order using the insertion sort algorithm.

    Parameters:
    arreyinh (list): The list of elements to be sorted.

    Returns:
    None: The list is sorted in place.
    """

    for i in range(1, len(arreyinh)):
        key = arreyinh[i]
        j = i-1
        while j >= 0 and key < arreyinh[j]:
            arreyinh[j + 1] = arreyinh[j]
            j -= 1
        arreyinh[j + 1] = key



def selectionSort(arr):
    # Author: [Your Name]
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[min_idx] > arr[j]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    # The line below was incorrectly resetting the array; removed to prevent overwriting the sorted array
    # arr = [64, 25, 12, 22, 11]m,mmmmmm.,.,,..,,,.,.