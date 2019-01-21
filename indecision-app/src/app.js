class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: this.props.options
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
  }

  // has access to arguements prevProps and prevState
  // saves list to local storage on update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => option !== optionToRemove)
      };
    });
  }

  handlePick() {
    const maxOptionPos = this.state.options.length;
    const randomNo = Math.floor(Math.random() * maxOptionPos);
    alert(this.state.options[randomNo]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: [...prevState.options, option] }));
  }

  render() {
    const subTitle = "Put you life in the hands of a computer";
    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

// CLASS BASES COMPONENT - doesn't require state so converted to stateless functional component
// class Header extends React.Component {
//   render() {
//     const { props } = this;
//     return (
//       <div>
//         <h1>{props.title}</h1>
//         <h2>{props.subTitle}</h2>
//       </div>
//     );
//   }
// }

// STATELESS FUNCTIONAL COMPONENT
// HEADER COMPONENT
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

// ACTION COMPONENT
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

// OPTIONS COMPONENT
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ul>
        {props.options.map((option, index) => {
          return (
            <Option
              value={option}
              key={index + option}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ul>
    </div>
  );
};

// OPTION COMPONENT
const Option = props => {
  return (
    <li>
      {props.value}
      <button
        onClick={e => {
          props.handleDeleteOption(props.value);
        }}
      >
        Remove
      </button>
    </li>
  );
};

// ADD OPTION COMPONENT
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <IndecisionApp options={["Devils den", "Second District"]} />,
  document.getElementById("app")
);
