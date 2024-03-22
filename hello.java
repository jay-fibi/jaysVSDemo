public class hello{
	public static void main(String argsp[]){
		System.out.println("Hello WOrld");
	}
	/**
	 * bubbleSort sorts the given integer array using the bubble sort algorithm.
	 * It iterates through the array multiple times, swapping adjacent elements if
	 * they are out of order, until the array is sorted.
	 */
	public void bubbleSort(int[] array) {
		int n = array.length;
		for (int i = 0; i < n; i++) {
			for (int j = 1; j < (n - i); j++) {
				if (array[j - 1] > array[j]) {
					// swap temp and array[j]
					int temp = array[j - 1];
					array[j - 1] = array[j];
					array[j] = temp;
				}
			}
		}
	}
	public void selectionSort(int[] array) {
		int n = array.length;
		for (int i = 0; i < n; i++) {
			int min_idx = i;
			for (int j = i + 1; j < n; j++) {
				if (array[min_idx] > array[j])
					min_idx = j;
			}
			// swap array[i] and array[min_idx]
			int temp = array[i];
			array[i] = array[min_idx];
			array[min_idx] = temp;
			System.out.println("hello good morning");
			System.out.println(array[i]);
			System.out.println(array[min_idx]);
			System.out.println("hello good night");
			System.out.println("hello good night");
			System.out.println("hello good night");
	}
}