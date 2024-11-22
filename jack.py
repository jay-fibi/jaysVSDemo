import org.junit.Test;
import static org.junit.Assert.*;

public class HelloTest {

    @Test
    public void testBubbleSort() {
        hello h = new hello();
        int[] arr = {5, 2, 8, 12, 1, 6};
        int[] expected = {1, 2, 5, 6, 8, 12};
        h.bubbleSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSort() {
        hello h = new hello();
        int[] arr = {9, 3, 7, 1, 5, 4};
        int[] expected = {1, 3, 4, 5, 7, 9};
        h.insertionSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testSelectionSort() {
        hello h = new hello();
        int[] arr = {64, 25, 12, 22, 11};
        int[] expected = {11, 12, 22, 25, 64};
        h.selectionSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testMergeSort() {
        hello h = new hello();
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        int[] expected = {3, 9, 10, 27, 38, 43, 82};
        h.mergeSort(arr);
        assertArrayEquals(expected, arr);
    }
}