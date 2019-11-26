const myTextInput2 = document.querySelector('#myTextInput');
const errorMsg = document.querySelector('#errorMsg');

myTextInput.addEventListener('focusout', () => {
  if (myTextInput2.value.length === 0) {
    errorMsg.textContent = 'You have left it blank :(';
  }
  else {
    errorMsg.textContent = '';
  }
});

myTextInput.addEventListener('focusin', () => {
  errorMsg.textContent = '';
});
