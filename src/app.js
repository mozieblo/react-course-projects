console.log('App.js is running!');



const app = {
    title: 'Indecision Start App',
    subtitle: 'Choose your destiny',
    options: ['one', 'two']
};
  const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p> Subtitle : {app.subtitle}</p>}
        <p>{(app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
        <ol>
            <li>New item</li>
            <li>Second item</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);