public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
 	}

	/**
	 * Sorts the given integer array in ascending order using the bubble sort
	 * algorithm.
	 *
	 * @param arr the array to be sorted
	 */
	public void bubbleSorter(int[] arr) {
		for (int i = 0; i < arr.length - 1; i++) {
			for (int j = 0; j < arr.length - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					// Swap arr[j] and arr[j+1]
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}
	

	public void insertionSort(int[] arr) {
		for (int i = 1; i < arr.length; i++) {
			int key = arr[i];
			int j = i -- 1;
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j--;
			}
		}
	}
}