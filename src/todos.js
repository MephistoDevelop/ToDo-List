function renderTodos() {}
function renderForm() {
  const todoContainer = document.getElementById('todo-list-content');
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
  inputTitleTask.placeholder = 'Title';
  inputDateTask.placeholder = 'Due Date';
  cbxPriority.placeholder = 'Priority';
  buttonContainer.className = 'd-flex';
  inputDescriptionTask.placeholder = 'Description';
  inputTitleTask.className = 'form-boxs';
  inputDateTask.className = 'form-boxs';
  cbxPriority.className = 'form-boxs';
  inputDescriptionTask.className = 'form-boxs';
  formContainer.className = 'd-none';
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
export { renderTodos, renderForm };
