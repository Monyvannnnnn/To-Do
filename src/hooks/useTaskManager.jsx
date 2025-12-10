import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "todo:savedTasks";
const LOCAL_STORAGE_KEY_GROUP = "todo:savedGroups";

function useTaskManager() {
  const [tasks, setTasks] = useState([]);
  const [groups, setGroups] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function loadSavedGroups() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_GROUP);
    if (saved) {
      setGroups(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
    loadSavedGroups();
  }, []);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function setGroupsAndSave(newGroups) {
    setGroups(newGroups);
    localStorage.setItem(LOCAL_STORAGE_KEY_GROUP, JSON.stringify(newGroups));
  }

  function addGroup(groupName) {
    setGroupsAndSave([
      ...groups,
      {
        id: crypto.randomUUID(),
        name: groupName,
      },
    ]);
  }

  function deleteGroup(groupId) {
    const newGroups = groups.filter((group) => group.id !== groupId);
    setGroupsAndSave(newGroups);
    const newTasks = tasks.filter((task) => task.groupId !== groupId);
    setTasksAndSave(newTasks);
  }

  function addTask(taskTitle, groupId) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
        groupId: groupId,
      },
    ]);
  }
  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function deleteAll() {
    setTasksAndSave([]);
  }

  function toggleTaskCompleted(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return {
    tasks,
    groups,
    addTask,
    deleteTask,
    toggleTaskCompleted,
    deleteAll,
    addGroup,
    deleteGroup,
  };
}

export default useTaskManager;
