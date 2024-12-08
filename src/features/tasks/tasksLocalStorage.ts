import { Task } from "./types";

const localStorageKey = "tasks";

export const saveTasksInLocalStorge = (tasks: Task[]) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

const tasksFromLocalStorage = localStorage.getItem(localStorageKey);
export const getTasksFromLocalStorage = () =>
  (tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : []) as Task[];
