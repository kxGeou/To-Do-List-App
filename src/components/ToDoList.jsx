import React from "react";
import { useState } from "react";
import Clock from "./Clock";
function ToDoList() {
  const [tasks, setTasks] = useState(["Umyć zęby"]);
  const [newTask, setNewTask] = useState("");
 
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
    <div className="Fullbody">
    <div className="respBody w-[1100px]">
      <Clock></Clock>
      <div className="w-[100%] gap-[2rem] flex justify-between">
        <input
          type="text"
          value={newTask}
          placeholder="Enter Task..."
          onChange={handleInputChange}
          className="w-[90%] inputText h-12 p-[1rem] rounded-md bg-slate-300"
        />
        <button className="add-button w-[10%] rounded-md bg-[#C8ADFF] text-white" onClick={addTask}>Add</button>
      </div>

      <ol className="w-[100%] mt-8 flex flex-col gap-5">
        {tasks.map((task, index) => 
        <li key={index} className="w-[100%] ">    
            <div className="taskBody flex justify-between items-center h-14 p-[1rem] rounded-md bg-slate-300">
                <h2 className="taskTitle">{task}</h2>
                <div className="btnBox w-[25%] flex justify-around">
                    <button className="bg-[#FD5F5F] ml-5 p-[5px] w-[7rem] rounded text-white" onClick={() => deleteTask(index)}>delete</button>
                    <button className="bg-white w-[15%] rounded" onClick={() => moveTaskUp(index)}>🔺</button>
                    <button className="bg-white w-[15%] rounded" onClick={() => moveTaskDown(index)}>🔻</button>    
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
