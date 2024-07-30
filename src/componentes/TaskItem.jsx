import React from 'react';
import './TaskItem.css'; // Importar estilos para el componente TaskItem

const TaskItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <div className="task-item">
      <div className="task-content">
        {/* Título de la tarea, con clase condicional si está completada */}
        <h3 className={`task-title ${task.completed ? 'completed' : ''}`}>{task.title}</h3>
        <p>{task.description}</p> {/* Descripción de la tarea */}
      </div>
      <div className="task-actions">
        {/* Botón para marcar/desmarcar la tarea como completada */}
        <button className="btn-complete" onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        {/* Botón para eliminar la tarea */}
        <button className="btn-delete" onClick={() => removeTask(task.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
