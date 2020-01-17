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
  nameListBox.id = 'list-name-box';

  plusBtn.innerText = '+';
  deleteBtn.innerText = 'X';
  nameListBox.placeholder = 'Name of List';
  addContainer.innerText = '';

  addContainer.appendChild(nameListBox);
  addContainer.appendChild(plusBtn);
  addContainer.appendChild(deleteBtn);
  addContainer.onclick = '';
  plusBtn.onclick = function() {
    // showAddBtn();
    const name = document.getElementById('list-name-box').value;
    addItemToList(name);
  };
  deleteBtn.onclick = function() {
    nameListBox.style.display = 'none';
    plusBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    addContainer.innerText = '+ Add List';
    //addContainer.onclick = showHiden;
  };
}

function showHiden() {
  const nameListBox = document.getElementById('list-name-box');
  const plusBtn = document.getElementById(('btn-list-plus');
  const deleteBtn = document.getElementById(('btn-list-delete');
  nameListBox.style.display = 'block';
  plusBtn.style.display = 'block';
  deleteBtn.style.display = 'block';
}

function showAddBtn(box, btnPlus, btnDelete) {
  const addContainer = document.getElementById('btn-add-list');
  console.log(addContainer.childElementCount);
  addContainer.innerText = '+ Add List';
  addContainer.onclick = function() {
    this.innerText = '';
    this.appendChild(box);
    this.appendChild(btnPlus);
    this.appendChild(btnDelete);
    this.onclick = '';
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
