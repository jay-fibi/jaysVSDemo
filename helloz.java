public class helloz {
    public static void main(String[] args) {
        System.out.println("hello world");
    }

    // print Jack is Back
    System.out.println("Jack is Back");

    // print Jay is a nice person..!!
    System.out.println("Jay is a nice person..!!");

    import org.junit.Test;
    import static org.junit.Assert.*;
    
    public class BubbleSortTest {
        @Test
        public void testBubbleSort() {
            helloz sorter = new helloz();
            
            // Test case 1: Normal unsorted array
            int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
            sorter.bubbleSort(arr1);
            int[] expected1 = {11, 12, 22, 25, 34, 64, 90};
            assertArrayEquals(expected1, arr1);
            
            // Test case 2: Already sorted array
            int[] arr2 = {1, 2, 3, 4, 5};
            sorter.bubbleSort(arr2);
            int[] expected2 = {1, 2, 3, 4, 5};
            assertArrayEquals(expected2, arr2);
            
            // Test case 3: Reverse sorted array
            int[] arr3 = {5, 4, 3, 2, 1};
            sorter.bubbleSort(arr3);
            int[] expected3 = {1, 2, 3, 4, 5};
            assertArrayEquals(expected3, arr3);
            
            // Test case 4: Array with duplicate elements
            int[] arr4 = {3, 1, 4, 1, 5, 9, 2, 6, 5};
            sorter.bubbleSort(arr4);
            int[] expected4 = {1, 1, 2, 3, 4, 5, 5, 6, 9};
            assertArrayEquals(expected4, arr4);
            
            // Test case 5: Empty array
            int[] arr5 = {};
            sorter.bubbleSort(arr5);
            int[] expected5 = {};
            assertArrayEquals(expected5, arr5);
        }
    }
    public void bubbleSort(int[] arring) {
        int n = arring.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arring[j] > arring[j + 1]) {
                    int temp = arring[j];
                    arring[j] = arring[j + 1];
                    arring[j + 1] = temp;
                }
            }
        }
    }

    public String cool(){
        return "Jay is a cool guy";
    }
}