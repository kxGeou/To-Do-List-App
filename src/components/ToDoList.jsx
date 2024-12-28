import React from "react";
import { useState } from "react";
import Clock from "./Clock"; 

function ToDoList() {
  const [tasks, setTasks] = useState(["Umyć zęby"]);
  const [newTask, setNewTask] = useState("");
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState(themes[0]);

  function handleInputChange(event) {
        setNewTask(event.target.value)
  }
  function addTask(){
    if(newTask.trim() !== "") {
        setTasks(t => [...t, newTask]);
        setNewTask("")
    }
  }

  function deleteTask(index) {
    const updatedList = tasks.filter((_, i) => i !== index);
    setTasks(updatedList);
}

  function moveTaskUp(index) {
    if (index > 0 ) {
        const updateTasks = [...tasks];
        [updateTasks[index] , updateTasks[index - 1]] = [updateTasks[index - 1] , updateTasks[index]]
        setTasks(updateTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
        const updateTasks = [...tasks];
        [updateTasks[index] , updateTasks[index + 1]] = [updateTasks[index + 1] , updateTasks[index]]
        setTasks(updateTasks)
    }
  }

  return (
    <div className={`Fullbody bg-mainBackground z-10 theme-${theme}`}>
    <div className="circle">
      <div className="theme-selector flex bg-white absolute top-14">
        <h3 className="font-bold mr-5">Change Theme :</h3>
        {themes.map((t) => 
          <div onClick={() => setTheme(t)}>{t}</div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl mb-5">TaskTrack</h1>
        <p className="text-xl opacity-75 mb-[4rem]">Prosta i skuteczna aplikacja do śledzenia Twoich codziennych zadań.</p>
        <div className="w-[65px] h-[65px] rounded-full bg-white flex justify-center items-center  ">
          <div className="arrow-down"></div>
        </div>
      </div>
    </div>
    <div className={`respBody`}>
      <Clock></Clock>
      <div className="flex ">
        <h3 className="font-bold mr-5">Select Theme :</h3>
        <select  onChange={(e) => setTheme(e.target.value)}>
        {themes.map((t) => 
          <option key={t} value={t} >{t}</option>
        )}
        </select>
      </div>
      <div className={`w-[100%] gap-[2rem] flex justify-between`}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter Task..."
          onChange={handleInputChange}
          className="w-[90%] inputText h-12 p-[1rem] rounded-md bg-inputColor"
        />
        <button className="add-button w-[10%] rounded-md bg-addBtn text-white" onClick={addTask}>Add</button>
      </div>

      <ol className="w-[100%] mt-8 flex flex-col gap-5">
        {tasks.map((task, index) => 
        <li key={index} className="w-[100%] ">    
            <div className="taskBody flex justify-between items-center h-14 p-[1rem] rounded-md bg-slate-300  ">
                <h2 className="taskTitle">{task}</h2>
                <div className="btnBox w-[25%] flex justify-around">
                    <button className="bg-deleteBtn ml-5 p-[5px] w-[7rem] rounded text-white" onClick={() => deleteTask(index)}>delete</button>
                    <button className="bg-upDownBtn w-[15%] rounded" onClick={() => moveTaskUp(index)}>🔺</button>
                    <button className="bg-upDownBtn w-[15%] rounded" onClick={() => moveTaskDown(index)}>🔻</button>    
                </div>
            </div>           
        </li>
      )}
      </ol>
    </div>

    </div>
  );
}

export default ToDoList;
