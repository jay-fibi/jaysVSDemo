import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SortingTest {

    @Test
    void testFindMinIndex_SingleElement() {
        int[] arr = {5};
        int n = 1;
        int i = 0;
        int expected = 0;
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        assertEquals(expected, min_idx);
    }

    @Test
    void testFindMinIndex_AlreadySorted() {
        int[] arr = {1, 2, 3, 4, 5};
        int n = arr.length;
        int i = 0;
        int expected = 0;
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        assertEquals(expected, min_idx);
    }

    @Test
    void testFindMinIndex_ReverseSorted() {
        int[] arr = {5, 4, 3, 2, 1};
        int n = arr.length;
        int i = 0;
        int expected = 4;
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        assertEquals(expected, min_idx);
    }

    @Test
    void testFindMinIndex_NegativeValues() {
        int[] arr = {5, -2, 3, 0, -7};
        int n = arr.length;
        int i = 0;
        int expected = 4;
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        assertEquals(expected, min_idx);
    }

    @Test
    void testFindMinIndex_DuplicateValues() {
        int[] arr = {5, 2, 3, 2, 1};
        int n = arr.length;
        int i = 0;
        int expected = 4;
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        assertEquals(expected, min_idx);
    }
}
