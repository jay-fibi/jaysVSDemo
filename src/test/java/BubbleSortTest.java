import org.junit.Test;
import static org.junit.Assert.*;

public class BubbleSortTest {

    @Test
    public void testEmptyArray() {
        int[] arr = {};
        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);
        assertEquals(0, arr.length);
    }

    @Test
    public void testSingleElement() {
        int[] arr = {1};
        int[] expected = {1};
        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testSortedArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int[] expected = {1, 2, 3, 4, 5};
        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testReverseSortedArray() {
        int[] arr = {5, 4, 3, 2, 1};
        int[] expected = {1, 2, 3, 4, 5};
        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testArrayWithDuplicates() {
        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3};
        int[] expected = {1, 1, 2, 3, 3, 4, 5, 5, 6, 9};
        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testNegativeNumbers() {
        int[] arr = {-5, -2, -8, -1, -9};
        int[] expected = {-9, -8, -5, -2, -1};
        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);
        assertArrayEquals(expected, arr);
    }
}
