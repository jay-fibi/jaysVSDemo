public class hello{
    public static void main(String[] args){
        System.out.println("Hello World");
    }

    // print Jack is Back
    System.out.println("Jack is Back");

    // print Jay is a good person..!!
    System.out.println("Jay is a good person..!!");

    public void bubbleSortt(int[] arr){
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

    /**
         * Sorts an integer array using the selection sort algorithm.
         * 
         * @param arr The input array to be sorted in-place
         */
    public void selectionSort(int[] arr){
        for(int i = 0; i < arr.length; i++){
            int minIndex = i;
            for(int j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}