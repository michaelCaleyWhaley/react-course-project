const app = {
  toggled: false,
};

const domContainer = document.getElementById('app');

const handleOnClick = () => {
  app.toggled = !app.toggled;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={handleOnClick}>
        {!app.toggled ? 'Show details' : 'Hide details'}
      </button>
      {app.toggled === true && (<p>These are some details!</p>)}
    </div>
  );
  ReactDOM.render(jsx, domContainer);
};
render();