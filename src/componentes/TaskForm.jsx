import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState(''); // Estado para el título de la tarea
  const [description, setDescription] = useState(''); // Estado para la descripción de la tarea

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask({ title, description, completed: false }); // Llamar a addTask con los datos de la tarea
      setTitle(''); // Limpiar el campo de título
      setDescription(''); // Limpiar el campo de descripción
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Actualizar el estado del título
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Actualizar el estado de la descripción
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
