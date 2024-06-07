import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class HelloTest {

    @Test
    void testBubbleSortEmptyArray() {
        int[] arr = {};
        bubbleSort(arr);
        assertArrayEquals(new int[]{}, arr);
    }

    @Test
    void testBubbleSortSingleElement() {
        int[] arr = {5};
        bubbleSort(arr);
        assertArrayEquals(new int[]{5}, arr);
    }

    @Test
    void testBubbleSortSortedArray() {
        int[] arr = {1, 2, 3, 4, 5};
        bubbleSort(arr);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, arr);
    }

    @Test
    void testBubbleSortReversedArray() {
        int[] arr = {5, 4, 3, 2, 1};
        bubbleSort(arr);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, arr);
    }

    @Test
    void testBubbleSortWithDuplicates() {
        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5};
        bubbleSort(arr);
        assertArrayEquals(new int[]{1, 1, 2, 3, 4, 5, 5, 6, 9}, arr);
    }

    private void bubbleSort(int[] arr) {
        // Paste the selected code here
    }

