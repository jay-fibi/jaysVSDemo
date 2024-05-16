import org.junit.jupiter.api.Test;

package src.test.java.com.example;
public class HelloTest {

    

    @Test
    public void testInsertionSortWithPositiveNumbers() {
        Hello hello = new Hello();
        int[] arr = {5, 2, 9, 1, 5, 6};
        int[] expected = {1, 2, 5, 5, 6, 9};
        hello.insertionSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortWithNegativeNumbers() {
        Hello hello = new Hello();
        int[] arr = {-3, -1, -4, -2, -5};
        int[] expected = {-5, -4, -3, -2, -1};
        hello.insertionSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortWithMixedNumbers() {
        Hello hello = new Hello();
        int[] arr = {3, -1, 4, -2, 5, 0};
        int[] expected = {-2, -1, 0, 3, 4, 5};
        hello.insertionSort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    public void testInsertionSortWithDuplicates() {
        Hello hello = new Hello();
        int[] arr = {3, 3, 3, 3, 3};