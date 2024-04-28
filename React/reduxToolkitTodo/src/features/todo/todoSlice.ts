import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import {
  localStorageAdd,
  localStorageDelete,
  localStorageUpdate,
  localStorageGet,
} from "../../utils/localStorageUtils";

const initialState: TodoState = {
  todos: localStorageGet(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      localStorageAdd(todo); // Save to localStorage
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorageDelete(action.payload); // Delete from localStorage
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].text = action.payload.text;
        localStorageUpdate(state.todos[index]); // Update in localStorage
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
