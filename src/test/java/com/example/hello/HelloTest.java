import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class HelloTest {

    @Test
    void testInsertionSort() {
        int[] arr = {5, 2, 4, 6, 1, 3};
        HelloClass.insertionSort(arr);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5, 6}, arr);
    }

    @Test
    void testInsertionSortWithAlreadySortedArray() {
        int[] arr = {1, 2, 3, 4, 5, 6};
        HelloClass.insertionSort(arr);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5, 6}, arr);
    }

    @Test
    void testInsertionSortWithSingleElementArray() {
        int[] arr = {5};
        HelloClass.insertionSort(arr);
        assertArrayEquals(new int[]{5}, arr);
    }

    @Test
    void testInsertionSortWithEmptyArray() {
        int[] arr = {};
        HelloClass.insertionSort(arr);
        assertArrayEquals(new int[]{}, arr);
    }
}
