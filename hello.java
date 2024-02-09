/**
 * Finds the largest of 3 given integers.
 * 
 * Compares x, y and z using conditional expressions to determine the
 * largest value and returns it.
 */
// Java Program to Find the Biggest of 3 Numbers

class GFG {

    // Function to find the biggest of three numbers
    static int biggestOfThree(int x, int y, int z) {

        return z > (x > y ? x : y) ? z : ((x > y) ? x : y);
    }

    // Main driver function
    public static void main(String[] args) {

        // Declaring variables for 3 numbers
        int a, b, c;

        // Variable holding the largest number
        /**
         * Variable to hold the largest number.
         */
        int largest;
        a = 5;
        b = 10;
        c = 3;
        // Calling the above function in main
        largest = biggestOfThree(a, b, c);

        // Printing the largest number
        System.out.println(largest
                + " is the largest number.");
    }
}
