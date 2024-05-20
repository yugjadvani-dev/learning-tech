import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos: React.FC<TodoProps> = ({ setEditingId, setEditingText }) => {
  const dispatch = useDispatch();

  const todos: Todo[] = useSelector((state: TodoState) => state.todos);

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((item) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={item.id}
          >
            <div className="text-white">{item.text}</div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  const todoToEdit = todos.find((todo) => todo.id === item.id);

                  if (todoToEdit) {
                    setEditingId(todoToEdit.id);
                    setEditingText(todoToEdit.text); // Pass the todo's text to the editingText state
                  }
                }}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(item.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
