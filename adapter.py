class Dog:
	attr1 = "mammal"

	def __init__(self, name):
		self.name = name

Rodger = Dog("Rodger")
Tommy = Dog("Tommy")

print("Rodger is a {}".format(Rodger.__class__.attr1))
print("Tommy is also a {}".format(Tommy.__class__.attr1))

print("My name is {}".format(Rodger.name))
print("My name is {}".format(Tommy.name))


public static String greet(String name) {
	return "Hello, " + name + "!";
}
public static String greet(String name) {
    return "Hello, " + name + "!";
}

def test_division():
    with patch('builtins.input', side_effect=['4', '8', '2', 'no']):
        with patch('builtins.print') as mock_print:
            calculator()
            mock_print.assert_called_with("8.0 / 2.0 = 4.0")
hello