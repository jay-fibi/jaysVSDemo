public class hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }

    public void printHello(String... args) {
        if (args.length == 0) {
            System.out.println("Hello World");
        } else if (args.length == 1) {
            System.out.println("Hello " + args[0]);
        } else if (args.length == 2) {
            System.out.println("Hello " + args[0] + " " + args[1]);
        } else if (args.length == 3) {
            System.out.println("Hello " + args[0] + " " + args[1] + " " + args[2]);
        }
    }


    /**
     * Sorts the given integer array in-place using the bubble sort algorithm.
     *
     * Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
     *
     * @param arr the integer array to be sorted
     */
    public void bubbleSort(int[] arr) {
        boolean swapped;
        int n = arr.length;
        do {
            swapped = false;
            for (int i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            n--;
        } while (swapped);
    }

}