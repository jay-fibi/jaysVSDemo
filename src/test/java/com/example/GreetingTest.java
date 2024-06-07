import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class GreetingTest {

    @Test
    void testGreetWithName() {
        String name = "Alice";
        String expected = "Hello, Alice!";
        String actual = Greeting.greet(name);
        assertEquals(expected, actual);
    }

    @Test
    void testGreetWithEmptyName() {
        String name = "";
        String expected = "Hello, !";
        String actual = Greeting.greet(name);
        assertEquals(expected, actual);
    }

    @Test
    void testGreetWithNullName() {
        String name = null;
        String expected = "Hello, null!";
        String actual = Greeting.greet(name);
        assertEquals(expected, actual);
    }

}
