import React from 'react';
import TaskItem from './TaskItem'; // Importar el componente TaskItem

const TaskList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <div>
      {/* Iterar sobre la lista de tareas y renderizar un TaskItem para cada una */}
      {tasks.map(task => (
        <TaskItem
          key={task.id} // Clave única para cada tarea
          task={task} // Pasar los datos de la tarea
          toggleComplete={toggleComplete} // Función para alternar el estado de completado
          removeTask={removeTask} // Función para eliminar la tarea
        />
      ))}
    </div>
  );
};

export default TaskList;
