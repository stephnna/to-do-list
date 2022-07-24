export const addTask = (todo, record) => todo.push(record);

export const removeTask = (todo, index) => {
  todo.splice(index, 1);
};

export const editDescription = (todo, index, text) => {
  todo[index].description = text;
};

export const status = (todo, index) => {
  const text = todo[index].completed;
  if (text) {
    todo[index].completed = false;
  } else todo[index].completed = true;
};

export const clearAllCompleted = (todo) => {
  for (let i = 0; i < todo.length; i += 1) {
    if (todo[i].completed === true) {
      todo.splice(i, 1);
      i -= 1;
    }
  }
};