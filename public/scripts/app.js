'use strict';

// First solution
var appRoot = document.getElementById('app');

var show = {
    text: '',
    button1: 'Hide details',
    button2: 'Show details'
};

var hideAndShow = function hideAndShow() {
    show.text === '' ? show.text = 'Hey! These are some details you can now see!' : show.text = '';
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: hideAndShow },
            show.text === '' ? show.button2 : show.button1
        ),
        React.createElement(
            'p',
            null,
            show.text
        )
    );
    ReactDOM.render(template, appRoot);
};

//renderApp();

//Second better! solutions
var visibility = false;

var visibilityToggle = function visibilityToggle() {
    visibility = !visibility;
    renderApp2();
};

var renderApp2 = function renderApp2() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: visibilityToggle },
            visibility ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            null,
            visibility && 'Hey! These are some details you can now see!'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp2();
