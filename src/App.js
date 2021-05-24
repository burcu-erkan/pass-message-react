import React from "react";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      messages: "",
      alert: "",
      temp: ""
    };
  }

  changed = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  submitted = (e) => {
    const { inputValue } = this.state;

    if (inputValue) {
      this.setState({ messages: inputValue.toUpperCase(), inputValue: "" });
    } else {
      this.setState({ alert: "Please enter value!" });
    }
  };

  render() {
    const { inputValue, messages, alert } = this.state;

    setTimeout(() => {
      this.setState({ alert: "" });
    }, 6000);

    return (
      <div className="container">
        <h2>A Message You Would Like To Pass</h2>
        <div>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={this.changed}
          />
          <Button func={this.submitted} />
        </div>
        <p className="alert">{alert}</p>
        <h2>Last Message Delivered</h2>
        <p className="msg">{messages} </p>
      </div>
    );
  }
}
export default App;
