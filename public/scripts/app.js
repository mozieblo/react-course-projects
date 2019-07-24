'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
/*var template = React.createElement("h1", {
    id: "check"
  }, "Something new!");*/

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'New item'
        ),
        React.createElement(
            'li',
            null,
            'Second item'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Magdzialena Blala'
    ),
    React.createElement(
        'p',
        null,
        'Age: 32'
    ),
    React.createElement(
        'p',
        null,
        'Location: Lodz'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
