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
  const deleteBtn = document.createElement('button');
  const titleContainer = document.createElement('div');
  const todoContent = document.createElement('div');
  const taskContainer = document.createElement('div');
  const taskBelowContainer = document.createElement('div');
  const getmainContainer = document.getElementById('row-container');
  const addContainer = document.getElementById('btn-add-list');
  const textHide = document.getElementById('add-text');


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


  return { RenderMainContainer, renderSideBar };
};

export default DOMmodule;
