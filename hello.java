public class hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }

    // print Good night
    System.out.println("Good night");

    // print Hello
    System.out.print("Hello");

    public void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
                arr[j + 1] = key;
                System.out.println(Arrays.toString(arr));
                // print Hello
                System.out.print("Hello");
                // print Good night
                System.out.println("Good night");
                // print Good night
                System.out.println("Good night");
            }
        }
    }

    /**
     * Sorts the given array in ascending order using the selection sort algorithm.
     *
     * @param arr the array to be sorted
     */
    public void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min_idx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] >= arr[min_idx]) {
                    continue;
                }
                min_idx = j;

            }
        }
    }
}