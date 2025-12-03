import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class CalculatorGUI extends JFrame implements ActionListener {
    // Components
    private JTextField display;
    private JButton[] numberButtons = new JButton[10];
    private JButton[] functionButtons = new JButton[9];
    private JButton addButton, subButton, mulButton, divButton;
    private JButton decButton, equButton, delButton, clrButton, negButton;
    private JPanel panel;
    
    // Variables for calculation
    private double num1 = 0, num2 = 0, result = 0;
    private char operator;
    
    // Constructor
    public CalculatorGUI() {
        setTitle("Simple Calculator");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(420, 550);
        setLayout(null);
        setResizable(false);
        
        // Create display field
        display = new JTextField();
        display.setBounds(50, 25, 300, 50);
        display.setFont(new Font("Arial", Font.BOLD, 24));
        display.setEditable(false);
        display.setHorizontalAlignment(JTextField.RIGHT);
        display.setBackground(Color.WHITE);
        add(display);
        
        // Create buttons
        addButton = new JButton("+");
        subButton = new JButton("-");
        mulButton = new JButton("×");
        divButton = new JButton("÷");
        decButton = new JButton(".");
        equButton = new JButton("=");
        delButton = new JButton("Del");
        clrButton = new JButton("C");
        negButton = new JButton("(-)");
        
        functionButtons[0] = addButton;
        functionButtons[1] = subButton;
        functionButtons[2] = mulButton;
        functionButtons[3] = divButton;
        functionButtons[4] = decButton;
        functionButtons[5] = equButton;
        functionButtons[6] = delButton;
        functionButtons[7] = clrButton;
        functionButtons[8] = negButton;
        
        for (int i = 0; i < 9; i++) {
            functionButtons[i].addActionListener(this);
            functionButtons[i].setFont(new Font("Arial", Font.BOLD, 18));
            functionButtons[i].setFocusable(false);
        }
        
        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            numberButtons[i].addActionListener(this);
            numberButtons[i].setFont(new Font("Arial", Font.BOLD, 18));
            numberButtons[i].setFocusable(false);
        }
        
        // Style buttons
        equButton.setBackground(new Color(100, 149, 237));
        equButton.setForeground(Color.WHITE);
        clrButton.setBackground(new Color(220, 20, 60));
        clrButton.setForeground(Color.WHITE);
        delButton.setBackground(new Color(255, 140, 0));
        delButton.setForeground(Color.WHITE);
        
        // Create panel for number and function buttons
        panel = new JPanel();
        panel.setBounds(50, 100, 300, 400);
        panel.setLayout(new GridLayout(5, 4, 10, 10));
        panel.setBackground(new Color(240, 240, 240));
        
        // Add buttons to panel in calculator layout
        panel.add(clrButton);
        panel.add(delButton);
        panel.add(negButton);
        panel.add(divButton);
        
        panel.add(numberButtons[7]);
        panel.add(numberButtons[8]);
        panel.add(numberButtons[9]);
        panel.add(mulButton);
        
        panel.add(numberButtons[4]);
        panel.add(numberButtons[5]);
        panel.add(numberButtons[6]);
        panel.add(subButton);
        
        panel.add(numberButtons[1]);
        panel.add(numberButtons[2]);
        panel.add(numberButtons[3]);
        panel.add(addButton);
        
        panel.add(decButton);
        panel.add(numberButtons[0]);
        panel.add(equButton);
        JButton emptyButton = new JButton("");
        emptyButton.setEnabled(false);
        panel.add(emptyButton);
        
        add(panel);
        
        getContentPane().setBackground(new Color(240, 240, 240));
        setVisible(true);
    }
    
    // Action performed method
    @Override
    public void actionPerformed(ActionEvent e) {
        // Number buttons
        for (int i = 0; i < 10; i++) {
            if (e.getSource() == numberButtons[i]) {
                display.setText(display.getText().concat(String.valueOf(i)));
            }
        }
        
        // Decimal button
        if (e.getSource() == decButton) {
            if (!display.getText().contains(".")) {
                display.setText(display.getText().concat("."));
            }
        }
        
        // Addition button
        if (e.getSource() == addButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '+';
            display.setText("");
        }
        
        // Subtraction button
        if (e.getSource() == subButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '-';
            display.setText("");
        }
        
        // Multiplication button
        if (e.getSource() == mulButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '×';
            display.setText("");
        }
        
        // Division button
        if (e.getSource() == divButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '÷';
            display.setText("");
        }
        
        // Equals button
        if (e.getSource() == equButton) {
            num2 = Double.parseDouble(display.getText());
            
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '×':
                    result = num1 * num2;
                    break;
                case '÷':
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        display.setText("Error");
                        return;
                    }
                    break;
            }
            display.setText(String.valueOf(result));
            num1 = result;
        }
        
        // Clear button
        if (e.getSource() == clrButton) {
            display.setText("");
            num1 = num2 = result = 0;
        }
        
        // Delete button
        if (e.getSource() == delButton) {
            String string = display.getText();
            if (string.length() > 0) {
                display.setText(string.substring(0, string.length() - 1));
            }
        }
        
        // Negative button
        if (e.getSource() == negButton) {
            double temp = Double.parseDouble(display.getText());
            temp *= -1;
            display.setText(String.valueOf(temp));
        }
    }
    
    // Main method
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new CalculatorGUI();
            }
        });
    }
}
