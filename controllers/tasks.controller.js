import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getSummary
} from '../models/tasks.model.js';

export const createTaskHandler = (req, res) => {
  const { id, title, description, priority } = req.body;
  if (priority < 1 || priority > 5) {
    return res.status(400).send({ error: 'Prioridad inválida' });
  }

  const task = { id, title, description, priority, completed: false };
  createTask(task);
  res.status(201).json(task);
};

export const listTasksHandler = (req, res) => {
  res.status(200).json(getTasks());
};

export const updateTaskHandler = (req, res) => {
  const { id } = req.params;
  const updated = updateTask(parseInt(id), req.body);
  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(404).send({ error: 'Tarea no encontrada' });
  }
};

export const deleteTaskHandler = (req, res) => {
  const success = deleteTask(parseInt(req.params.id));
  if (success) {
    res.status(200).send();
  } else {
    res.status(404).send({ error: 'Tarea no encontrada' });
  }
};

export const summaryHandler = (req, res) => {
  res.status(200).json(getSummary());
};
