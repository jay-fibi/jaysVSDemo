
import sys

# Todo class to represent a todo item 
class Todo:
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


def add(self, name):
    self.todos.append(Todo(name))


def complete(self, index):
    self.todos[index].complete()


def __repr__(self):
    return '\n'.join(map(repr, self.todos))

def main():

  todo_list = TodoList()

  while True:
    command = input("Enter command (+ item, - index, or x to exit): ")
    if command == 'x':
        break
    elif command.startswith('+'):
        todo_list.add(command[2:].strip())
    elif command.startswith('-'):
        try:
            index = int(command[2:]) - 1
            todo_list.complete(index)
        except (ValueError, IndexError):
            print("Invalid index")
    else:
        print("Invalid command")

  print(todo_list)

print(todo_list)

    print(todo_list)

if __name__ == '__main__':
  main()
