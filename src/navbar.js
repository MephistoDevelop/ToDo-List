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
  buttonAddContainer.id = 'btn-add-list';
  listContainer.id = 'list-container';
  buttonAddContainer.innerText = '+ Add List';
  navContainer.appendChild(buttonAddContainer);
  navContainer.appendChild(listContainer);

  buttonAddContainer.onclick = showMenuAdd;
}
function showMenuAdd() {
  const addContainer = document.getElementById('btn-add-list');
  const nameListBox = document.createElement('input');
  const plusBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  plusBtn.id = 'btn-list-plus';
  deleteBtn.id = 'btn-list-delete';

  plusBtn.innerText = '+';
  deleteBtn.innerText = 'X';
  nameListBox.placeholder = 'Name of List';
  addContainer.innerText = '';

  addContainer.appendChild(nameListBox);
  addContainer.appendChild(plusBtn);
  addContainer.appendChild(deleteBtn);
  addContainer.onclick = '';
  plusBtn.onclick = function() {
    showAddBtn();
    addItemToList();
  };
}

function showAddBtn() {
  const addContainer = document.getElementById('btn-add-list');
  console.log(addContainer.childElementCount);
  addContainer.children[0].remove();
  addContainer.children[1].remove();
  addContainer.children[0].remove();
  addContainer.innerText = '+ Add List';
}
function addItemToList() {
  const listContainer = document.getElementById('list-container');
  const listItem = document.createElement('div');
  const itemName = document.createElement('div');
  const showItem = document.createElement('div');
  const deleteItem = document.createElement('div');
  const hideContainer = document.createElement('div');

  itemName.innerText = 'My List';
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
