import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import ToDoList from './components/ToDoList';
import initialToDos from './toDos.json';
import Container from './components/Container/Container';
import Forms from './components/Forms/Forms';

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
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <Container>
        <Forms onSubmit={this.formSubmitHandler} />

        <h1>Object State </h1>
        <ToDoList todos={todos} onDeleteToDo={this.deleteTodo} />
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
