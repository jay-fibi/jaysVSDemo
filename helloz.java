public class helloz {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }

    // print Jack is Back
    System.out.println("Jack is Back");

    // print Hello, World! Jack..
    System.out.println("Hello, World! Jack..");

    /**
     * Sorts an integer array using insertion sort algorithm.
     *
     * @param arr The integer array to be sorted.
     */
    public void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }


    /**
     * Sorts an integer array using selection sort algorithm
     * @param arr The integer array to be sorted
     * @throws IllegalArgumentException if array is null or empty
     */
    public void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min_idx = i;
            for (int j = i + 1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}