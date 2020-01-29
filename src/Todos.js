/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
import showMessage from './messages';

const getListsFromStorage = () => {
  console.log('soy yo');
  const keys = Object.keys(localStorage);
  let i = 0;
  const listNames = [];
  while (i < keys.length) {
    const name = localStorage.key(i);
    if (name !== 'projectName') {
      listNames.push(name);
      AddItemToList(name);
      i += 1;
    } else i += 1;
  }
};

const AddItemToList = (name) => {
  const listContainer = document.getElementById('list-container');
  const listItem = document.createElement('div');
  const itemName = document.createElement('div');
  const showItem = document.createElement('div');
  const deleteItem = document.createElement('div');
  const hideContainer = document.createElement('div');

  itemName.innerText = `${name}`;
  deleteItem.innerText = 'X';
  showItem.innerText = 'Show';
  listItem.className = 'd-flex';

  hideContainer.className = 'hide-container';
  itemName.className = 'list-title  ';
  showItem.className = 'show-btn';
  deleteItem.className = 'delete-btn';
  showItem.value = name;
  listItem.id = name;
  localStorage.setItem('projectName', JSON.stringify(name));
  if (!localStorage.getItem(name)) localStorage.setItem(name, JSON.stringify([]));

  listItem.appendChild(itemName);
  hideContainer.appendChild(showItem);
  hideContainer.appendChild(deleteItem);

  listItem.appendChild(hideContainer);
  listContainer.appendChild(listItem);

  showItem.addEventListener('click', () => {
    localStorage.setItem('projectName', JSON.stringify(showItem.value));
    allTasks();
  });

  deleteItem.addEventListener('click', () => {
    document.getElementById(`${name}`).remove();
    localStorage.removeItem(name);
    showMessage('To do List Removed.', 'rgba(255, 0, 0, 0.4)');
    //cleanTasks();
  });
};

const createTodoItem = (
  title = 'My Task',
  description = 'My description',
  date,
  priority = '1',
) => {
  const mainContainer = document.getElementById('tasks-container');
  const itemContainer = document.createElement('div');
  const ulContainer = document.createElement('ul');
  const liDone = document.createElement('li');
  const liDoneCheck = document.createElement('input');
  const liTitle = document.createElement('li');
  const liTitleText = document.createElement('div');
  const liDescription = document.createElement('li');
  const liDescriptionText = document.createElement('div');
  const liDate = document.createElement('li');
  const liDateText = document.createElement('div');
  const liAction = document.createElement('li');
  const ActionContainer = document.createElement('div');
  const EditBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  liDescriptionText.style.wordWrap = 'break-word';
  liTitleText.style.wordWrap = 'break-word';
  EditBtn.className = 'edit-btn-task';
  deleteBtn.className = 'delete-btn-task';
  EditBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';
  ActionContainer.appendChild(deleteBtn);
  ActionContainer.appendChild(EditBtn);
  liAction.appendChild(ActionContainer);

  liDescriptionText.style.width = '100%';
  liDateText.textContent = date.toString('dd-mm-yyyy');
  ulContainer.style.display = 'flex';
  liDescriptionText.textContent = description;
  liTitleText.textContent = title;
  liDoneCheck.type = 'checkbox';
  liDone.className = 'checkbox';
  ulContainer.className = 'navbar ul-item';
  try {
    const projectName = JSON.parse(localStorage.getItem('projectName'));
    if (localStorage.getItem(projectName) === null) {
      const hash = [
        {
          id: 1,
          title,
          description,
          priority,
          date,
          done: false,
        },
      ];
      ulContainer.id = 'id1';
      localStorage.setItem(projectName, JSON.stringify(hash));
    } else {
      const hash = JSON.parse(localStorage.getItem(projectName));
      let ID;

      if (hash.length > 0) {
        ID = hash[hash.length - 1].id + 1;
      } else {
        ID = 1;
      }
      ulContainer.id = `id${ID}`;
      const newHash = {
        id: ID,
        title,
        description,
        priority,
        date,
        done: false,
      };

      hash.push(newHash);

      localStorage.setItem(projectName, JSON.stringify(hash));
    }
  } catch (error) { showMessage(`Error... ${error}`, 'red'); }

  if (priority === '3') {
    ulContainer.style.backgroundColor = 'rgba(0,255,0,0.5)';
  }

  if (priority === '2') {
    ulContainer.style.backgroundColor = 'rgba(255,255,0,0.5) ';
  }

  if (priority === '1') {
    ulContainer.style.backgroundColor = 'rgba(245,0,0,0.3)';
  }
  liTitle.appendChild(liTitleText);
  liDone.appendChild(liDoneCheck);
  liDescription.appendChild(liDescriptionText);
  liDate.appendChild(liDateText);
  ulContainer.appendChild(liDone);
  ulContainer.appendChild(liTitle);
  ulContainer.appendChild(liDescription);
  ulContainer.appendChild(liDate);
  ulContainer.appendChild(liAction);
  itemContainer.appendChild(ulContainer);
  mainContainer.appendChild(itemContainer);
  showMessage('Task Added Sucessfully', 'rgba(0, 255, 0, 0.5)');
};

const allTasks = () => {
  const projectName = JSON.parse(localStorage.getItem('projectName'));
  const data = JSON.parse(localStorage.getItem(projectName));
  const mainContainer = document.getElementById('tasks-container');

  while (mainContainer.lastChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  data.forEach((obj) => {
    // eslint-disable-next-line no-use-before-define

    renderTasks(
      obj.id,
      obj.title,
      obj.description,
      obj.date,
      obj.priority,
      obj.done,
    );
  });
};


const renderTasks = (
  id = 1,
  title = 'My Task',
  description = 'My description',
  date = '01-01-2020',
  priority = '1',
  Done = false,
) => {
  const mainContainer = document.getElementById('tasks-container');
  const itemContainer = document.createElement('div');
  const ulContainer = document.createElement('ul');
  const liDone = document.createElement('li');
  const liDoneCheck = document.createElement('input');
  const liTitle = document.createElement('li');
  const liTitleText = document.createElement('div');
  const liDescription = document.createElement('li');
  const liDescriptionText = document.createElement('div');
  const liDate = document.createElement('li');
  const liDateText = document.createElement('div');
  const liAction = document.createElement('li');
  const ActionContainer = document.createElement('div');
  const EditBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  ulContainer.id = `id${id}`;
  itemContainer.id = 'tasks-container';
  liDescriptionText.style.wordWrap = 'break-word';
  liTitleText.style.wordWrap = 'break-word';
  EditBtn.className = 'edit-btn-task';
  deleteBtn.className = 'delete-btn-task';
  EditBtn.textContent = 'Edit';
  EditBtn.id = `editid${id}`;
  deleteBtn.textContent = 'Delete';
  liDoneCheck.id = `check${id}`;
  if (Done) liDoneCheck.checked = true;

  liDoneCheck.addEventListener('change', () => {
    const projectName = JSON.parse(localStorage.getItem('projectName'));
    const arr = JSON.parse(localStorage.getItem(projectName));

    //arr.splice(id - 1, 1);

    if (liDoneCheck.checked) {
      arr.forEach((obj) => {
        console.log('Checkeado: ' + JSON.stringify(obj));
        if (obj.id === id) {
          obj.done = true;
        }
      });
      localStorage.setItem(projectName, JSON.stringify(arr));
    } else {
      console.log('No Chequeado:: ' + JSON.stringify(arr));
      arr.forEach((obj) => {
        if (obj.id === id) {
          obj.done = false;
        }
      });
      localStorage.setItem(projectName, JSON.stringify(arr));
    }
  });

  deleteBtn.addEventListener('click', () => {
    const projectName = JSON.parse(localStorage.getItem('projectName'));
    const arr = JSON.parse(localStorage.getItem(projectName));
    arr.splice(id - 1, 1);

    localStorage.setItem(projectName, JSON.stringify(arr));
    allTasks();
  });

  EditBtn.addEventListener('click', () => {
    const AddTask = document.getElementById('add-task');
    const EditTask = document.getElementById('edit-task');
    AddTask.className = 'd-none';
    EditTask.classList.remove('d-none');
    const projectName = JSON.parse(localStorage.getItem('projectName'));
    const form = document.getElementById('form-container');
    form.classList.remove('d-none');
    form.classList.add('d-flex');
    const arr = JSON.parse(localStorage.getItem(projectName));
    arr.forEach((obj) => {
      if (obj.id === id) {
        const inputTitleTask = document.getElementById('title-box');
        const inputIdTask = document.getElementById('txtid');
        const inputDateTask = document.getElementById('calendar-box');
        const inputDescriptionTask = document.getElementById('description-box');
        const cbxPriority = document.getElementById('cbx-box');
        inputIdTask.value = id;
        inputTitleTask.value = obj.title;
        inputDescriptionTask.value = obj.description;
        inputDateTask.value = obj.date;
        if (obj.priority === '1') cbxPriority.selectedIndex = 0;
        if (obj.priority === '2') cbxPriority.selectedIndex = 1;
        if (obj.priority === '3') cbxPriority.selectedIndex = 2;
      }
    });
  });

  ActionContainer.appendChild(deleteBtn);
  ActionContainer.appendChild(EditBtn);
  liAction.appendChild(ActionContainer);

  liDescriptionText.style.width = '100%';
  liDateText.textContent = date;
  ulContainer.style.display = 'flex';
  liDescriptionText.textContent = description;
  liTitleText.textContent = title;
  liDoneCheck.type = 'checkbox';
  liDone.className = 'checkbox';
  ulContainer.className = 'navbar ul-item';

  if (priority === '3') {
    ulContainer.style.backgroundColor = 'rgba(0,255,0,0.5)';
  }

  if (priority === '2') {
    ulContainer.style.backgroundColor = 'rgba(255,255,0,0.5) ';
  }

  if (priority === '1') {
    ulContainer.style.backgroundColor = 'rgba(245,0,0,0.3)';
  }
  liTitle.appendChild(liTitleText);
  liDone.appendChild(liDoneCheck);
  liDescription.appendChild(liDescriptionText);
  liDate.appendChild(liDateText);
  ulContainer.appendChild(liDone);
  ulContainer.appendChild(liTitle);
  ulContainer.appendChild(liDescription);
  ulContainer.appendChild(liDate);
  ulContainer.appendChild(liAction);
  itemContainer.appendChild(ulContainer);
  mainContainer.appendChild(itemContainer);
};

function allLists() {
  const keys = Object.keys(localStorage);
  let i = 0;
  const listNames = [];
  while (i < keys.length) {
    const name = localStorage.key(i);
    if (name !== 'projectName') {
      listNames.push(name);
      AddItemToList(name);
      i += 1;
    } else i += 1;
  }
}


export { getListsFromStorage, AddItemToList, createTodoItem, allTasks, allLists };
