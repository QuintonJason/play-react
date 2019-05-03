import React, { Component } from "react";
import '../styles/components/button.css';

export default class Button extends Component {
  // define props
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false
    };
  }
  toggleIsDisabled = e => {
    this.setState({
      isDisabled: !this.state.isDisabled
    });
  };
  componentDidMount = () => {
    //read the props in order to update the state
    this.setState({isDisabled: this.props.isDisabled});
  }
  render() {
    const disabledClass = this.state.isDisabled ? "is-disabled" : "";

    return (
      <button className={`dy-button ${disabledClass}`} onClick={this.toggleIsDisabled}>
        {this.props.buttonText && (
          <span className="dy-button__text">{this.props.buttonText}</span>
          )
        }
      </button>
    );
  }
}