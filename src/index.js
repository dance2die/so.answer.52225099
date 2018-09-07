import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

const messageList = [
  "<h2>Header</h2>",
  "<body>This is body!</body>",
  "<footer>Footer!</footer>"
];

function createMarkup() {
  return { __html: messageList.join("") };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
