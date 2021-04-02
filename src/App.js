import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import ToDoList from './components/ToDoList';
import initialToDos from './toDos.json';
import Container from './components/Container/Container';
import Forms from './components/Forms/Forms';
import shortid from 'shortid';
import TodoEditor from './components/ToDOEditor/TodoEditor';
import Filter from 'module';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    inputValue: '',
    todos: initialToDos,
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <Container>
        <Forms onSubmit={this.formSubmitHandler} />

        <h1>Todo List </h1>
        <TodoEditor onSubmit={this.addTodo} />

        <ToDoList
          todos={todos}
          onDeleteToDo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <div>
          <p>Total amount: {todos.length}</p>
          <p>
            Total done:{' '}
            {todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)}
          </p>
        </div>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
      </Container>
    );
  }
}
export default App;
