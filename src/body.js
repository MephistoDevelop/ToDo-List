import { mySideBar } from './navbar.js';

function mainContainer() {
  const mainContainer = document.createElement('div');
  const headerContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  const todosContainer = document.createElement('div');
  const rowContainer = document.createElement('div');

  rowContainer.id = 'row-container';
  contentContainer.id = 'content-container';
  headerContainer.id = 'header-container';
  mainContainer.id = 'main-container';
  todosContainer.id = 'todo-container';

  todosContainer.textContent = 'Hello im todo List Container';
  headerContainer.textContent = 'To Do Task Manager';
  document.body.appendChild(mainContainer);
  mainContainer.appendChild(headerContainer);
  mainContainer.appendChild(contentContainer);
  contentContainer.appendChild(rowContainer);
  mySideBar();
  rowContainer.appendChild(todosContainer);
  insideTodoContent();
}
function insideTodoContent() {
  const c = document.getElementById('todo-container');
  const todoContent = document.createElement('div');

  todoContent.id = 'todo-list-content';
  todoContent.innerText = 'im the content';
  c.appendChild(todoContent);
}

export { mainContainer };
