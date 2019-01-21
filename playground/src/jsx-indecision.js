
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


// html,
// body {
//   margin: 0;
//   padding: 0;
// }

// html {
//   height: 100%;
//   font-family: Helvetica, sans-serif
// }

// body {
//   min-height: 100%;
//   box-sizing: border-box;
// }

// p {
//   margin: 0;
// }

// .indec {
//   &__center {
//     max-width: 700px;
//     margin: 0 auto;
//     padding: 0 0.5em;
//   }
//   &__header {
//     text-align: left;
//     padding: 0.5em 0;
//     background-color: #1E212A;
//     color: #f8f8f8;
//   }
//   &__decision-button {
//     display: block;
//     width: 100%;
//     padding: 0.5em 0;
//     box-sizing: border-box;
//     margin: 1em 0;
//     font-size: 1.2em;
//     font-weight: bold;
//     color: #f8f8f8;
//     background-color: #8648CA;
//     border-radius: 3px;
//     cursor: pointer;
//     &:disabled {
//       background-color: #6d4499;
//       cursor: initial;
//     }
//     &:hover {
//       transition: background-color 0.3s ease;
//       background-color: #6d4499;
//     }
//   }
//   &__title {
//     margin: 0;
//   }
//   &__subtitle {
//     margin: 0;
//   }
//   &__option {
//     color: #ffffff;
//     border-radius: 3px;
//     &__title {
//       display: flex;
//       justify-content: space-between;
//       background-color: #46495F;
//       padding: 0.5em;
//       border-radius: 3px;
//     }
//     &__list {
//       background-color: #3B4150;
//       padding-top: 0.5em;
//       margin-bottom: 0;
//       border-top-left-radius: 3px;
//       border-top-right-radius: 3px;
//       list-style-type: none;
//       padding: 0;
//       &__list-item {
//         border-bottom: 1px solid #6a6969;
//         padding: 0.5em;
//       }
//     }
//     &__form {
//       background-color: #3B4150;
//       padding: 0.5em;
//       border-bottom-left-radius: 3px;
//       border-bottom-right-radius: 3px;
//       display: flex;
//       justify-content: space-between;
//     }
//     &__form__input {
//       flex: 1;
//       margin-right: 0.5em;
//       border-radius: 3px;
//     }
//   }
//   &__button {
//     height: auto;
//     padding: 0.5em 1em;
//     border-radius: 3px;
//     cursor: pointer;
//   }
// }