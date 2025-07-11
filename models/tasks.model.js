let tasks = [];

export const getTasks = () => tasks;

export const getTaskById = (id) => tasks.find(t => t.id === id);

export const createTask = (task) => {
  tasks.push(task);
  return task;
};

export const updateTask = (id, updatedData) => {
  const task = getTaskById(id);
  if (task) {
    Object.assign(task, updatedData);
  }
  return task;
};

export const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};

export const getSummary = () => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const averagePriority = total > 0 ? tasks.reduce((acc, t) => acc + t.priority, 0) / total : 0;
  return { total, completed, averagePriority };
};


export const _resetTasks = () => { tasks = []; };
