import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se o título e a descrição estão preenchidas
          if (!title.trim() || !description.trim()) {
            return alert(
              "Por favor, preencha o título e a descrição da tarefa",
            );
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-emerald-700 p-2 rounded-md text-white px-4 py-2 font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
