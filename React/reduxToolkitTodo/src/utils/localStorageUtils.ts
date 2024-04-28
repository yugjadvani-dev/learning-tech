const TODO_STORAGE_KEY = "todos";

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
};

export const getTodos = (): Todo[] => {
  const todosJson = localStorage.getItem(TODO_STORAGE_KEY);
  if (todosJson) {
    return JSON.parse(todosJson);
  }
  return [];
};

export const addTodo = (todo: Todo) => {
  const todos = getTodos();
  saveTodos([...todos, todo]);
};

export const updateTodo = (updatedTodo: Todo) => {
  let todos = getTodos();
  todos = todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  saveTodos(todos);
};

export const deleteTodo = (id: string) => {
  const todos = getTodos().filter((todo) => todo.id !== id);
  saveTodos(todos);
};
