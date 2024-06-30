import React from "react";

function ShowTasks({ todo, tasks, setTodo }) {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-yellow-950 font-extrabold text-4xl">
          Yapılacaklar
        </h1>
      </div>
      <div className="flex flex-col items-center">
        {todo.map((items) => {
          return (
            <div className="flex justify-center items-center" key={items}>
              <h1 className="border-2 text-3xl font-extrabold rounded-2xl p-2 bg-lime-400 text-amber-950">
                {items}
              </h1>

              <button
                className="border-2 p-2 rounded-full ml-2 w-12 h-12 bg-gradient-to-l bg-emerald-950 from-emerald-400"
                onClick={() => {
                  setTodo(todo.filter((e) => e !== items));
                }}
              >
                Sil
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowTasks;
