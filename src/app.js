console.log('App.js is running!');

// JSX - JavaScript XML

var template = <p>This is JSX from app.js! It works! Babel I mean! </p>;
/*var template = React.createElement("h1", {
    id: "check"
  }, "Something new!");*/
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);