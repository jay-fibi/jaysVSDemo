public class hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }

    // print Hello World!
    System.out.println("Hello World!");

    // print Hello World!
System.out.println("Hello World!");

    public void bubbleSort(int[] array) {
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        System.out.println("Hello, Cody!");

        public static String greet(String name) {
            return "Hello, " + name + "!";
        }
    }
}