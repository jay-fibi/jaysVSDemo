# Prints all letters except 'e' and 's'
i = 0
a = 'geeksforgeeks'

# Loop through the characters in string a.
# If the character is 'e' or 's', increment i and continue to the next iteration.
# Otherwise, print the current character and increment i.
while i < len(a):
    if a[i] == 'e' or a[i] == 's':
        i += 1
        continue

    print('Current Letter :', a[i])
    i += 1
