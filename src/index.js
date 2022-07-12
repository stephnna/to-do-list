import './style.css';
import TodosClass from './modules/todo_class.js';
// create an instant of a class
const newTodos = new TodosClass();
// call class methods(i.e functions inside the class)
newTodos.getList();
newTodos.addOnClick();
newTodos.editTask();
newTodos.deleteList();
newTodos.completedTask();
newTodos.clearAllCompleted();
