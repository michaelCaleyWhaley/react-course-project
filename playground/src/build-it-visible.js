
class VisibilityToggle extends React.Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      visiiblity: false
    };
  }

  handleOnClick() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    const { visibility } = this.state;
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleOnClick}>
          {!visibility ? 'Show details' : 'Hide details'}
        </button>
        {visibility === true && (<p>These are some details!</p>)}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));