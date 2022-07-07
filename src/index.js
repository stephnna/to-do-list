import './style.css';

const toDos = [
  {
    description: 'Attend Morning Session',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete Peer-to-peer code review',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete to do project',
    completed: false,
    index: 2,
  },
];

const myToDos = document.getElementById('to-dos');
// button = document.getElementById('add-btn');

const displayBooks = (todo) => {
  let toDoContainer = '';
  todo.forEach((arrayItem) => {
    const toDoContent = `<div class="to-do-container">
    <label>
    <input type="checkbox">${arrayItem.description}    
    </label>
    <div class="three-dots"></div>      
  </div><hr>`;
    toDoContainer += toDoContent;
  });
  myToDos.innerHTML = toDoContainer;
};

displayBooks(toDos);
