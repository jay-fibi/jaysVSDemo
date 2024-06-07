import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class HelloWorldTest {

    @Test
    void testMainPrintsHelloWorld() {
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        hello.main(new String[0]);

        String expectedOutput = "Hello, World!";
        assertEquals(expectedOutput, outContent.toString().trim());
    }

    @Test
    void testMainWithArguments() {
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        String[] args = {"arg1", "arg2"};
        hello.main(args);

        String expectedOutput = "Hello, World!";
        assertEquals(expectedOutput, outContent.toString().trim());
    }

}
