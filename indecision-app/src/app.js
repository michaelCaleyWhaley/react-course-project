
// JSX
const app = {
  title: 'The Daily Mail',
  subTitle: 'Nick Cage wins oscar',
  options: ['One', 'Two']
};

var getSubTitle = () => {
  if (app.subTitle) {
    return ;
  }
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{(app.options && app.options.length) > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      
    </ol>
  </div>
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

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);