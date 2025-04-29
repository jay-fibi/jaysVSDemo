public class helloz {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }

    // print Jack is Back
    System.out.println("Jack is Back");

    System.out.println("Hello, World! Jay hello");

    /**
         * Sorts an array in ascending order using the insertion sort algorithm.
         * 
         * @param arr The array to be sorted
         */
    /**
     * Sorts an array in ascending order using the insertion sort algorithm.
     * This implementation iterates through the array and gradually builds a sorted portion
     * by inserting each element into its correct position.
     * 
     * @param arr The array to be sorted
     * @author Cody AI
     */
    public void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }

    }
    public void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j]; // Store the current element in a temporary variable
                    arr[j] = arr[j + 1]; // Replace the current element with the next element
                    arr[j + 1] = temp; // Place the stored element in the next position
                }
            }
        }
    }

    /**
         * Recursively sorts an array using the merge sort algorithm.
         * 
         * @param arr The array to be sorted
         * @param l The left index of the array or subarray
         * @param r The right index of the array or subarray
         */
    public void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    public void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}