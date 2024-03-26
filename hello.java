public class hello{
	public static void main(String[] args){
		System.out.println("hello world");
	}

	public void mergeSort(int[] arr, int left, int mid, int right){
		int i = left;
		int j = mid + 1;
		int[] temp = new int[right - left + 1];
		int k = 0;
		while(i <= mid && j <= right){
			if(arr[i] <= arr[j]){
				temp[k++] = arr[i++];
			}else
			temp[k++] = arr[j++];
			System.out.println(Arrays.toString(temp));
			System.out.println(Arrays.toString(arr));
			System.out.println("i: " + i + " j: " + j);
			System.out.println("k: " + k);
			System.out.println("left: " + left + " mid: " + mid + " right: " + right);
			System.out.println("=====================");
			System.out.println();
			System.out.println();
			System.out.println();
			System.out.println();
			System.out.println();
		}

	while(i <= mid){
			temp[k++] = arr[i++];
		}
		while(j <= right){
			temp[k++] = arr[j++];
		}
	}
}