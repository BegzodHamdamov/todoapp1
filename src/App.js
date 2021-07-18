
import './App.css';
import TodoApp from './components/TodoApp';


const todos = [
  { task: "Ali" },
  { task: "Vali" },

]


function App() {
  return (
    <div className="App">
      <span className="title">Todo List</span>  <br />
      <TodoApp />
    </div>
  );
}

export default App;
