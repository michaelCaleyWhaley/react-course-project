import React from "react";

import Header from "./Header";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";

import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  // using the the plugin for babel named: babel-plugin-transform-class-properties
  // this plugin allows you to remove the constructor from the component. It always removes the need to bind methods by instatiating them as a property with an anonymous function instead

  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => option !== optionToRemove)
      };
    });
  };

  handlePick = () => {
    const maxOptionPos = this.state.options.length;
    const randomNo = Math.floor(Math.random() * maxOptionPos);
    // alert(this.state.options[randomNo]);
    this.setState(() => {
      return {
        selectedOption: this.state.options[randomNo]
      };
    });
  };

  handleClearSelectedOption = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: [...prevState.options, option] }));
  };

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
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
    );
  }
}

export default IndecisionApp;
