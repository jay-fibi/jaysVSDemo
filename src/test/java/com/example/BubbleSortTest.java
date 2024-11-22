import org.junit.Test;
import static org.junit.Assert.*;

public class BubbleSortTest {

    @Test
    public void testBubbleSortWithUnsortedArray() {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        int[] expected = {11, 12, 22, 25, 34, 64, 90};

        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);

        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSortWithSortedArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int[] expected = {1, 2, 3, 4, 5};

        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);

        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSortWithReverseSortedArray() {
        int[] arr = {5, 4, 3, 2, 1};
        int[] expected = {1, 2, 3, 4, 5};

        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);

        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSortWithEmptyArray() {
        int[] arr = {};
        int[] expected = {};

        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);

        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSortWithSingleElementArray() {
        int[] arr = {42};
        int[] expected = {42};

        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);

        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSortWithDuplicateElements() {
        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
        int[] expected = {1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9};

        BubbleSort sorter = new BubbleSort();
        sorter.bubbleSort(arr);

        assertArrayEquals(expected, arr);
    }
}
