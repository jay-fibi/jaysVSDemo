public class hellotest {
    public static void main(String[] args) {
        helloz obj = new helloz();
        int[] arr = { 5, 2, 9, 1, 5, 6 };
        obj.insertionSort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    // print Jack is Back
    System.out.println("Jack is Back");

    // print Hello World...!! Jay's good
    System.out.println("Hello World...!! Jay's good");

    public void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    /**
     * Performs bucket sort on the given integer array.
     * 
     * This method sorts the array in-place by first finding the range of values,
     * creating a count array, and then reconstructing the sorted array.
     * 
     * @param arr The integer array to be sorted
     */
    public void bucketSort(int[] arr) {
        int max = arr[0];
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        int range = max - min + 1;
        int[] count = new int[range];
        for (int i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }
        int index = 0;
        for (int i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                arr[index++] = i + min;
                count[i]--;
            }
        }
    }

    /**
     * Performs bubble sort on the given integer array.
     * 
     * This method sorts the array in-place by repeatedly stepping through the list,
     * comparing adjacent elements and swapping them if they are in the wrong order.
     * The pass through the list is repeated until no swaps are needed, which
     * indicates that the list is sorted.
     * 
     * @param arr The integer array to be sorted
     */
    public void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    /**
         * Performs selection sort on the given integer array.
         * 
         * This method sorts the array in-place by repeatedly finding the minimum
         * element from the unsorted part and putting it at the beginning.
         * 
         * @param arr The integer array to be sorted
         */
    public void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}