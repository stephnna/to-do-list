export default class TodosClass {
  // Initializations
  constructor() {
    this.toDos = [];
    this.myToDos = document.getElementById('to-dos');
    this.button = document.getElementById('add-arrow');
  }

  // display todos
displayList = (todo) => {
  let toDoContainer = '';
  todo.forEach((arrayItem, indexNum) => {
    arrayItem.index = indexNum;
    // the above line of code increses the value of each index of the array of oject
    const toDoContent = `<div class="to-do-container">     
      <input type="checkbox">
      <div id="lab${indexNum}" class="description">${arrayItem.description}</div>     
      <div class="three-dots" id="${indexNum}"></div>      
    </div><hr>`;
    toDoContainer += toDoContent;
  });
  this.myToDos.innerHTML = toDoContainer;
};

// get todos in html page if it exist in local storage
getLocalStorageData() {
  const data = JSON.parse(localStorage.getItem('bookdata'));
  if (data !== null) {
    this.displayList(data);
    localStorage.setItem('bookdata', JSON.stringify(data));
  } else {
    this.awesomeBooks.style.display = 'none';
  }
  // window.location.reload();
}

// Render todos
addOnClick() {
  this.button.onclick = () => {
    const addListValue = document.getElementById('add-to-list').value;
    const data = JSON.parse(localStorage.getItem('bookdata'));
    let count = 0;
    if (data !== null) {
      this.toDos = data;
    }
    if (addListValue === '') {
      return;
    }
    count = this.toDos.length;
    const newList = { description: addListValue, completed: false, index: count };
    this.toDos.push(newList);
    localStorage.setItem('bookdata', JSON.stringify(this.toDos));
    this.getLocalStorageData();
    window.location.reload();
  };
}

// edit task description
editTask = () => {
  const taskDescription = document.querySelectorAll('.description');
  taskDescription.forEach((item, index) => {
    item.addEventListener('click', () => {
      const data = JSON.parse(localStorage.getItem('bookdata'));
      if (data != null) {
      //  create new input element and replace it with div
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'description';
        editInput.value = item.innerHTML;
        item.parentNode.replaceChild(editInput, item);

        //  change the element back to div after editing
        editInput.onchange = () => {
          item.description = editInput.value;
          item.innerHTML = item.description;
          editInput.parentNode.replaceChild(item, editInput);
          data[index].description = item.innerHTML;
          localStorage.setItem('bookdata', JSON.stringify(data));
        };
      }
    });
  });
}

// delete todo
deleteList() {
  const removeList = document.querySelectorAll('.three-dots');
  removeList.forEach((item) => {
    item.addEventListener('click', () => {
      const data = JSON.parse(localStorage.getItem('bookdata'));
      if (data != null) {
        const filtered = data.filter((ele) => ele !== data[item.id]);
        localStorage.setItem('bookdata', JSON.stringify(filtered));
        this.getLocalStorageData();
      }
      window.location.reload();
    });
  });
}

getList() {
  if (localStorage.getItem('bookdata') !== null) {
    this.getLocalStorageData();
  }
}
}