function mainContainer() {
  mainContainer = document.createElement('div');
  mainContainer.className = 'container';
  mainContainer.id = 'main-container';
  document.body.appendChild(mainContainer);
  console.log('im the body element');
}

export { mainContainer };
