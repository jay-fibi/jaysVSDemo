def test_invalid_input():
    with patch('builtins.input', side_effect=['5', '1', '2']):
        with patch('builtins.print') as mock_print:
            calculator()
            mock_print.assert_called_with("Invalid Input")

def test_addition():
    with patch('builtins.input', side_effect=['1', '5', '7', 'no']):
        with patch('builtins.print') as mock_print:
            calculator()
            mock_print.assert_called_with("5.0 + 7.0 = 12.0")

def test_subtraction():
    with patch('builtins.input', side_effect=['2', '10', '3', 'no']):
        with patch('builtins.print') as mock_print:
            calculator()
            mock_print.assert_called_with("10.0 - 3.0 = 7.0")

def test_multiplication():
    with patch('builtins.input', side_effect=['3', '4', '6', 'no']):
        with patch('builtins.print') as mock_print:
            calculator()
            mock_print.assert_called_with("4.0 * 6.0 = 24.0")

def test_division():
    with patch('builtins.input', side_effect=['4', '8', '2', 'no']):
        with patch('builtins.print') as mock_print:
            calculator()
            mock_print.assert_called_with("8.0 / 2.0 = 4.0")
hello