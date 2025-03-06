pub struct Calculator {
    // Empty struct as we only need static methods
}

impl Calculator {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    // Example usage
    let result = Calculator::add(5, 3);
    println!("Addition result: {}", result);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(Calculator::add(2, 3), 5);
        assert_eq!(Calculator::add(-1, 1), 0);
        assert_eq!(Calculator::add(0, 0), 0);
    }
}
