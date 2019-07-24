console.log('App.js is running!');

// JSX - JavaScript XML
/*var template = React.createElement("h1", {
    id: "check"
  }, "Something new!");*/

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info.</p>
        <ol>
            <li>New item</li>
            <li>Second item</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Magdzialena Blala</h1>
        <p>Age: 32</p>
        <p>Location: Lodz</p>
    </div>
);
var appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);