'use strict';

var app = {
  toggled: false
};

var domContainer = document.getElementById('app');

var handleOnClick = function handleOnClick() {
  app.toggled = !app.toggled;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: handleOnClick },
      !app.toggled ? 'Show details' : 'Hide details'
    ),
    app.toggled === true && React.createElement(
      'p',
      null,
      'These are some details!'
    )
  );
  ReactDOM.render(jsx, domContainer);
};
render();
