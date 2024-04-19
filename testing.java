public class testing {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println("Hello World!");
        System.out.println("Hello World!");
        System.out.println("Hello, Cody!");

        int a = 10;
        int b = 20;
        int c = 30;


        int d = a + b + c;
        System.out.println(d);
        System.out.println(a + b + c);

        // print Hello World!
        System.out.println("Hello World!");
    }
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

        // print Hello World!
        System.out.println("Hello World!");

    }

    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}