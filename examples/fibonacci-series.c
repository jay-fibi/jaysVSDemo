#include <stdio.h>

/**
 * Prints the Fibonacci series up to the specified number of terms.
 *
 * The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones,
 * usually starting with 0 and 1. This function prompts the user to enter the number of terms to print,
 * and then prints out the Fibonacci series up to that number of terms.
 *
 * @author John Doe
 */
int main() {
    int i, n, t1 = 0, t2 = 1, nextTerm;

    printf("Enter the number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series: ");

    for (i = 1; i <= n; ++i) {
        printf("%d, ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }

    return 0;
}
