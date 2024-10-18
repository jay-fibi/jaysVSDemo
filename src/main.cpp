#include <iostream>
#include "reverse_string.cpp"

int main() {
    std::string original = "Hello, World!";
    std::string reversed = reverseString(original);
    std::cout << "Original: " << original << std::endl;
    std::cout << "Reversed: " << reversed << std::endl;
    return 0;
}
