function mySideBar() {
  const mainContainer = document.getElementById('row-container');
  const navContainer = document.createElement('div');
  navContainer.id = 'nav-container';
  mainContainer.appendChild(navContainer);
  renderList();
}

function renderList() {
  const navContainer = document.getElementById('nav-container');
  const buttonAddContainer = document.createElement('div');
  const listContainer = document.createElement('div');
  const textAdd = document.createElement('div');
  buttonAddContainer.id = 'btn-add-list';
  listContainer.id = 'list-container';
  textAdd.innerText = '+ Add List';
  textAdd.id = 'add-text';
  buttonAddContainer.appendChild(textAdd);
  navContainer.appendChild(buttonAddContainer);
  navContainer.appendChild(listContainer);

  textAdd.onclick = showMenuAdd;
}
function showMenuAdd() {
  const addContainer = document.getElementById('btn-add-list');
  const textHide = document.getElementById('add-text');
  const nameListBox = document.createElement('input');
  const plusBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  textHide.style.display = 'none';

  plusBtn.id = 'btn-list-plus';
  deleteBtn.id = 'btn-list-delete';
  nameListBox.id = 'list-name-box';

  plusBtn.innerText = '+';
  deleteBtn.innerText = 'X';
  nameListBox.placeholder = 'Name of List';

  addContainer.appendChild(nameListBox);
  addContainer.appendChild(plusBtn);
  addContainer.appendChild(deleteBtn);
  addContainer.onclick = '';
  plusBtn.onclick = function() {
    const name = document.getElementById('list-name-box').value;
    addItemToList(name);
    document.getElementById('list-name-box').value = '';
    nameListBox.style.display = 'none';
    plusBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    textHide.style.display = 'block';
  };
  deleteBtn.onclick = function() {
    nameListBox.style.display = 'none';
    plusBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    textHide.style.display = 'block';
  };
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

  listItem.appendChild(itemName);
  hideContainer.appendChild(showItem);
  hideContainer.appendChild(deleteItem);

  listItem.appendChild(hideContainer);
  listContainer.appendChild(listItem);
}
export { mySideBar };
