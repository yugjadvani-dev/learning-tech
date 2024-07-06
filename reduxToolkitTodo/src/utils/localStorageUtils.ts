const TODO_STORAGE_KEY = "todos";

export const localStorageSave = (todos: Todo[]) => {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
};

export const localStorageGet = (): Todo[] => {
  const todosJson = localStorage.getItem(TODO_STORAGE_KEY);
  if (todosJson) {
    return JSON.parse(todosJson);
  }
  return [];
};

export const localStorageAdd = (todo: Todo) => {
  const todos = localStorageGet();
  localStorageSave([...todos, todo]);
};

export const localStorageUpdate = (updatedTodo: Todo) => {
  let todos = localStorageGet();
  todos = todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  localStorageSave(todos);
};

export const localStorageDelete = (id: string) => {
  const todos = localStorageGet().filter((todo) => todo.id !== id);
  localStorageSave(todos);
};
