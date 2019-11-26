##Global objects and methods
We have some methods like `alert()` and some properties like `location.href`, these are all part of the browsers global environment. There are many other global variables and they are all part of single global object which, in browsers, is known as `window`.

##What is DOM?
DOM (Document Object Model) is a "map" which JS uses to manipulate the webpage. It is represented in a tree-like structure. `document` is the root of the tree.

##Selecting Elements in DOM
There are various methods to select elements:
1. getElementById: takes in the id of the element you want to select.
2. getElementsByTag: takes in the tag (p, h1, li) of the elements you want to select. Returns all elements with the tag.
3. getElementsByClassName: takes in the class of an element. Returns all elements with the class name.
4. querySelector: takes in css selector, eg: `.className` `#id` `h1`. You can also add this property to another element.
5. querySelectorAll: takes in css selector and returns all elements that have the selector.

NOTE: before using a method, check browser support, you can use MDN or caniuse.com.

##Manipulating Text
You have 2 methods to help you achieve this:
1. textContent: This property returns the content of an element. If assigned, it changes the content.
2. innerHTML: This property returns the HTML of an element. If assigned, it changes the HTML.
3. value: This property is only available for inputs.

##Attributes
You can get or set an elements attributes by just using a dot and the attribute name. For example:
```
input.type // returns the type attribute
input.type = 'checkbox' // sets the type attribute
```
The only exception is `class`, instead use `className`

##Styles
You can set styles using an element's `style` property: `element.style`.
The `style` property returns only the inline styles and not any other styles applied by a separate style sheet.
Examples:
```
element.style.color = darkBlue
element.style.backgroundColor = lightBlue
```

##Create New Elements
We can create new elements by using `createElement` property, eg: `document.createElement('div')`.
NOTE: `createElement` just creates an element, you then need to insert it into DOM using methods like `appendChild`

##Remove Elements
Remove elements by using `removeChild` method. First you would need to select an element, example:
```
ul = document.querySelector('ul');
li = document.querySelector('li:last-child');
ul.removeChild(li);
```

##Events
An event is any kind of an action a user performs, like moving the mouse, or pressing an up arrow key, or click an element, etc.

NOTE: we need to understand functions more before moving forward, hence look into functions folder.

We have `addEventListener` method that we can use on an element, document, window...
```
button.addEventListener('click', () => {
  //call back function
});
```

##Event Bubbling
Event bubbling means that any event that occurs on a child also occurs on a parent and keeps on travelling up the tree. For example, if an `li` is clicked, it's parent; `ul` will also receive the click event, the `body` would also receive it and finally the `document` would also receive it.

##DOM traversing
It is selecting an element based on its relationship to another element within the DOM

`parentNode` is a property that returns parent of current element. Eg:
```
li = document.querySelector(#itemToBeRmvd);
parent = li.parentNode;
parent.removeChild(li);
```

`previousElementSibling` Property that returns previous sibling of an element.
`insertBefore` method that inserts an element before another element of a given parent element.
```
let li = document.querySelector(`#item`);
let prevLi = li.previousElementSibling;
let ul = li.parentNode;
ul.insertBefore(li, prevLi);
```

`children` Property that returns all the children
`firstElementChild`
`lastElementChild`
