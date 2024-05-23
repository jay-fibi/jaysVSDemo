import java.util.Scanner;

public class LoginScreen {

  public static void main(String[] args) {
    
    Scanner scanner = new Scanner(System.in);

System.out.print("Enter username: ");
    String username = scanner.nextLine();
    
    System.out.print("Enter password: ");
    String password = scanner.nextLine();
    
    if(username.equals("john") && password.equals("password123")) {
      System.out.println("Login successful!");
    } else {
      System.out.println("Invalid credentials");
    }
    
  }

}
