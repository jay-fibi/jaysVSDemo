import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SortTest {

    @Test
    void testInsertionSortEmptyArray() {
        int[] arr = {};
        new Sort().insertionSort(arr);
        assertArrayEquals(new int[]{}, arr);
    }

    @Test
    void testInsertionSortSingleElement() {
        int[] arr = {5};
        new Sort().insertionSort(arr);
        assertArrayEquals(new int[]{5}, arr);
    }

    @Test
    void testInsertionSortSortedArray() {
        int[] arr = {1, 2, 3, 4, 5};
        new Sort().insertionSort(arr);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, arr);
    }

    @Test
    void testInsertionSortReverseSortedArray() {
        int[] arr = {5, 4, 3, 2, 1};
        new Sort().insertionSort(arr);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, arr);
    }

    @Test
    void testInsertionSortRandomArray() {
        int[] arr = {9, 5, 2, 7, 1, 3, 8, 4, 6};
        int[] expected = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        new Sort().insertionSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    void testInsertionSortDuplicateElements() {
        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5};
        int[] expected = {1, 1, 2, 3, 4, 5, 5, 6, 9};
        new Sort().insertionSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    void testInsertionSortNegativeElements() {
        int[] arr = {-5, 2, -1, 0, 7, -3};
        int[] expected = {-5, -3, -1, 0, 2, 7};
        new Sort().insertionSort(arr);
        assertArrayEquals(expected, arr);
    }
}
