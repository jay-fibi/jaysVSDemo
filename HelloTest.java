import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class HelloTest {
    private Hello hello = new Hello();

    @Test
    void testBubbleSortEmptyArray() {
        int[] emptyArray = {};
        hello.bubbleSort(emptyArray);
        assertArrayEquals(new int[]{}, emptyArray, "Empty array should remain unchanged");
    }

    @Test
    void testBubbleSortSingleElementArray() {
        int[] singleElementArray = {5};
        hello.bubbleSort(singleElementArray);
        assertArrayEquals(new int[]{5}, singleElementArray, "Single element array should remain unchanged");
    }

    @Test
    void testBubbleSortAlreadySortedArray() {
        int[] sortedArray = {1, 2, 3, 4, 5};
        hello.bubbleSort(sortedArray);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, sortedArray, "Already sorted array should remain unchanged");
    }

    @Test
    void testBubbleSortReverseSortedArray() {
        int[] reverseSortedArray = {5, 4, 3, 2, 1};
        hello.bubbleSort(reverseSortedArray);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, reverseSortedArray, "Reverse sorted array should be sorted in ascending order");
    }

    @Test
    void testBubbleSortArrayWithDuplicates() {
        int[] arrayWithDuplicates = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
        hello.bubbleSort(arrayWithDuplicates);
        assertArrayEquals(new int[]{1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9}, arrayWithDuplicates, "Array with duplicates should be sorted correctly");
    }

    @Test
    void testBubbleSortNegativeNumbers() {
        int[] negativeArray = {-5, -2, -8, -1, -9};
        hello.bubbleSort(negativeArray);
        assertArrayEquals(new int[]{-9, -8, -5, -2, -1}, negativeArray, "Array with negative numbers should be sorted correctly");
    }

    @Test
    void testBubbleSortMixedNumbers() {
        int[] mixedArray = {-3, 0, 5, -1, 2, 10, -7};
        hello.bubbleSort(mixedArray);
        assertArrayEquals(new int[]{-7, -3, -1, 0, 2, 5, 10}, mixedArray, "Array with mixed numbers should be sorted correctly");
    }
}