function createTodoItem() {
  const mainContainer = document.getElementById('toDo-item-container');
  const itemContainer = document.createElement('div');
  const ulContainer = document.createElement('ul');
  const liDone = document.createElement('li');
  const liDoneCheck = document.createElement('input');
  const liTitle = document.createElement('li');
  const liTitleText = document.createElement('p');
  const liDescription = document.createElement('li');
  const liDescriptionText = document.createElement('p');
  const liDate = document.createElement('li');
  const liDateText = document.createElement('p');

  liDateText.textContent = 'Due Date';
  ulContainer.style.display = 'flex';
  liDescriptionText.textContent = 'Description text';
  liTitleText.textContent = 'Title';
  liDoneCheck.type = 'checkbox';
  ulContainer.className = 'navbar';
  liTitle.appendChild(liTitleText);
  liDone.appendChild(liDoneCheck);
  liDescription.appendChild(liDescriptionText);
  liDate.appendChild(liDateText);
  ulContainer.appendChild(liDone);
  ulContainer.appendChild(liTitle);
  ulContainer.appendChild(liDescription);
  ulContainer.appendChild(liDate);
  itemContainer.appendChild(ulContainer);
  mainContainer.appendChild(itemContainer);
}

function createTodoHeader() {
  const mainContainer = document.getElementById('task-container');
  const todoContainer = document.createElement('div');
  const titleContainer = document.createElement('div');
  const titleDone = document.createElement('div');
  const titleName = document.createElement('div');
  const titleDescription = document.createElement('div');
  const titleDate = document.createElement('div');
  const titleAction = document.createElement('div');

  todoContainer.id = 'toDo-item-container';
  todoContainer.style.width = '100%';
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
  AddTask.addEventListener('click', function() {
    console.log('Clickeado');
    createTodoItem();
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
export { renderForm, createTodoHeader };
