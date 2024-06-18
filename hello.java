public class hello{
	public static void main(String[] args){
		System.out.println("Hello World");
	}

	public int add(int a, int b){
		return a + b;
	}

	public void selectionSort(int[] arr){
		for(int i = 0; i < arr.length; i++){
			int min = i;
			for(int j = i + 1; j < arr.length; j++){
				if(arr[j] < arr[min]){
					min = j;
				}
			}
			int temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
			System.out.println(arr[i]);
			System.out.println(arr[min]);
		}
	}

	public void insertionSort(int[] arr){
		for(int i = 1; i < arr.length; i++){
			int key = arr[i];
			int j = i - 1;
			while(j >= 0 && arr[j] > key){
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = key;
		}
	}

	public void bubbleSort(int[] arr){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < arr.length - i - 1; j++){
				if(arr[j] > arr[j + 1]){
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}
	
}