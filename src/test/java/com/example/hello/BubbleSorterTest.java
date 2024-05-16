<import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class BubbleSorterTest {

    @Test
    public void testBubbleSorterWithUnsortedArray() {
        int[] arr = {5, 3, 8, 4, 2};
        int[] expected = {2, 3, 4, 5, 8};
        new Hello().bubbleSorter(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSorterWithSortedArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int[] expected = {1, 2, 3, 4, 5};
        new Hello().bubbleSorter(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSorterWithReverseSortedArray() {
        int[] arr = {5, 4, 3, 2, 1};
        int[] expected = {1, 2, 3, 4, 5};
        new Hello().bubbleSorter(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSorterWithAllEqualElements() {
        int[] arr = {2, 2, 2, 2, 2};
        int[] expected = {2, 2, 2, 2, 2};
        new Hello().bubbleSorter(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSorterWithSingleElement() {
        int[] arr = {1};
        int[] expected = {1};
        new Hello().bubbleSorter(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testBubbleSorterWithEmptyArray() {
        int[] arr = {};
        int[] expected = {};
        new Hello().bubbleSorter(arr);
        assertArrayEquals(expected, arr);
    }
}
