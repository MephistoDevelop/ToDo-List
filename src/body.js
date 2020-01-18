import { mySideBar } from './navbar.js';
import { renderForm, createTodo } from './todos.js';

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
  createTodo();
}
function insideTodoContent() {
  const c = document.getElementById('todo-container');
  const todoContent = document.createElement('div');
  const plusBtn = document.createElement('button');
  const taskContainer = document.createElement('div');

  taskContainer.id = 'task-container';
  plusBtn.innerText = '+';
  plusBtn.id = 'add-task-btn';
  todoContent.id = 'todo-list-content';
  const titleContainer = document.createElement('div');
  titleContainer.textContent = 'Tasks To Do';
  titleContainer.id = 'todo-title-container';
  titleContainer.appendChild(plusBtn);
  plusBtn.addEventListener('click', function() {
    const form = document.getElementById('form-container');
    if (form.classList.contains('d-none')) {
      form.classList.remove('d-none');
    } else {
      form.classList.remove('d-flex');
      form.classList.add('d-none');
    }
  });
  c.appendChild(titleContainer);
  c.appendChild(todoContent);
  c.appendChild(taskContainer);
  renderForm();
}

export { mainContainer };
