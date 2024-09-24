public class hello{
    public static void main(String[] args){
        System.out.println("Hello World");
    }

    // print Jack is Back
    System.out.println("Jack is Back");

    // print Jay is a nice person..!
    System.out.println("Jay is a nice person..!");

    public void selectionSort(int[] arr){
        int n = arr.length;
        for(int i = 0; i < n - 1; i++){
            int minIndex = i;
            for(int j = i + 1; j < n; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    public void bubbleSort(int[] arr){
        int n = arr.length;
        for(int i = 0; i < n - 1; i++){
            for(int j = 0; j < n - i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    public void insertionSort(int[] arr){
        int n = arr.length;
        for(int i = 1; i < n; i++){
            int key = arr[i];
            int j = i - 1;
            while(j >= 0 && arr[j] > key){
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
    public void mergeSort(int[] arr){
        int n = arr.length;
        if(n < 2){
            return;
        }
        int mid = n / 2;
        int[] left = new int[mid];
        int[] right = new int[n - mid];
        for(int i = 0; i < mid; i++){
            left[i] = arr[i];
        }
        for(int i = mid; i < n; i++){
            right[i - mid] = arr[i];
        }
        mergeSort(left);
        mergeSort(right);
}
