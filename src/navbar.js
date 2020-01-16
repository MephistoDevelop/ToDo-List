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
  listContainer.innerText = '- im the list of projecs';
  navContainer.appendChild(buttonAddContainer);
  navContainer.appendChild(listContainer);
}
export { mySideBar };
