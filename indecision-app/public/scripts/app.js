'use strict';

// JSX
var app = {
  title: 'The Daily Mail',
  subTitle: 'Nick Cage wins oscar',
  options: ['One', 'Two']
};

var getSubTitle = function getSubTitle() {
  if (app.subTitle) {
    return;
  }
};

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
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

// let user = {
//   name: 'Mike',
//   age: 29,
//   location: 'London',
// };

// const getLocation = (location) => {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// };

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Annonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
