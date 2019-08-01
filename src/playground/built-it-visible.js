const appRoot = document.getElementById('app');

const show = {
    text: '',
    button1: 'Hide details',
    button2: 'Show details'
};

const hideAndShow = () => { 
    (show.text === '') ? show.text = 'Hey! These are some details you can now see!' :  show.text = '';
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={hideAndShow}>{(show.text === '') ? show.button2 : show.button1}</button>
            <p>{show.text}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();