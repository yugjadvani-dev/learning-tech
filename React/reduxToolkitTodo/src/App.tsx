import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <Todos
        editingId={editingId}
        setEditingId={setEditingId}
      />
    </>
  );
};

export default App;
