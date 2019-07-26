'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision Start App',
    subtitle: 'Choose your destiny',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' Subtitle : ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
