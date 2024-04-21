interface Todo {
  id: string;
  text: string;
}

type TodoState = {
  todos: Todo[];
  update: string;
};

interface AddTodoProps {
  editingId: string | null;
  setEditingId: (id: string | null) => void;
}
