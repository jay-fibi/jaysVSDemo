public class hello1111 {
    public static void main(String[] args) {
        System.out.println("hello1111");
    }

    public int getInt() {
        return 1;
    }

    public void setInt(int i) {
    }

    public void bubbleSort(int[] arr) {
        int temp = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    System.out.println("temp:" + temp);
                    System.out.println("arr:" + arr[j] + " " + arr[j + 1]);
                    System.out.println("j:" + j);
                    System.out.println("j+1:" + (j + 1));
                    System.out.println("arr.length:" + arr.length);
                    System.out.println("i:" + i);
                }
            }
        }
    }
}
