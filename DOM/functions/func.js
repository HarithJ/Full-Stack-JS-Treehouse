function exec(func, arg) {
  func(arg);
}

exec((s) => {
  console.log(s);
}, 'hello there');


// setTimeout function is one example that takes in function as a parameter:
window.setTimeout((s) => {
  console.log(s);
}, 3000, 'hello there');
// the function is known as a callback.
