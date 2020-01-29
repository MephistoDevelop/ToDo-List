/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
import showMessage from './messages';
import renderTasks from './DOMmodule';

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
const getTasks = () => {
  const projectName = JSON.parse(localStorage.getItem('projectName')) || 'My Personal List';
  const data = JSON.parse(localStorage.getItem(projectName));
  console.log('whats up !' + data);
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
    getTasks();
  });

  deleteItem.addEventListener('click', () => {
    document.getElementById(`${name}`).remove();
    localStorage.removeItem(name);
    showMessage('To do List Removed.', 'rgba(255, 0, 0, 0.4)');
    //cleanTasks();
  });
};

export { getListsFromStorage, AddItemToList, getTasks };
