public class hello {
	public static void main(String[] args) {
		System.out.println("Hello World");
	}

public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }

    
}

    /**
     * Sorts the given array using the insertion sort algorithm.
     * Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
     * It iterates through the array, taking each element in turn, and inserting it into its correct position
     * in the sorted portion of the array.
     *
     * @param arr the array to be sorted
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
            System.out.println(Arrays.toString(arr));
            System.out.println();
            System.out.println();
            System.out.println();
            System.out.println();
        }
    }

    public void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int min_idx = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[min_idx] > arr[j]) {
                    min_idx = j;
                }
            }
        }
    }

    public void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
}