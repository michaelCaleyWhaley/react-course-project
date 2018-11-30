
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
  return app.options.map((option, index) =>
    <li className="indec__option__list__list-item" key={"option:" + index}>
      {index + 1}. {option}
    </li>);
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
        <div className="indec__center">
          <h1 className="indec__title">{app.title}</h1>
          {app.subTitle && <p className="indec__subtitle">{app.subTitle}</p>}
        </div>
      </div>
      <div className="indec__center">
        <button className="indec__decision-button" disabled={length <= 0} onClick={onMakeDecision}>What should I do?</button>


        <div className="indec__option">
          <div className="indec__option__title">
            <p>{(app.options && app.options.length) > 0 ? "Your options" : "No options"}</p>
            <button className="indec__button" onClick={onRemoveAll}>Remove All</button>
          </div>
          <ul className="indec__option__list">
            {
              createOptionsJSX()
            }
          </ul>
          <form className="indec__option__form" onSubmit={onFormSubmit}>
            <input className="indec__option__form__input" type="text" name="option" />
            <button className="indec__button">Add Option</button>
          </form>
        </div>


      </div>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();