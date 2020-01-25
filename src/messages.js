function showMessage(text, color) {
  const message = document.getElementById('messages');
  message.innerText = text;
  message.style.backgroundColor = color;
  message.classList.remove('d-none');

  var delayInMilliseconds = 5000;

  setTimeout(function() {
    message.innerText = '';
    message.className = 'd-none';
  }, delayInMilliseconds);
}

export { showMessage };
