// document is a global variable
// getElementById is a method which belongs to document object
const myHeading = document.getElementById('myHeading');

// tell headline to listen for events
myHeading.addEventListener('click', () => {
  myHeading.style.color = 'red';
});

const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});



const myList = document.getElementsByTagName('li');
const myListButton = document.getElementById('myListButton');

myListButton.addEventListener('click', () => {
  for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.display = 'list-item';
  }
});
