'use strict';

var appRoot = document.getElementById('app');

var count = 0;
var addOne = function addOne() {
  count += 1;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count -= 1;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
