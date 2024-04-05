public class hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }

    public void mergeSort(){
        int[] arr = {5, 3, 6, 2, 10};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println("Sorted Array is: ");
        printArray(arr);
    }
}