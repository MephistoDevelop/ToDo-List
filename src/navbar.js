/* eslint-disable no-use-before-define */
import showMessage from './messages';
// eslint-disable-next-line import/no-cycle
import { allLists, allTasks, cleanTasks } from './todos';

function renderList() {
  const navContainer = document.getElementById('nav-container');
  const titleNav = document.createElement('h3');
  const buttonAddContainer = document.createElement('div');
  const listContainer = document.createElement('div');
  const textAdd = document.createElement('div');

  titleNav.textContent = 'Lists';
  buttonAddContainer.id = 'btn-add-list';
  titleNav.id = 'nav-title';
  listContainer.id = 'list-container';
  textAdd.innerText = '+ Add List';
  textAdd.id = 'add-text';

  buttonAddContainer.appendChild(textAdd);
  navContainer.appendChild(titleNav);
  navContainer.appendChild(buttonAddContainer);
  navContainer.appendChild(listContainer);

  textAdd.onclick = showMenuAdd;
  allLists();
}
function mySideBar() {
  const mainContainer = document.getElementById('row-container');
  const navContainer = document.createElement('div');
  navContainer.id = 'nav-container';
  mainContainer.appendChild(navContainer);
  renderList();
}

function showMenuAdd() {
  const addContainer = document.getElementById('btn-add-list');
  const textHide = document.getElementById('add-text');
  const nameListBox = document.createElement('input');
  const plusBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  textHide.className = 'd-none';

  plusBtn.id = 'btn-list-plus';
  deleteBtn.id = 'btn-list-delete';
  nameListBox.id = 'list-name-box';

  plusBtn.innerText = '+';
  deleteBtn.innerText = 'X';
  nameListBox.placeholder = 'Name of List';

  if (nameListBox.classList.contains('d-none')) {
    nameListBox.className = 'd-flex';
    plusBtn.className = 'd-flex';
    deleteBtn.className = 'd-flex';
    textHide.className = 'd-none';
  } else {
    addContainer.appendChild(nameListBox);
    addContainer.appendChild(plusBtn);
    addContainer.appendChild(deleteBtn);
  }

  plusBtn.onclick = () => {
    const name = document.getElementById('list-name-box').value;
    if (name !== '') {
      addItemToList(name);
      showMessage(
        'Task list Added Sucessfully , Now you can fill it with the panel',
        'rgba(0, 255, 0, 0.4)',
      );
    } else {
      showMessage('You need  to write a valid name..', 'rgba(255, 0, 0, 0.4)');
    }
    document.getElementById('list-name-box').value = '';
  };

  deleteBtn.addEventListener('click', () => {
    nameListBox.className = 'd-none';
    this.className = 'd-none';
    plusBtn.className = 'd-none';
    textHide.className = 'd-flex  ';
  });
}

function addItemToList(name) {
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
  showItem.addEventListener('click', () => {
    localStorage.setItem('projectName', JSON.stringify(showItem.value));
    allTasks();
  });

  deleteItem.addEventListener('click', () => {
    document.getElementById(`${name}`).remove();
    localStorage.removeItem(name);
    showMessage('To do List Removed.', 'rgba(255, 0, 0, 0.4)');
    cleanTasks();
  });
  listItem.appendChild(itemName);
  hideContainer.appendChild(showItem);
  hideContainer.appendChild(deleteItem);

  listItem.appendChild(hideContainer);
  listContainer.appendChild(listItem);
}

export { mySideBar, addItemToList };
