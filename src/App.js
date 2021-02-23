import './App.css';

import SubmitForm from "./Components/SubmitForm";
import TodoList from "./Components/TodoList";

function App() {

  return (
    <div className="App">
      <h1>ToDoList</h1>
      
  <SubmitForm/>
  <TodoList/>
    </div>
  );
}

export default App;
