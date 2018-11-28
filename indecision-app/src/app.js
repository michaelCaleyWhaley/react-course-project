
// JSX
const app = {
  title: 'The Daily Mail',
  subTitle: 'Nick Cage wins oscar',
  options: []
};

const getSubTitle = () => {
  if (app.subTitle) {
    return;
  }
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
  }
  renderApp();
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const createOptionsJSX = () => {
  return app.options.map((option, index) => <li key={"option:" + index}>{option}</li>);
};

const onMakeDecision = () => {
  const randomNum = Math.floor((Math.random() * length));
  const option = app.options[randomNum];
  alert(option);
};

const renderApp = () => {
  const {length} = app.options;
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{(app.options && app.options.length) > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={length <= 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          createOptionsJSX()
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();