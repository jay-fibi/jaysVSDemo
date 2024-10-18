26    public void bubbleSort(int[] arr) {
27        for (int i = 0; i < arr.length; i++) {
28            for (int j = 0; j < arr.length - i - 1; j++) {
29                if (arr[j] > arr[j + 1]) {
30                    int temp = arr[j];
31                    arr[j] = arr[j + 1];
32                    arr[j + 1] = temp;
33                }
34            }
35        }
36    }