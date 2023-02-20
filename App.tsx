import * as React from 'react';
import NavBar from './components/navbar';
import ToDoListMain from './components/to_Do_List';
import './style.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <ToDoListMain />
    </div>
  );
}
