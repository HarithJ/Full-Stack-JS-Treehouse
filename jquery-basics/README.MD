JQuery was initially born to solve cross-browser compatibility issue that was created using core JS.

#JQuery vs JS
Let us compare JS code for hiding an element vs JQuery code to achieve the same, assuming that the element has a class of `.box`:

JS:
```
const box = document.querySelector('.box');
box.style.display = 'hide'
```

JQuery:
```
JQuery('.box').hide(); //JQuery is a function

OR

$('.box').hid(); //JQuery provide a shorthand for using JQuery function
```

#Animations
JQuery provides some methods for creating animations, some examples include; `fadeIn()`, `fadeOut()`, `slideUp()`

By default, all animations last for 400ms, to alter this time, JQuery allows us to pass in parameter to the methods; `fadeIn(2000)`.

example:
```
$('.box').fadeIn(2000);
```

#Altering DOM
JQuery has two methods that enable us to get or set an element (with args it sets an element, without args it gets an element):
1. `element.text()`
2. `element.html()`

For inputs, use `val()` method to retrieve the value.

#Unobtrusive JS
https://blog.teamtreehouse.com/unobtrusive-javascript-important

It has 3 rules:
1. The core content or functionality of a web page or app should be available even when JavaScript is unavailable.
2. JavaScript should be kept separate from HTML and CSS.
3. Programming in JavaScript should accommodate a variety of browser differences.

#Creating elements and appending them
```
// the dollar sign is not required, but it helps to distinguish between jquery created elements
// from other vars
const $button = $('<button>Submit</button>');
```

To append the above element to the html we use `append()` method. `append()` method adds the element to the end of the parent element:

```
parent.append($button)
```

#Event Handling
Jquery has some methods to handle events: `click()`, `keypress()`, `mouseover()`, and others.

To apply multiple events, we use the `on()` method:
```
element.on(click keypress, () => {
  //do something
  });
```

###Event delegation and event propagation
When dynamically adding elements, they might not have an event attached to them.

Event delegation is attaching an event to the parent element that fires up when the event occurs on a child element.

Event propagation is when an event travels to the parent element.

```
$('.parent').on('click', 'child', () => {
  //do something
});
```

###Event object
When handling events, we have access to the event object. It has all the information about the event.

For example, if we need the exact target on which the event occured, we can get it through the event object:
```
$('.parent').on('click', 'child', (event) => {
  //select exact child
  $(event.target)

  //we can also use this keyword
  $(this)
});
```

#DOM Traversal
When selecting elements, JQuery returns all the elements that match the selector. For example: `$('li')` returns all the list items. To select specific list item we use `eq()`method;
```
// select third list item (list starts from 0)
$('li').eq(2)
```

We can also select the siblings using these methods:
`prev()`: returns previous sibling
`next()`: returns next sibling
NOTE: we can chain these methods.

#Selectors
1. CSS Selectors.
2. JQuery Specific Selectors: `:radio`, `:checkbox`, `:password`, `:odd`, `:even`, `:visible`, `:hidden`, and more. example:
```
// select all odd anchor elements
$(a:odd);
```

```
// select all anchor links whose href attribute begins with "https://"
$('a[href^="https://"]')
```

```
// select all anchor links whose href attribute ends with ".pdf"
$('a[href$=".pdf"]')
```

#Dealing with multiple elements
When you have selected multiple elements, you don't need to loop through each and every element to add a JQuery method, JQuery methods have kind of an inbuilt looping system, example:
```
// select all odd anchor elements
const $odd = $(a:odd);

// hide all odd anchor elements
$odd.hide();
```

REMEMBER: JQuery does not return a list of plain HTML elements like JS, it returns JQuery objects that have JQuery methods available.

When need arises to iterate over a collection of items, JQuery provides `.each` method. How to use it:
```
// iterate over all links
$('a').each((index, element) => {
  // get the index and href attribute
  console.log(index, $(element).attr('href'));
});
```

#Element's Attributes
`attr()` method is used to either get an element's attribute or set/change the attribute.
```
$('#my-img').attr('alt'); // getter
$('#my-img').attr('alt', 'set alt attribute'); // setter
```

#Styling Element
`css()` method is used to either get an element's style or set/change the style.
```
$('element').css('backgroundColor'); // getter
$('element').css('backgroundColor', 'black'); // setter
```

#Adding or removing classes
```
$('element').addClass('className')
$('element').removeClass('className')
$('element').toggleClass('className')
```
