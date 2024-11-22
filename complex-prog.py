# TodoList class represents a list of Todo items.
# Maintains a list of Todo instances and provides methods to 
# add new items, mark items as completed by index, and 
# string representation.
import sys

# Todo class to represent a todo item 
<class Todo:
    """
  Initializes a new Todo instance with the given name.

  Args:
      name (str): The name of the Todo item.

  Attributes:
      name (str): The name of the Todo item.
      completed (bool): Indicates whether the Todo item has been completed.
  """
def __init__(self, name):
    self.name = name
    self.completed = False

  def complete(self):
    self.completed = True
  
  def __repr__(self):
    status = 'X' if self.completed else ' '
    return f'[{status}] {self.name}'

# TodoList class to represent list of todo items
class TodoList:
  def __init__(self):
    self.todos = []
    self.todos = []

  def add(self, name):
    self.todos.append(Todo(name))

  def complete(self, index):
    self.todos[index].complete()

  def __repr__(self):
    return '\n'.join(map(repr, self.todos))
    elif command[0] == '+':
      todo_list.add(command[2:])
    elif command[0] == '-':
      index = int(command[2:]) - 1
      todo_list.complete(index)

    print(todo_list)

if __name__ == '__main__':
  main()
