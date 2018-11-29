'use strict';

// JSX
var app = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer',
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
      { className: 'indec__option__list__list-item', key: "option:" + index },
      index + 1,
      '. ',
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
    { className: 'indec' },
    React.createElement(
      'div',
      { className: 'indec__header' },
      React.createElement(
        'div',
        { className: 'indec__center' },
        React.createElement(
          'h1',
          { className: 'indec__title' },
          app.title
        ),
        app.subTitle && React.createElement(
          'p',
          { className: 'indec__subtitle' },
          app.subTitle
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'indec__center' },
      React.createElement(
        'button',
        { className: 'indec__decision-button', disabled: length <= 0, onClick: onMakeDecision },
        'What should I do?'
      ),
      React.createElement(
        'div',
        { className: 'indec__option' },
        React.createElement(
          'div',
          { className: 'indec__option__title' },
          React.createElement(
            'p',
            null,
            (app.options && app.options.length) > 0 ? "Your options" : "No options"
          ),
          React.createElement(
            'button',
            { className: 'indec__button', onClick: onRemoveAll },
            'Remove All'
          )
        ),
        React.createElement(
          'ul',
          { className: 'indec__option__list' },
          createOptionsJSX()
        ),
        React.createElement(
          'form',
          { className: 'indec__option__form', onSubmit: onFormSubmit },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { className: 'indec__button' },
            'Add Option'
          )
        )
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderApp();
