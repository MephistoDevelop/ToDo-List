import { mySideBar } from './navbar';
import {
  renderForm, createTodoHeader, allTasks, resetForm,
} from './todos';

function MainContainer() {
  const mainContainer = document.createElement('div');
  const headerContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  const todosContainer = document.createElement('div');
  const rowContainer = document.createElement('div');
  const messages = document.createElement('div');
  messages.id = 'messages';
  messages.className = 'd-none';
  rowContainer.id = 'row-container';
  contentContainer.id = 'content-container';
  headerContainer.id = 'header-container';
  mainContainer.id = 'main-container';
  todosContainer.id = 'todo-container';
  headerContainer.textContent = 'To Do Task Manager';
  document.body.appendChild(mainContainer);
  mainContainer.appendChild(headerContainer);
  mainContainer.appendChild(messages);
  mainContainer.appendChild(contentContainer);
  contentContainer.appendChild(rowContainer);
  mySideBar();
  rowContainer.appendChild(todosContainer);
  insideTodoContent();
  createTodoHeader();
}

function insideTodoContent() {
  const c = document.getElementById('todo-container');
  const todoContent = document.createElement('div');
  const plusBtn = document.createElement('button');
  const taskContainer = document.createElement('div');
  const taskBelowContainer = document.createElement('div');

  taskBelowContainer.id = 'tasks-container';
  taskContainer.id = 'task-container';
  plusBtn.innerText = '+';
  plusBtn.id = 'add-task-btn';
  todoContent.id = 'todo-list-content';
  const titleContainer = document.createElement('div');
  titleContainer.textContent = 'Tasks To Do';
  titleContainer.id = 'todo-title-container';
  titleContainer.appendChild(plusBtn);
  plusBtn.addEventListener('click', () => {
    const form = document.getElementById('form-container');
    const data = localStorage.getItem('Todo') || {};
    const name = localStorage.getItem('projectName') || 'Default';
    if (form.classList.contains('d-none')) {
      form.classList.remove('d-none');
    } else {
      form.classList.remove('d-flex');
      form.classList.add('d-none');
    }
    allTasks();
    resetForm();
  });
  c.appendChild(titleContainer);
  c.appendChild(todoContent);
  c.appendChild(taskContainer);
  c.appendChild(taskBelowContainer);
  renderForm();
}

export default MainContainer;
