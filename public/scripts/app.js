'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var template = React.createElement(
    'p',
    null,
    'This is JSX from app.js! It works! Babel I mean! '
);
/*var template = React.createElement("h1", {
    id: "check"
  }, "Something new!");*/
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
