const localStorageKey = "tasks";

export const saveTasksInLocalStorge = tasks =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];