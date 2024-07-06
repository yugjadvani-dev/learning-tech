import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string | null>(null);

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo
        editingId={editingId}
        setEditingId={setEditingId}
        editingText={editingText}
      />
      <Todos setEditingId={setEditingId} setEditingText={setEditingText} />
    </>
  );
};

export default App;
