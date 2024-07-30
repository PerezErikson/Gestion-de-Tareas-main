import React, { useState } from 'react';
import TaskForm from './componentes/TaskForm';
import TaskList from './componentes/TaskList';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]); // Estado para las tareas
  const [filter, setFilter] = useState('all'); // Estado para el filtro de tareas

  // Función para agregar una nueva tarea
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  // Función para alternar el estado de completado de una tarea
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Función para eliminar una tarea
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filtrar las tareas según el estado del filtro
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'notCompleted') return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="container">
      <h1>Gestión de Tareas</h1>
      <TaskForm addTask={addTask} />
      <div className="filters">
        <button className="btn-all" onClick={() => setFilter('all')}>Todas</button>
        <button className="btn-completed" onClick={() => setFilter('completed')}>Completadas</button>
        <button className="btn-not-completed" onClick={() => setFilter('notCompleted')}>No Completadas</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;
