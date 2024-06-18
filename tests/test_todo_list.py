import unittest
from complex-prog import TodoList, Todo

class TestTodoList(unittest.TestCase):

    def setUp(self):
        self.todo_list = TodoList()

    def test_add_todo(self):
        self.todo_list.add("Buy groceries")
        self.assertEqual(len(self.todo_list.todos), 1)
        self.assertIsInstance(self.todo_list.todos[0], Todo)
        self.assertEqual(self.todo_list.todos[0].name, "Buy groceries")

    def test_complete_todo(self):
        self.todo_list.add("Clean room")
        self.todo_list.complete(0)
        self.assertTrue(self.todo_list.todos[0].completed)

    def test_complete_invalid_index(self):
        with self.assertRaises(IndexError):
            self.todo_list.complete(0)

    def test_repr(self):
        self.todo_list.add("Do laundry")
        self.todo_list.add("Walk the dog")
        expected_repr = "Todo(name='Do laundry', completed=False)\nTodo(name='Walk the dog', completed=False)"
        self.assertEqual(repr(self.todo_list), expected_repr)

    def test_empty_list(self):
        self.assertEqual(len(self.todo_list.todos), 0)
        self.assertEqual(repr(self.todo_list), "")

if __name__ == '__main__':
    unittest.main()
