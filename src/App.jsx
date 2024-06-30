import React, { useState } from "react";
import ShowTasks from "./components/ShowTasks";

function App() {
  const [tasks, setTasks] = useState("");
  const [todo, setTodo] = useState([]);
  console.log(tasks);
  console.log(todo);
  return (
    <>
      <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-red-900 bg-purple-400 text-transparent bg-clip-text">
        Welcome to my Todo App
      </h1>

      <div className="flex justify-center">
        <input
          type="text"
          name=""
          id=""
          className="border-2 rounded-xl"
          onChange={(e) => {
            setTasks(e.target.value);
          }}
          value={tasks}
        />
        <button
          className="border-2 rounded-xl p-2"
          onClick={() => {
            setTodo([...todo, tasks]);
            setTasks('')
          }}
        >
          Add Task's
        </button>

      </div>
          <ShowTasks todo={todo} tasks={tasks} setTodo={setTodo}/>
    </>
  );
}

export default App;
