/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import {
  getListsFromStorage, AddItemToList, allTasks, createTodoItem, hideForm,
} from './Todos';

const DOMmodule = () => {
  const mainContainer = document.createElement('div');
  const headerContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  const todosContainer = document.createElement('div');
  const rowContainer = document.createElement('div');
  const messages = document.createElement('div');
  const navContainer = document.createElement('div');
  const titleNav = document.createElement('h3');
  const buttonAddContainer = document.createElement('div');
  const listContainer = document.createElement('div');
  const textAdd = document.createElement('div');
  const nameListBox = document.createElement('input');
  const plusBtn = document.createElement('button');
  const plusBtnList = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const titleContainer = document.createElement('div');
  const todoContent = document.createElement('div');
  const taskContainer = document.createElement('div');
  const taskBelowContainer = document.createElement('div');
  let addContainer = document.getElementById('btn-add-list');
  let textHide = document.getElementById('add-text');
  const ulTitleContainer = document.createElement('ul');
  const titleDone = document.createElement('li');
  const titleName = document.createElement('li');
  const titleDescription = document.createElement('li');
  const titleDate = document.createElement('li');
  const titleAction = document.createElement('li');
  const EditTask = document.createElement('div');
  const AddTask = document.createElement('div');
  const CancelTask = document.createElement('div');
  const itemListName = document.createElement('div');

  const renderMessages = (text, color) => {
    const message = document.getElementById('messages');
    message.innerText = text;
    message.style.backgroundColor = color;
    message.classList.remove('d-none');

    const delayInMilliseconds = 5000;

    setTimeout(() => {
      message.innerText = '';
      message.className = 'd-none';
    }, delayInMilliseconds);
  };


  const renderSideBar = (() => {
    navContainer.id = 'nav-container';
    titleNav.textContent = 'Lists';
    buttonAddContainer.id = 'btn-add-list';
    titleNav.id = 'nav-title';
    listContainer.id = 'list-container';
    textAdd.innerText = '+ Add List';
    textAdd.id = 'add-text';

    mainContainer.appendChild(navContainer);
    buttonAddContainer.appendChild(textAdd);
    navContainer.appendChild(titleNav);
    navContainer.appendChild(buttonAddContainer);
    navContainer.appendChild(listContainer);
    rowContainer.appendChild(navContainer);
    // textAdd.onclick = showMenuAdd;
  })();

  const RenderMainContainer = (() => {
    messages.id = 'messages';
    messages.className = 'd-none';
    rowContainer.id = 'row-container';
    contentContainer.id = 'content-container';
    headerContainer.id = 'header-container';
    mainContainer.id = 'main-container';
    todosContainer.id = 'todo-container';
    headerContainer.textContent = 'To Do Task Manager';

    titleContainer.textContent = 'Tasks To Do';
    titleContainer.id = 'todo-title-container';
    itemListName.id = 'item-name';
    itemListName.textContent = '------';
    plusBtn.id = 'btn-list-plus';
    plusBtn.innerText = '+';
    taskBelowContainer.id = 'tasks-container';
    taskContainer.id = 'task-container';
    plusBtn.innerText = '+';
    plusBtn.id = 'add-task-btn';
    todoContent.id = 'todo-list-content';
    titleContainer.textContent = 'Tasks To Do';
    titleContainer.id = 'todo-title-container';
    rowContainer.appendChild(todosContainer);
    document.body.appendChild(mainContainer);
    mainContainer.appendChild(headerContainer);
    mainContainer.appendChild(messages);
    mainContainer.appendChild(contentContainer);
    contentContainer.appendChild(rowContainer);
    const c = document.getElementById('todo-container');

    c.appendChild(titleContainer);
    c.appendChild(itemListName);
    c.appendChild(todoContent);
    c.appendChild(taskContainer);
    c.appendChild(taskBelowContainer);
    titleContainer.appendChild(plusBtn);
  })();

  const renderHeaderTab = (() => {
    const headerTodoContainer = document.createElement('div');
    const headerMainContainer = document.getElementById('task-container');
    headerTodoContainer.id = 'toDo-item-container';
    headerTodoContainer.style.width = '100%';
    ulTitleContainer.className = 'navbar';
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
    ulTitleContainer.id = 'title-task-container';

    ulTitleContainer.appendChild(titleDone);
    ulTitleContainer.appendChild(titleName);
    ulTitleContainer.appendChild(titleDescription);
    ulTitleContainer.appendChild(titleDate);
    ulTitleContainer.appendChild(titleAction);
    headerTodoContainer.appendChild(ulTitleContainer);
    headerMainContainer.appendChild(headerTodoContainer);
  })();

  const renderMenuAddListItem = () => {
    addContainer = document.getElementById('btn-add-list');
    textHide = document.getElementById('add-text');

    textHide.className = 'd-none';

    plusBtnList.id = 'btn-list-plus';
    cancelBtn.id = 'btn-list-delete';
    nameListBox.id = 'list-name-box';

    plusBtnList.innerText = '+';
    cancelBtn.innerText = 'X';
    nameListBox.placeholder = 'Name of List';

    if (nameListBox.classList.contains('d-none')) {
      nameListBox.classList.remove('d-none');
      plusBtnList.classList.remove('d-none');
      cancelBtn.classList.remove('d-none');
      textHide.className = 'd-none';
    } else {
      addContainer.appendChild(nameListBox);
      addContainer.appendChild(plusBtnList);
      addContainer.appendChild(cancelBtn);
    }
  };

  const renderForm = (() => {
    const todoContainerForm = document.getElementById('todo-list-content');
    const addLabel = document.createElement('div');
    const buttonContainer = document.createElement('div');
    const formContainer = document.createElement('div');
    const inputIdTask = document.createElement('input');
    const inputTitleTask = document.createElement('input');
    const inputDateTask = document.createElement('input');
    const inputDescriptionTask = document.createElement('textarea');
    const cbxPriority = document.createElement('select');
    const optHigh = document.createElement('option');
    const optMid = document.createElement('option');
    const optLow = document.createElement('option');

    inputIdTask.id = 'txtid';
    inputIdTask.type = 'hidden';
    CancelTask.innerText = 'Cancel';
    AddTask.innerText = 'Add';
    AddTask.id = 'add-task';
    EditTask.innerText = 'Edit';
    EditTask.id = 'edit-task';
    EditTask.className = 'd-none';
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
    formContainer.appendChild(addLabel);
    formContainer.appendChild(inputIdTask);
    formContainer.appendChild(inputTitleTask);
    formContainer.appendChild(inputDateTask);
    formContainer.appendChild(inputDescriptionTask);
    cbxPriority.appendChild(optHigh);
    cbxPriority.appendChild(optMid);
    cbxPriority.appendChild(optLow);
    formContainer.appendChild(cbxPriority);
    buttonContainer.appendChild(EditTask);
    buttonContainer.appendChild(AddTask);
    buttonContainer.appendChild(CancelTask);
    formContainer.appendChild(buttonContainer);
    todoContainerForm.appendChild(formContainer);


    EditTask.addEventListener('click', () => {
      AddTask.classList.remove('d-none');
      EditTask.className = 'd-none';
      const id = document.getElementById('txtid').value;
      const projectName = JSON.parse(localStorage.getItem('projectName'));
      const arr = JSON.parse(localStorage.getItem(projectName));

      arr.forEach((obj) => {
        if (obj.id.toString() === id) {
          obj.title = document.getElementById('title-box').value;
          obj.date = document.getElementById('calendar-box').value;
          obj.description = document.getElementById('description-box').value;
          const cmbxBox = document.getElementById('cbx-box');
          const cmbxValue = cmbxBox.options[
            cmbxBox.selectedIndex
          ].value.toString();
          obj.priority = cmbxValue;
        }
      });

      localStorage.setItem(projectName, JSON.stringify(arr));

      resetForm();
      hideForm();
      allTasks();
    });
  })();

  const resetForm = () => {
    const inputTitleTask = document.getElementById('title-box');
    const inputDateTask = document.getElementById('calendar-box');
    const inputDescriptionTask = document.getElementById('description-box');
    const cbxPriority = document.getElementById('cbx-box');
    inputTitleTask.value = '';
    inputDescriptionTask.value = '';
    inputDateTask.value = '';
    cbxPriority.selectedIndex = 0;
  };

  const renderLists = () => {
    const navContainerList = document.getElementById('nav-container');
    const titleNavLists = document.createElement('h3');
    const buttonAddContainerLists = document.createElement('div');
    const listContainerId = document.createElement('div');
    const textAddList = document.createElement('div');

    titleNavLists.textContent = 'Lists';
    buttonAddContainerLists.id = 'btn-add-list';
    titleNavLists.id = 'nav-title';
    listContainerId.id = 'list-container';
    textAddList.innerText = '+ Add List';
    textAddList.id = 'add-text';

    buttonAddContainerLists.appendChild(textAddList);
    navContainerList.appendChild(titleNavLists);
    navContainerList.appendChild(buttonAddContainerLists);
    navContainerList.appendChild(listContainerId);

    getListsFromStorage();
  };

  const renderTasks = (
    id = 1,
    title = 'My Task',
    description = 'My description',
    date = '01-01-2020',
    priority = '1',
    Done = false,
  ) => {
    const mainContainerTask = document.getElementById('tasks-container');
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

    ulContainer.id = `id${id}`;
    itemContainer.id = 'tasks-container';
    liDescriptionText.style.wordWrap = 'break-word';
    liTitleText.style.wordWrap = 'break-word';
    EditBtn.className = 'edit-btn-task';
    deleteBtn.className = 'delete-btn-task';
    EditBtn.textContent = 'Edit';
    EditBtn.id = `editid${id}`;
    deleteBtn.textContent = 'Delete';
    liDoneCheck.id = `check${id}`;
    if (Done) liDoneCheck.checked = true;
    liDoneCheck.addEventListener('change', () => {
      const projectName = JSON.parse(localStorage.getItem('projectName'));
      const arr = JSON.parse(localStorage.getItem(projectName));
      arr.splice(id - 1, 1);

      if (liDoneCheck.checked) {
        arr.forEach((obj) => {
          if (obj.id === id) {
            obj.done = true;
          }
        });
        localStorage.setItem(projectName, JSON.stringify(arr));
      } else {
        arr.forEach((obj) => {
          if (obj.id === id) {
            obj.done = false;
          }
        });
        localStorage.setItem(projectName, JSON.stringify(arr));
      }
    });

    deleteBtn.addEventListener('click', () => {
      const projectName = JSON.parse(localStorage.getItem('projectName'));
      const arr = JSON.parse(localStorage.getItem(projectName));
      arr.splice(id - 1, 1);

      localStorage.setItem(projectName, JSON.stringify(arr));
      allTasks();
    });

    EditBtn.addEventListener('click', () => {
      const AddTaskBtnEdit = document.getElementById('add-task');
      const EditTaskBtnEdit = document.getElementById('edit-task');
      AddTaskBtnEdit.className = 'd-none';
      EditTaskBtnEdit.classList.remove('d-none');
      const projectName = JSON.parse(localStorage.getItem('projectName'));
      const form = document.getElementById('form-container');
      form.classList.remove('d-none');
      form.classList.add('d-flex');
      const arr = JSON.parse(localStorage.getItem(projectName));
      arr.forEach((obj) => {
        if (obj.id === id) {
          const inputIdTask = document.getElementById('txtid');
          const inputTitleTask = document.getElementById('title-box');
          const inputDateTask = document.getElementById('calendar-box');
          const inputDescriptionTask = document.getElementById('description-box');
          const cbxPriority = document.getElementById('cbx-box');
          inputIdTask.value = id;
          inputTitleTask.value = obj.title;
          inputDescriptionTask.value = obj.description;
          inputDateTask.value = obj.date;
          if (obj.priority === '1') cbxPriority.selectedIndex = 0;
          if (obj.priority === '2') cbxPriority.selectedIndex = 1;
          if (obj.priority === '3') cbxPriority.selectedIndex = 2;
        }
      });
    });

    ActionContainer.appendChild(deleteBtn);
    ActionContainer.appendChild(EditBtn);
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
    mainContainerTask.appendChild(itemContainer);
  };

  const AddEventsListeners = (() => {
    textAdd.addEventListener('click', () => {
      renderMenuAddListItem();
    });

    plusBtnList.addEventListener('click', () => {
      const name = document.getElementById('list-name-box').value;
      if (name !== '') {
        AddItemToList(name);
        renderMessages(
          'Task list Added Sucessfully , Now you can fill it with the panel',
          'rgba(0, 255, 0, 0.4)',
        );
      } else {
        renderMessages('You need  to write a valid name..', 'rgba(255, 0, 0, 0.4)');
      }
      document.getElementById('list-name-box').value = '';
    });

    cancelBtn.addEventListener('click', () => {
      nameListBox.className = 'd-none';
      cancelBtn.className = 'd-none';
      plusBtnList.className = 'd-none';
      textHide.className = 'd-flex  ';
    });

    AddTask.addEventListener('click', () => {
      const titleBox = document.getElementById('title-box').value;
      const dateBox = document.getElementById('calendar-box').value;
      const descriptionBox = document.getElementById('description-box').value;
      const cmbxBox = document.getElementById('cbx-box');
      const cmbxValue = cmbxBox.options[cmbxBox.selectedIndex].value.toString();

      if (titleBox === '' || descriptionBox === '' || dateBox === '') {
        renderMessages('Fill all of the fields correctly after continue', 'red');
      } else {
        createTodoItem(titleBox, descriptionBox, dateBox, cmbxValue);
        resetForm();
        // allTasks();
        const form = document.getElementById('form-container');
        form.classList.remove('d-flex');
        form.classList.add('d-none');
      }
    });

    plusBtn.addEventListener('click', () => {
      const form = document.getElementById('form-container');
      if (form.classList.contains('d-none')) {
        form.classList.remove('d-none');
      } else {
        form.classList.remove('d-flex');
        form.classList.add('d-none');
      }
      // allTasks();
      resetForm();
    });

    CancelTask.addEventListener('click', () => {
      const editBtn = document.getElementById('edit-task');
      const form = document.getElementById('form-container');
      form.classList.remove('d-flex');
      form.classList.add('d-none');
      AddTask.classList.remove('d-none');
      editBtn.classList.add('d-none');
    });
  })();

  return {
    RenderMainContainer, renderSideBar, renderHeaderTab, AddEventsListeners, renderMessages, renderForm, renderLists, renderTasks,
  };
};

export default DOMmodule;
