public class hello{
    public class BubbleSort {
        public static void bubbleSort(int[] arr) {
            int n = arr.length;
            boolean swapped;
            /**
             * Performs a single pass of the bubble sort algorithm on the given array.
             * This method compares adjacent elements and swaps them if they are in the wrong order.
             * The method continues to pass through the array until no swaps are needed, indicating the array is sorted.
             *
             * @param arr the array to be sorted
             * @param n the length of the array
             */
            for (int i = 0; i < n - 1; i++) {
                swapped = false;
                for (int j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        // Swap arr[j] and arr[j + 1]
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        swapped = true;
                    }
                }
                // If no two elements were swapped by inner loop, then break
                if (!swapped) break;
            }
        }

        public static void main(String[] args) {
            int[] arr = {64, 34, 25, 12, 22, 11, 90};
            System.out.println("Unsorted array:");
        }
}