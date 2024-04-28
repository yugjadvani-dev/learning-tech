interface Todo {
  id: string;
  text: string;
}

type TodoState = {
  todos: Todo[];
};

interface TodoProps {
  editingId?: string | null;
  setEditingId: Dispatch<SetStateAction<string | null>>;
  editingText?: string | null | undefined;
  setEditingText?: Dispatch<SetStateAction<string | null>>;
}
