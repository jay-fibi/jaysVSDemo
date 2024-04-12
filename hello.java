public class hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }

    public void bubbleSort() {
        int[] arr = {5, 2, 8, 1, 9};
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                }
            }
        }
    }

    public void mergeSort(int[] arr) {
        if (arr.length > 1) {
            int mid = arr.length / 2;
            int[] left = new int[mid];
            int[] right = new int[arr.length - mid];

            for (int i = 0; i < mid; i++) {
                left[i] = arr[i];
            }
        }
    }
}
