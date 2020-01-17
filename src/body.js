import { mySideBar } from './navbar.js';
import { renderTodos } from './todos.js';

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
  const plusBtn = document.createElement('button');

  plusBtn.innerText = '+';
  plusBtn.id = 'add-task-btn';
  todoContent.id = 'todo-list-content';
  todoContent.innerText = 'im the content';
  const titleContainer = document.createElement('div');
  titleContainer.textContent = 'Tasks To Do';
  titleContainer.id = 'todo-title-container';
  titleContainer.appendChild(plusBtn);
  c.appendChild(titleContainer);
  c.appendChild(todoContent);
}

export { mainContainer };
