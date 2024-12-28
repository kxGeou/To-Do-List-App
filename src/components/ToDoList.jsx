import React from "react";
import { useState } from "react";
import Clock from "./Clock";

function ToDoList() {
  const [tasks, setTasks] = useState(["Example Task"]);
  const [newTask, setNewTask] = useState("");
  const themes = ["light", "dark", "green", "gray", "blue"];
  const [theme, setTheme] = useState(themes[0]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedList = tasks.filter((_, i) => i !== index);
    setTasks(updatedList);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  return ( 
    <div
      className={`Fullbody bg-mainBackground z-10 theme-${theme} pb-[10rem]`}
    >
      <div className="circles bg-circle">
        <div className="theme-selector flex bg-mainBackground absolute top-14 justify-center rounded-lg items-center px-5 py-2">
          <h3 className=" mr-5 text-circle">Change Theme :</h3>
          {themes.map((t) => (
            <div
              onClick={() => setTheme(t)}
              className="p-1 mx-2 px-4 rounded-[4px] bg-slate-700 text-white"
            >
              {t}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-20 text-white">
          <h1 className="text-8xl mb-4">TaskTrack</h1>
          <p className="text-xl opacity-75 mb-[5rem]">
            Prosta i skuteczna aplikacja do śledzenia Twoich codziennych zadań.
          </p>
          <div className="w-[65px] h-[65px] rounded-full bg-mainBackground flex justify-center items-center">
            <div className="arrow-down border-l-[15px] border-r-[15px] border-t-[25px] mt-[5px] border-l-transparent border-r-transparent border-t-circle"></div>
          </div>
        </div>
      </div>
      <div className={`respBody w-[65%]`}>
        <Clock></Clock>
        <div className="flex "></div>
        <div className={`w-[100%] gap-[2rem] flex justify-between`}>
          <input
            type="text"
            value={newTask}
            placeholder="Enter Task..."
            onChange={handleInputChange}
            className="w-[85%] inputText placeholder:text-inputPlaceholder h-14 p-[1rem] rounded-md bg-inputBackground"
          />
          <button
            className="add-button w-[15%] rounded-md bg-addBtn text-white"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <ol className="w-[100%] mt-8 flex flex-col gap-5">
          {tasks.map((task, index) => (
            <li key={index} className="w-[100%] ">
              <div className="taskBody flex justify-between items-center h-16 p-[1rem] rounded-md bg-taskBgc  ">
                <h2 className="taskTitle text-white">{task}</h2>
                <div className="btnBox w-[25%] flex justify-around">
                  <button
                    className="mt-[10px] rounded w-0 h-0 border-l-[17px] border-r-[17px] border-b-[27px] border-l-transparent border-r-transparent border-b-taskArrow"
                    onClick={() => moveTaskUp(index)}
                  ></button>
                  <button
                    className="flex justify-center items-center triangleDown rounded border-l-[17px] mt-[10px] border-r-[17px] border-t-[25px] border-l-transparent border-r-transparent border-t-taskArrow"
                    onClick={() => moveTaskDown(index)}
                  ></button>
                  <button
                    className="bg-transparent text-3xl  ml-5 p-[5px] w-[3rem] rounded text-white"
                    onClick={() => deleteTask(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      {/* <div className="footer w-full h-20 bg-circle absolute bottom-0"></div> */}
    </div>
  );
}

export default ToDoList;
