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
  const getmainContainer = document.getElementById('row-container');
  let addContainer = document.getElementById('btn-add-list');
  let textHide = document.getElementById('add-text');
  const TaskmainContainer = document.getElementById('task-container');
  const todoContainer = document.createElement('div');
  const ulTitleContainer = document.createElement('ul');
  const titleDone = document.createElement('li');
  const titleName = document.createElement('li');
  const titleDescription = document.createElement('li');
  const titleDate = document.createElement('li');
  const titleAction = document.createElement('li');

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
    //textAdd.onclick = showMenuAdd;
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

  const AddEventsListeners = (() => {
    textAdd.addEventListener('click', () => {
      renderMenuAddListItem();
    });

    plusBtnList.addEventListener('click', () => {
      const name = document.getElementById('list-name-box').value;
      if (name !== '') {
        // addItemToList(name);
        //showMessage(
        //'Task list Added Sucessfully , Now you can fill it with the panel',
        //'rgba(0, 255, 0, 0.4)',
        //);
      } else {
        // showMessage('You need  to write a valid name..', 'rgba(255, 0, 0, 0.4)');
      }
      document.getElementById('list-name-box').value = '';
    });

    cancelBtn.addEventListener('click', () => {
      nameListBox.className = 'd-none';
      cancelBtn.className = 'd-none';
      plusBtnList.className = 'd-none';
      textHide.className = 'd-flex  ';
    });
  })();



  return { RenderMainContainer, renderSideBar, renderHeaderTab, AddEventsListeners };
};

export default DOMmodule;
