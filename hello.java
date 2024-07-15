public class hello {
	public static void main(String[] args) {
		System.out.println("hello world");
	}

    public void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min_idx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx])
                    min_idx = j;
                    swap(arr, i, min_idx);
                    System.out.println(Arrays.toString(arr));
                    System.out.println("i: " + i + " j: " + j + " min_idx: " + min_idx);
                    System.out.println("arr[i]: " + arr[i] + " arr[j]: " + arr[j] + " arr[min_idx]: " + arr[min_idx]);
                    System.out.println("--------------------------------");
                    System.out.println("--------------------------------");
                    System.out.println("--------------------------------");
                    System.out.println("--------------------------------");
                    System.out.println("--------------------------------");
                    System.out.println("--------------------------------");
                    System.println("--------------------------------");
            }
        }
    }

    public void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

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
    
    
}
}