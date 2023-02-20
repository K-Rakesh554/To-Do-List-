import React from 'react';
import './css/todo.css';
function ToDoListMain() {
  type person = {
    name: string;
  };

  const handlePush = () => {};

  const handleToggle = () => {};
  return (
    <React.Fragment>
      <div className="container">
        <h3>
          <u>Enter Task / Reminders</u>
        </h3>

        <form>
          <label>Wat's on your mind:-</label>
          <input type="text"></input>
        </form>

        <button onClick={handlePush}> Add to List</button>
      </div>
      <button className="togglebutton" onClick={handleToggle}>
        toggle list
      </button>
    </React.Fragment>
  );
}

export default ToDoListMain;
