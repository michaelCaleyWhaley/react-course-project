'use strict';

// JSX
var app = {
  title: 'The Daily Mail',
  subTitle: 'Nick Cage wins oscar',
  options: []
};

var getSubTitle = function getSubTitle() {
  if (app.subTitle) {
    return;
  }
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
  }
  renderApp();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var createOptionsJSX = function createOptionsJSX() {
  return app.options.map(function (option, index) {
    return React.createElement(
      'li',
      { key: "option:" + index },
      option
    );
  });
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * length);
  var option = app.options[randomNum];
  alert(option);
};

var renderApp = function renderApp() {
  var length = app.options.length;

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      'p',
      null,
      app.subTitle
    ),
    React.createElement(
      'p',
      null,
      (app.options && app.options.length) > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      'button',
      { disabled: length <= 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      createOptionsJSX()
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderApp();
