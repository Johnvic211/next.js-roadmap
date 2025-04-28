'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid";
import { EditTask } from "./components/EditTaskDialog"
import { DeleteTask } from "./components/DeleteTaskAlert"
import TopicCovered from "@/components/TopicCovered"
import React, { useState, useEffect } from "react";

const ToDo = () => {
  const [task, setTask] = useState<{id: string; name: string;}[]>([]);
  const [taskInput, setTaskInput] = useState<string>('')

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if(task.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(task));
    }
  }, [task])

  const addTask = () => {
    if (taskInput.trim() === "") {
      toast.error("Please enter a valid task.");
      return;
    }

    if(itemExists(taskInput)) {
      setTaskInput('');
      return toast.error('Item already exists!');
    }

    const newTask = { id: uuidv4(), name: taskInput}

    setTask([...task, newTask]);
    setTaskInput('');

    toast.success('Item has been added!');
  }

  const updateTaskValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  const removeTask = (id: string) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask)

    toast.success('Item has been removed!');
  } 

  const editTask = (id: string, newName: string) => {
    const updatedTasks = task.map((task) => 
      task.id === id ? {...task, name: newName} : task
    );

    if(itemExists(newName)) {
      setTaskInput('');
      return toast.error('Item already exists!');
    }

    setTask(updatedTasks)
    toast.success('Task has been updated!')
  }

  const itemExists = (name: string) => {
    return task.some(t => t.name === name);
  }

  const listItems = (): React.ReactNode => {
    return (
      <ul className="space-y-2 w-full max-w-md mx-auto">
        {task.map(({ id, name }) => (
          <li
            key={id}
            className="flex items-center justify-between gap-3 border border-muted rounded-lg px-4 py-2 shadow-sm bg-background"
          >
            <span className="flex-1 text-sm font-medium text-foreground truncate">
              {name}
            </span>

            <div className="flex items-center gap-2">
              <EditTask
                taskName={name}
                onSave={(newName) => editTask(id, newName)}
              />
              <DeleteTask
                onDelete={() => removeTask(id)}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  const topics = ['JSX Syntax', 'Components', 'Props', 'useState', 'useEffect'];

  return (
    <>
      <TopicCovered topics={topics} />
      <div className="flex justify-center mt-5 gap-2">
        <Input className="w-50" onChange={updateTaskValue} onKeyDown={handleKeyDown} value={taskInput} />
        <Button onClick={addTask}>Add Task</Button>
      </div>
      {listItems()}
      <Toaster />
    </>
  );
};

export default ToDo;
