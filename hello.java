public class hello{
    public static void main(String[] args){
        System.out.println("Hello World");
    }

    // print Jack is Back
    System.out.println("Jack is Back");

    // print Jay is a nice person..!!
    System.out.println("Jay is a nice person..!!");

    public void selectionSort(int[] arr){
        for(int i=0; i<arr.length; i++){
            int min = i;
            for(int j=i+1; j<arr.length; j++){
                if(arr[j] < arr[min]){
                    min = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    /**
     * Performs bubble sort on the given integer array.
     * Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
     * compares adjacent elements and swaps them if they are in the wrong order.
     *
     * @param arr The integer array to be sorted
     * @author Cody (AI Assistant)
     */
    public void bubbleSort(int[] arr){
        // Iterate through the array for the number of elements
        for(int i=0; i<arr.length; i++){
            // Iterate through the unsorted portion of the array
            for(int j=0; j<arr.length-i-1; j++){
                // If the current element is greater than the next element
                if(arr[j] > arr[j+1]){
                    // Swap the current element with the next element
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
}