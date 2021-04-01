// import { Component } from 'react';
import './ToDoList.css';

const ToDoList = ({ todos, onDeleteToDo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p>{text} </p>
        <button className="TodoList__button" onClick={() => onDeleteToDo(id)}>
          -
        </button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
