import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class InsertionSortTest {

    @Test
    public void testInsertionSortEmptyArray() {
        int[] arr = {};
        int[] expected = {};
        insertionSort(arr);
        Assertions.assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortSingleElementArray() {
        int[] arr = {5};
        int[] expected = {5};
        insertionSort(arr);
        Assertions.assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortSortedArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int[] expected = {1, 2, 3, 4, 5};
        insertionSort(arr);
        Assertions.assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortReverseSortedArray() {
        int[] arr = {5, 4, 3, 2, 1};
        int[] expected = {1, 2, 3, 4, 5};
        insertionSort(arr);
        Assertions.assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortRandomArray() {
        int[] arr = {9, 5, 3, 7, 1, 8, 2, 6, 4};
        int[] expected = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        insertionSort(arr);
        Assertions.assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortDuplicateElements() {
        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5};
        int[] expected = {1, 1, 2, 3, 4, 5, 5, 6, 9};
        insertionSort(arr);
        Assertions.assertArrayEquals(expected, arr);
    }

    private void insertionSort(int[] arr) {
        // Implementation of insertionSort method goes here
    }

