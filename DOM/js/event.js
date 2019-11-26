// TODO: Capitalize the list item when hovered

// One way to achieve this:
///////////////////////////////////////////////////////////////////////////

// loop through each item in the list and attach two event handlers:
// mouseover event handler, which capitalizes the list item
// mouseout event handler, which returns the list item to normal

///////////////////////////////////////////////////////////////////////////
// the above methos uses up alot of browser's memory


// another way to achieve this is to take advantage of event bubbling
///////////////////////////////////////////////////////////////////////////

const ul = document.querySelector('ul');

ul.addEventListener('mouseover', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === 'LI'){
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});

ul.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});

///////////////////////////////////////////////////////////////////////////
