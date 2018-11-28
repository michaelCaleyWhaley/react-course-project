
// JSX
const app = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer',
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
  const { length } = app.options;
  const template = (
    <div className="indec">
      <div className="indec__header">
        <h1 className="indec__title">{app.title}</h1>
        {app.subTitle && <p className="indec__subtitle">{app.subTitle}</p>}
      </div>


      <div className="indec__option">
        <p>{(app.options && app.options.length) > 0 ? "Your options" : "No options"}</p>
        <button onClick={onRemoveAll}>Remove All</button>
      </div>
      <button disabled={length <= 0} onClick={onMakeDecision}>What should I do?</button>

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