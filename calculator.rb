class Calculator
  def add(a, b)
    a + b
  end

  def subtract(a, b)
    a - b
  end

  def multiply(a, b)
    a * b
  end

  def divide(a, b)
    return "Error: Division by zero" if b == 0
    a.to_f / b
  end

  def power(a, b)
    a ** b
  end

  # Performs a calculation based on the specified operation
  #
  # @param operation [String] The operation to perform (add/+, subtract/-, multiply/*, divide//, power/**)
  # @param a [Numeric] The first operand
  # @param b [Numeric] The second operand
  # @return [Numeric, String] The calculation result or an error message
  def calculate(operation, a, b)
    case operation.downcase
    when 'add', '+'
      add(a, b)
    when 'subtract', '-'
      subtract(a, b)
    when 'multiply', '*'
      multiply(a, b)
    when 'divide', '/'
      divide(a, b)
    when 'power', '**'
      power(a, b)
    else
      "Error: Unknown operation"
    end
  end
end

# Interactive calculator
def run_calculator
  calc = Calculator.new
  
  puts "Ruby Calculator"
  puts "Operations: add, subtract, multiply, divide, power"
  puts "Type 'quit' to exit"
  
  loop do
    print "\nEnter operation: "
    operation = gets.chomp
    break if operation.downcase == 'quit'
    
    print "Enter first number: "
    a = gets.chomp.to_f
    
    print "Enter second number: "
    b = gets.chomp.to_f
    
    result = calc.calculate(operation, a, b)
    puts "Result: #{result}"
  end
end

# Run the calculator if this file is executed directly
if __FILE__ == $0
  run_calculator
end
