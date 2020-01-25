import { showMessage } from './messages.js';
import { addItemToList } from './navbar.js';
function allLists() {
  let keys = Object.keys(localStorage);
  let i = 0;
  const listNames = [];
  while (i < keys.length) {
    const name = localStorage.key(i);
    if (name != 'projectName') {
      listNames.push(name);
      addItemToList(name);
      console.log('On load !!' + localStorage.key(i));
      i += 1;
    } else i += 1;
  }
}

function allTasks() {
  const projectName = JSON.parse(localStorage.getItem('projectName'));
  const data = JSON.parse(localStorage.getItem(projectName));
  console.log('Soy nombre proyecto: ' + data);
  const mainContainer = document.getElementById('tasks-container');
  console.log(document.getElementById('toDo-item-container').childElementCount);
  while (mainContainer.lastChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  data.forEach((obj) => {
    renderTasks(obj.title, obj.description, obj.date, obj.priority);
  });
}
function renderTasks(
  title = 'My Task',
  description = 'My description',
  date = '01-01-2020',
  priority = '1'
) {
  const mainContainer = document.getElementById('tasks-container');
  const itemContainer = document.createElement('div');
  const ulContainer = document.createElement('ul');
  const liDone = document.createElement('li');
  const liDoneCheck = document.createElement('input');
  const liTitle = document.createElement('li');
  const liTitleText = document.createElement('div');
  const liDescription = document.createElement('li');
  const liDescriptionText = document.createElement('div');
  const liDate = document.createElement('li');
  const liDateText = document.createElement('div');
  const liAction = document.createElement('li');
  const ActionContainer = document.createElement('div');
  const EditBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  itemContainer.id = 'tasks-container';
  liDescriptionText.style.wordWrap = 'break-word';
  liTitleText.style.wordWrap = 'break-word';
  EditBtn.className = 'edit-btn-task';
  deleteBtn.className = 'delete-btn-task';
  EditBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';
  ActionContainer.appendChild(EditBtn);
  ActionContainer.appendChild(deleteBtn);
  liAction.appendChild(ActionContainer);

  liDescriptionText.style.width = '100%';
  liDateText.textContent = date;
  ulContainer.style.display = 'flex';
  liDescriptionText.textContent = description;
  liTitleText.textContent = title;
  liDoneCheck.type = 'checkbox';
  liDone.className = 'checkbox';
  ulContainer.className = 'navbar ul-item';

  if (priority === '3') {
    ulContainer.style.backgroundColor = 'rgba(0,255,0,0.5)';
  }

  if (priority === '2') {
    ulContainer.style.backgroundColor = 'rgba(255,255,0,0.5) ';
  }

  if (priority === '1') {
    ulContainer.style.backgroundColor = 'rgba(245,0,0,0.3)';
  }
  liTitle.appendChild(liTitleText);
  liDone.appendChild(liDoneCheck);
  liDescription.appendChild(liDescriptionText);
  liDate.appendChild(liDateText);
  ulContainer.appendChild(liDone);
  ulContainer.appendChild(liTitle);
  ulContainer.appendChild(liDescription);
  ulContainer.appendChild(liDate);
  ulContainer.appendChild(liAction);
  itemContainer.appendChild(ulContainer);
  mainContainer.appendChild(itemContainer);
}
function createTodoItem(
  title = 'My Task',
  description = 'My description',
  date = '01-01-2020',
  priority = '1'
) {
  const mainContainer = document.getElementById('tasks-container');
  const itemContainer = document.createElement('div');
  const ulContainer = document.createElement('ul');
  const liDone = document.createElement('li');
  const liDoneCheck = document.createElement('input');
  const liTitle = document.createElement('li');
  const liTitleText = document.createElement('div');
  const liDescription = document.createElement('li');
  const liDescriptionText = document.createElement('div');
  const liDate = document.createElement('li');
  const liDateText = document.createElement('div');
  const liAction = document.createElement('li');
  const ActionContainer = document.createElement('div');
  const EditBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  liDescriptionText.style.wordWrap = 'break-word';
  liTitleText.style.wordWrap = 'break-word';
  EditBtn.className = 'edit-btn-task';
  deleteBtn.className = 'delete-btn-task';
  EditBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';
  ActionContainer.appendChild(EditBtn);
  ActionContainer.appendChild(deleteBtn);
  liAction.appendChild(ActionContainer);

  liDescriptionText.style.width = '100%';
  liDateText.textContent = date;
  ulContainer.style.display = 'flex';
  liDescriptionText.textContent = description;
  liTitleText.textContent = title;
  liDoneCheck.type = 'checkbox';
  liDone.className = 'checkbox';
  ulContainer.className = 'navbar ul-item';
  try {
    const projectName = JSON.parse(localStorage.getItem('projectName'));
    if (localStorage.getItem(projectName) === null) {
      console.log('No tengo nada...');
      const hash = [
        {
          id: 1,
          title: title,
          description: description,
          priority: priority,
          done: false,
        },
      ];

      localStorage.setItem(projectName, JSON.stringify(hash));
      //  console.log(JSON.parse(localStorage.getItem('Todo')));
    } else {
      const hash = JSON.parse(localStorage.getItem(projectName));
      let ID;
      console.log(hash);
      if (hash.length > 0) {
        ID = hash[hash.length - 1].id + 1;
      } else {
        ID = 1;
      }

      const newHash = {
        id: ID,
        title: title,
        description: description,
        priority: priority,
        done: false,
      };

      hash.push(newHash);
      //console.log('Tengo infoo' + JSON.stringify(hash));
      localStorage.setItem(projectName, JSON.stringify(hash));
    }
  } catch (error) {
    console.log('Error ' + error);
  }

  if (priority === '3') {
    ulContainer.style.backgroundColor = 'rgba(0,255,0,0.5)';
  }

  if (priority === '2') {
    ulContainer.style.backgroundColor = 'rgba(255,255,0,0.5) ';
  }

  if (priority === '1') {
    ulContainer.style.backgroundColor = 'rgba(245,0,0,0.3)';
  }
  liTitle.appendChild(liTitleText);
  liDone.appendChild(liDoneCheck);
  liDescription.appendChild(liDescriptionText);
  liDate.appendChild(liDateText);
  ulContainer.appendChild(liDone);
  ulContainer.appendChild(liTitle);
  ulContainer.appendChild(liDescription);
  ulContainer.appendChild(liDate);
  ulContainer.appendChild(liAction);
  itemContainer.appendChild(ulContainer);
  mainContainer.appendChild(itemContainer);
  showMessage('Task Added Sucessfully', 'rgba(0, 255, 0, 0.5)');
}

function createTodoHeader() {
  const mainContainer = document.getElementById('task-container');
  const todoContainer = document.createElement('div');
  const titleContainer = document.createElement('ul');
  const titleDone = document.createElement('li');
  const titleName = document.createElement('li');
  const titleDescription = document.createElement('li');
  const titleDate = document.createElement('li');
  const titleAction = document.createElement('li');

  todoContainer.id = 'toDo-item-container';
  todoContainer.style.width = '100%';
  titleContainer.className = 'navbar';
  titleAction.textContent = 'Action';
  titleDone.textContent = 'Done?';
  titleDone.className = 'header-task-table';
  titleName.className = 'header-task-table';
  titleDescription.className = 'header-task-table';
  titleDate.className = 'header-task-table';
  titleAction.className = 'header-task-table';

  titleName.textContent = 'Title';
  titleDescription.textContent = 'Description';
  titleDate.textContent = 'Due Date';
  titleContainer.id = 'title-task-container';
  titleContainer.appendChild(titleDone);
  titleContainer.appendChild(titleName);
  titleContainer.appendChild(titleDescription);
  titleContainer.appendChild(titleDate);
  titleContainer.appendChild(titleAction);
  todoContainer.appendChild(titleContainer);
  mainContainer.appendChild(todoContainer);
}
function renderForm() {
  const taskContainer = document.getElementById('task-container');
  const todoContainer = document.getElementById('todo-list-content');
  const addLabel = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const formContainer = document.createElement('div');
  const inputTitleTask = document.createElement('input');
  const inputDateTask = document.createElement('input');
  const inputDescriptionTask = document.createElement('textarea');
  const cbxPriority = document.createElement('select');
  const optHigh = document.createElement('option');
  const optMid = document.createElement('option');
  const optLow = document.createElement('option');

  const AddTask = document.createElement('div');
  const CancelTask = document.createElement('div');
  CancelTask.innerText = 'Cancel';
  AddTask.innerText = 'Add';
  AddTask.id = 'add-task';
  CancelTask.id = 'cancel-task';
  inputTitleTask.id = 'title-box';
  optHigh.value = 1;
  optHigh.innerHTML = 'High';
  optMid.value = 2;
  optMid.innerHTML = 'Mid';
  optLow.value = 3;
  optLow.innerHTML = 'Low';
  formContainer.id = 'form-container';
  cbxPriority.id = 'cbx-priority';
  addLabel.textContent = 'Add Task';
  addLabel.id = 'add-task-lbl';
  inputTitleTask.placeholder = 'Title';
  inputDateTask.placeholder = 'Due Date';
  cbxPriority.placeholder = 'Priority';
  buttonContainer.className = 'd-flex';
  inputDescriptionTask.placeholder = 'Description';
  inputTitleTask.className = 'form-boxs';
  inputDateTask.className = 'form-boxs form-datetime';
  cbxPriority.className = 'form-boxs';
  inputDescriptionTask.className = 'form-boxs';
  formContainer.className = 'd-none';
  inputDateTask.type = 'date';
  inputTitleTask.id = 'title-box';
  inputDateTask.id = 'calendar-box';
  inputDescriptionTask.id = 'description-box';
  cbxPriority.id = 'cbx-box';

  AddTask.addEventListener('click', function() {
    const titleBox = document.getElementById('title-box').value;
    const dateBox = document.getElementById('calendar-box').value;
    const descriptionBox = document.getElementById('description-box').value;
    const cmbxBox = document.getElementById('cbx-box');
    const cmbxValue = cmbxBox.options[cmbxBox.selectedIndex].value.toString();

    createTodoItem(titleBox, descriptionBox, dateBox, cmbxValue);
    resetForm();
    allTasks();
  });

  CancelTask.addEventListener('click', function() {
    const form = document.getElementById('form-container');
    form.classList.remove('d-flex');
    form.classList.add('d-none');
  });
  formContainer.appendChild(addLabel);
  formContainer.appendChild(inputTitleTask);
  formContainer.appendChild(inputDateTask);
  formContainer.appendChild(inputDescriptionTask);
  cbxPriority.appendChild(optHigh);
  cbxPriority.appendChild(optMid);
  cbxPriority.appendChild(optLow);
  formContainer.appendChild(cbxPriority);
  buttonContainer.appendChild(AddTask);
  buttonContainer.appendChild(CancelTask);
  formContainer.appendChild(buttonContainer);
  todoContainer.appendChild(formContainer);
}
function resetForm() {
  const inputTitleTask = document.getElementById('title-box');
  const inputDateTask = document.getElementById('calendar-box');
  const inputDescriptionTask = document.getElementById('description-box');
  const cbxPriority = document.getElementById('cbx-box');
  inputTitleTask.value = '';
  inputDescriptionTask.value = '';
  inputDateTask.value = '';
  cbxPriority.selectedIndex = 0;
}
export { renderForm, createTodoHeader, allLists, allTasks };
